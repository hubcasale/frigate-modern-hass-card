#!/usr/bin/env python3
"""Check every src/lang-*.js against the strings the card actually asks for.

  python tools/check-lang.py

Reports, per language: keys the card uses that are not translated, keys that no
longer exist, and translations that lost a {n} placeholder, <b> or <br>. A missing
entry is not fatal (the card shows English), but it is worth knowing about.
"""
import re, glob, sys, os

root = os.path.join(os.path.dirname(__file__), '..')
src = ''.join(open(p, encoding='utf-8').read() for p in glob.glob(os.path.join(root, 'src', '*.js'))
              if not os.path.basename(p).startswith('lang-'))

# Every literal the card passes to tr(...). Keys are written with ' or ", and
# may use \' inside, so read the quoted string rather than guessing.
used = set()
for m in re.finditer(r"""\btr\(\s*(?:'((?:\\.|[^'\\])*)'|"((?:\\.|[^"\\])*)")""", src):
    used.add((m.group(1) if m.group(1) is not None else m.group(2)).replace("\\'", "'"))

# Strings chosen in a lookup table or ternary and passed to tr() afterwards.
dynamic = {'Recent events','Recordings','Clips','Snapshots','Reviews','Kept','Kept events','Live'}
used |= dynamic
# Grid layout labels live in constants.js and go through tr(l.label).
used |= set(re.findall(r"label:\s*'([^']+)'", open(os.path.join(root, 'src', 'constants.js'), encoding='utf-8').read()))
# Language-neutral labels such as '2 x 2' need no translation.
used = {k for k in used if not re.fullmatch(r'[\d x]+', k)}

def entries(text):
    out = {}
    for m in re.finditer(r"""^\s{2}(?:'((?:\\.|[^'\\])*)'|"((?:\\.|[^"\\])*)")\s*:\s*\n?\s*(?:'((?:\\.|[^'\\])*)'|"((?:\\.|[^"\\])*)")""", text, re.M):
        k = (m.group(1) if m.group(1) is not None else m.group(2)).replace("\\'", "'")
        v = (m.group(3) if m.group(3) is not None else m.group(4)).replace("\\'", "'")
        out[k] = v
    return out

bad = 0
for path in sorted(glob.glob(os.path.join(root, 'src', 'lang-*.js'))):
    text = open(path, encoding='utf-8').read()
    strings = text.split('_LABELS')[0]
    e = entries(strings)
    code = os.path.basename(path)[5:-3]
    missing = sorted(k for k in used if k not in e)
    extra = sorted(k for k in e if k not in used)
    broken = []
    for k, v in e.items():
        for tok in re.findall(r'\{\w+\}|</?b>|<br>', k):
            if tok not in v: broken.append((k, tok))
    if missing or extra or broken:
        bad += 1
        print(f'[{code}] {len(e)} entries')
        for k in missing: print('   missing :', k[:90])
        for k in extra:   print('   unused  :', k[:90])
        for k, t in broken: print('   lost', t, 'in:', k[:70])
    else:
        print(f'[{code}] OK ({len(e)} entries)')
sys.exit(1 if bad else 0)
