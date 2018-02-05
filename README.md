# language-elm package

Syntax highlighting for the [Elm language](http://elm-lang.org/), 0.18+.

## Fork note

This is a fork repository of [edubkendo/atom-elm](https://github.com/edubkendo/atom-elm),
refining syntax highlights and adding snippets for Elm 0.18+.

Also, removed autocomplete provider feature using [Elm Oracle](https://github.com/ElmCast/elm-oracle),
since `elm-oracle` itself is not actively updated for 0.17+.
We recommend using [elmjutsu](https://github.com/halohalospecial/atom-elmjutsu) for now.

Original `atom-elm` repository is stale for some time, so contributions are welcomed.

## Installation

- `apm install ymtszw/language-elm`

## Jump to Symbol

Atom's native `symbols-view` package uses `ctags`, and thus doesn't support Elm without extra configuration.
But [goto](https://atom.io/packages/goto) package uses langauge definition files to identify symbols,
and does support Elm as long as language-elm is installed. (Not tested after fork, though)

If you prefer `ctags` and default `symbols-view`,
[kbsymanz/ctags-elm](https://github.com/kbsymanz/ctags-elm) configuration may help.
