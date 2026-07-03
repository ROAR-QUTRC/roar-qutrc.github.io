# Adding Content

Adding content is as simple writing markdown (well mostly) through the magic of [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)! The markdown files inside the `docs` directory are rendered as pages using to define collapsable sections. Now of course, there are a few details to remember here:

- The name of the file be used as the section name unless a top level header `#` is specified
- To add content to the collapsible sections place an `index.md` file inside the folder
- Specifiying the order that files appear in can be done via the `.nav.yml` file.

## Markdown

All vanilla markdown features are supported in addition to a number of custom extensions provided by [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Here is a list of the supported syntaxes:

- Headings
- Bold
- Italics
- Block quotes
- Ordered, unonrdered and task lists
- Code highlighting
- Links
- Images
- Tables
- Foot notes
- Sub and super text
- Term definitions
- Strike through
- Emojis
- Highlighting
- Math (using MathJax)
