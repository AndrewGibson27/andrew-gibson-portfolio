export default function evenColumns() {
    const $containers = $('.container').not('.container--min-height');
    
    if (Math.floor($(window).width()) >= 768) {
        $containers.each(function(i){
            const $blocks = $(this).find('.block');
            let tallest = 0;
        
            $blocks.each(function(i){
                $(this).css('min-height', '0px');
            
                if ($(this).height() >= tallest) {
                    tallest = $(this).outerHeight();
                }
            });
        
            $blocks.each(function(i){
                $(this).css('min-height', tallest + 'px');
            });
        });
        
    } else {
        $containers.each(function(i){
            const $blocks = $(this).find('.block');
        
            $blocks.each(function(i){
                $(this).css('min-height', 'auto');
            });
        }); 
    }
}