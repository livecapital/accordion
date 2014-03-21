(function ( $ ) {
    $.fn.simpleAccordion = function(options){
        var settings = $.extend({
            expanseAll: false,
            collapseAll: false
        }, options );

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