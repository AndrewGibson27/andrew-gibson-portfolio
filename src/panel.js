export function panelShow() {
    setTimeout(function(){
        $('.panel').removeClass('panel--hidden');
    }, 1000);
}

export function bindPanelClose() {
    $('.panel__close').click(function(){
        $(this).parent().addClass('panel--hidden');
    });
}