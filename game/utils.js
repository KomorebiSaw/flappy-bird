var e = sel => document.querySelector(sel)

var es = sel => document.querySelectorAll(sel)

var bindAll = function (sel, eventName, callback) {
    var elements = es(sel)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.addEventListener(eventName, callback)
    }
}

var log = console.log.bind(console)

const randonBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

var rectIntersects = function(a, b) {
    var rect1 = a;
    var rect2 = b;
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
            return true
        }
    return false
}
