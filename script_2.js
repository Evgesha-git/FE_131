var accordeon = function (selector) {
    var elems = document.querySelectorAll(selector);
    var accordeonHandler = function (container) {
        var li = container.querySelectorAll('li');
        if (!li)
            return;
        var collapse = function (target) {
            var parent = target.parentNode;
            if (!parent)
                return;
            li.forEach(function (item) {
                if (item !== parent) {
                    var title = item.firstElementChild;
                    var content = item.lastElementChild;
                    title.classList.remove('active');
                    content.classList.remove('active');
                }
            });
        };
        var clickHandler = function (e) {
            var target = e.target;
            if (target.classList.contains('title')) {
                target.classList.toggle('active');
                var content = target.nextElementSibling;
                content.classList.toggle('active');
                collapse(target);
            }
        };
        container.addEventListener('click', clickHandler);
    };
    elems.forEach(function (element) { return accordeonHandler(element); });
};
accordeon('.accordeon');
var arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));
