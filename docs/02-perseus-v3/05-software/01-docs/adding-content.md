# Adding Content

Adding content is as simple writing markdown (well mostly) through the magic of [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)! The markdown files inside the `docs` directory are rendered as pages using to define collapsable sections. Now of course, there are a few details to remember here:

- The name of the file be used as the section name unless a top level header `#` is specified
- To add content to the collapsible sections place an `index.md` file inside the folder
- Specifiying the order that files appear in can be done via the `.nav.yml` file.

All other extensions and features are well documented on the Material for MkDocs website with a summary of useful features like code blocks and call outs in this section.

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

For a good refernce if you've forgotten how to use some of these is this [cheat sheet](https://www.markdownguide.org/cheat-sheet/).

## Navigation Tree

If you don't care about the order of the pages that you are writing then this section isn't for you. For those who do, the answers you are looking for are in the `docs/.nav.yml` file. This file can be used to define the order and name of sections in the tree that you can see on the left. [Awesome Nav for MkDocs](https://lukasgeiter.github.io/mkdocs-awesome-nav/) is responsible for this feature and has good examples of how to use this file on their website.
