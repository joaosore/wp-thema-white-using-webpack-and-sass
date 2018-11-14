$.fn.extend({
    clickOrTouch: function(handler) {
        return this.each(function() {
            var event = document.ontouchstart !== null ? 'click':'touchstart';
            $(this).on(event, handler);
        });
    }
});