var template = require('marko')
    .load(require.resolve('./template.marko'));

template.render(
    {
        marko: 'marko'
    },
    function(err, html) {
        console.log('Template output: ' + html);
    });

var template = require('marko')
    .load(require.resolve('./template_two.marko'));

template.render(
    {
        marko: 'marko'
    },
    function(err, html) {
        console.log('Template output: ' + html);
    });
