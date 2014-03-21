(function ( $ ) {
    $.fn.simpleAccordion = function(options){
        var settings = $.extend({
            expandAll: false,
            collapseAll: false
        }, options );

        if (settings.expandAll){
            $(settings.expandAll).click(function(){
                $('._content').show()
            })
        }

        if (settings.collapseAll){
            $(settings.collapseAll).click(function(){
                $('._content').hide()
            })
        }

        return this.each(function(ind, obj) {
            var acc = $(obj);
            var titles = acc.children('._title');
            titles.each(function(i, e){
                var title = $(e)
                var content = title.next('._content');
                title.click(function(){
                    content.toggle();
                });
            })
        });
    }
}( jQuery ));