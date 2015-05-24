# two compressed marko widgets

Compressing two marko widgets to see the incremental cost.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-marko lasso-less --production
```

## results

Single widget: [./static/index-48505bfd.js](./static/index-48505bfd.js): 54.3kb
Two widgets: [./static/index-d19fa67b.js](./static/index-d19fa67b.js): 55.3kb

Each additional widget will add ~1kb to the page.

