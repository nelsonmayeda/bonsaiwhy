(function () {
    var apply = function (selector, callback) {
        var list = document.querySelectorAll(selector);
        for (var i = 0; i < list.length; i++) {
            callback(list[i]);
        }
    };
    /*toggle data-toggle class in data-target*/
    var toggle = function () {
        var dataTarget = this.getAttribute("data-target");
        var dataToggle = this.getAttribute("data-toggle");
        apply(
			dataTarget,
			function (element) {
			    element.classList.toggle(dataToggle);
			}
		);
    };
    /*add click handler to navbar-toggle class*/
    var init = function () {
        apply(
			".navbar-toggle",
			function (element) {
			    element.addEventListener("click", toggle);
			}
		);
    };

    init();
})();