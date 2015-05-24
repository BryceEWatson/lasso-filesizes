# lasso-filesizes
Testing the various compressed &amp; uncompressed file sizes for common lasso resources.

# results

Results were compiled with [Google's Closure Compiler](https://closure-compiler.appspot.com/home)

- html / pure JS
  - 1.44KB gzipped (3.3kb unzipped)
- jQuery only
  - 29.89KB gzipped (96.4kb unzipped)
- single marko template
  - 5.51KB gzipped (20.3kb unzipped)
- two marko templates
  - 5.57KB gzipped, difference of ~60bytes
- single marko-widget
  - 14.19KB gzipped (54.3kb unzipped)
- two marko-widgets
  - 14.22KB gzipped (55.3kb unzipped), difference of ~30bytes
