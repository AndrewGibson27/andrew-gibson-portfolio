export default function bindNavEvents() {
    $('#js__hamburger').click(function(){
        $('.nav').toggleClass('nav--sidebar-showing');
    });
}