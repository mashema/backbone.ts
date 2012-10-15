var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Application = (function () {
    function Application() {
        var button = document.createElement("button");
        var button2 = document.createElement("button");
        $("#content").append(button, button2);
        var fooBtn = new Foo(button);
        fooBtn.render();
        var fooBtn2 = new Foo(button2);
        fooBtn2.render();
    }
    return Application;
})();
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo(el) {
        _super.call(this, el, [
    new Backbone.Event(Foo.prototype.onClick, "click"), 
    new Backbone.Event(Foo.prototype.mouseOver, "mouseover"), 
    new Backbone.Event(Foo.prototype.mouseOut, "mouseout")
]);
        this.clickedCount = 0;
    }
    Foo.prototype.render = function () {
        this.$el.html("Foo Button");
        return this;
    };
    Foo.prototype.onClick = function (jq) {
        console.log("clicked count = " + this.clickedCount++);
        return $(jq.srcElement);
    };
    Foo.prototype.mouseOver = function (jq) {
        console.log("mouseOver");
        return undefined;
    };
    Foo.prototype.mouseOut = function (jq) {
        console.log("mouseOut");
        return undefined;
    };
    return Foo;
})(Backbone.View);