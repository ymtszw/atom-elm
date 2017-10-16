# language-elm package

Syntax highlighting and autocomplete for the [Elm language](http://elm-lang.org/).

Autocomplete feature is depending on [Elm Oracle](https://github.com/ElmCast/elm-oracle).

## Fork note

This is fork repository of [edubkendo/atom-elm](https://github.com/edubkendo/atom-elm), refining syntax pattern-matches and adding snippets for Elm 0.18+.

Also, somewhat fixed [Elm Oracle](https://github.com/ElmCast/elm-oracle) integration.
It currently requires you to install `elm-oracle` by yourself. (Removed runtime dependency to `elm-oracle` in package.json)

Since original `atom-elm` repository is stale for some time, contributions are welcomed.

## Installation

1. Install [Elm Oracle](https://github.com/ElmCast/elm-oracle).
2. `apm install ymtszw/language-elm`

## Jump to Symbol

Atom's native `symbols-view` package uses `ctags`, and thus doesn't support Elm without extra configuration.
But [goto](https://atom.io/packages/goto) package uses langauge definition files to identify symbols, and does support Elm as long as atom-elm is installed.
(Not tested after fork, though)

If you prefer `ctags` and default `symbols-view`, [kbsymanz/ctags-elm](https://github.com/kbsymanz/ctags-elm) configuration may help.
