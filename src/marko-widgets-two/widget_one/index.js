module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),

    getTemplateData: function(state, input) {
        return {
            hello: input.hello
        };
    },

    init: function() {
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    }
});