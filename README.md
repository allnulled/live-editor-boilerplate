# live-editor-boilerplate

Customizable live web editor for a specific language.

## Why

Parser generator tools like [PEGjs](https://github.com/pegjs/pegjs) provide enough details of the `SyntaxError`s arised by the action of parsing, that one can provide suggestions at runtime with the adecuate editor. This project is for you to take advantage of this fact, automatically.

## Install

```sh
$ git clone https://github.com/allnulled/live-editor-boilerplate.git .
```

## Customize

In order to customize your own application, you have to alter these files:

- **File:** `lib/yourlanguage.parser.pegjs`. Contains the source of a [PEGjs syntax](https://github.com/pegjs/pegjs). (It is not used in the application, so you can ignore it).
- **File:** `lib/yourlanguage.parser.js`. Contains the parser function.
- **File:** `lib/codemirror.mode-yourlanguage.js`. Contains the styles tokenization of your grammar.
- **File:** `lib/codemirror.mode-yourlanguage.css`. Contains the styles of your grammar tokens.
- **File:** `lib/index.js`. Contains the events of the editor.
- **File:** `index.html`. Contains the editor application entry point.
  - **Lines:**
    - `6`: `<link rel="stylesheet" type="text/css" href="lib/codemirror.mode-yourlanguage.css">`
    - `12`: `<script src="lib/codemirror.mode-yourlanguage.js"></script>`
    - `13`: `<script src="lib/yourlanguage.parser.js"></script>`
    - `17`: `<title>Your Language</title>`
    - `22`: `<textarea id="e1" data-pegeditor-grammar="yourlanguage"></textarea>`
    - `23`: `<div class="editor-label">yourlanguage</div>`
    - `26`: `<textarea id="e2" data-pegeditor-settings='{"mode":"yourlanguage-reporter"}'></textarea>`

## Run

As this application is client-side only, you can use any type of server to host it.

## Notes

The project is released with a working example for the [`contratos`](https://github.com/allnulled/contratos) language, for you to see how it works already.

## License

This project is released under [**WTFPL** or *What The Fuck Public License](https://es.wikipedia.org/wiki/WTFPL).

## Issues

If you find any issue, please, let me know through [this form](https://github.com/allnulled/live-editor-boilerplate/issues).
