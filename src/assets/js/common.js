var App = {
    init: function() {
        this.bind();
    },
    bind: function() {
        $(".c-navmenu-banner .menu").click(function() {
            $(".zen-container").toggleClass("nav-on");
        });
    }
}
$(function() {
    App.init();
})
