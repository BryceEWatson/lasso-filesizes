# two compressed marko templates

Compressing two marko templates to judge the overhead of each template.

Command:
```bash
lasso --main main.js --inject-into index.html --plugins lasso-marko lasso-less --production
```

## results

- Single template: [./static/index-932e1e1c.js](../marko-single/static/index-932e1e1c.js): 20.3kb
- Two templates: [./static/index-d4a38759.js](../marko-single/static/index-d4a38759.js): 20.7kb
- Each marko template adds ~400bytes of overhead.
