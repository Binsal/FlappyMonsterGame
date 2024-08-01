function WallFactory(canvas){
    var factory = this;

    factory.canvas = canvas;
    factory.context = factory.canvas.getContext('2d');

    factory.gap = 200;
    factory.maxGap = 300;

    factory.freq = 1500;

    factory.walls = [];
}

WallFactory.prototype.generateWalls = function(){

    var factory = this;

    setInterval(function(){
        var gap = getRandomInt(factory.gap,factory.maxGap);
        var height = getRandomInt(0,factory.maxGap);

        var wall = new Wall(factory.canvas);
        wall.gap = gap;
        wall.h = height;

        factory.walls.push(wall);
    },factory.freq);

};