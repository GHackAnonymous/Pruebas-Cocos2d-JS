
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var splite = new cc.Sprite.create(res.greenrectangule_png);

        splite.setAnchorPoint(cc.p(0.5, 0.5));
        splite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(splite, 0);
        
        //var splite_action = cc.MoveTo.create(5, cc.p((size.width/2)+(size.width/4),size.width/2));
        var splite_action = cc.MoveBy.create(1, cc.p(50,100));
        splite.runAction(splite_action);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

