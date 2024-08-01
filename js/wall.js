function Wall(canvas){
    var wall = this;

    wall.canvas = canvas;
    wall.context = wall.canvas.getContext('2d');

    wall.x = canvas.width;
    wall.y = 0;

    wall.w = 100;
    wall.h = 0;

    wall.gap =0;
    wall.color = getRandomColor();

}

Wall.prototype.draw = function(){
    var wall = this;

    wall.context.fillStyle = wall.color;

    wall.context.fillRect(wall.x,wall.y,wall.w,wall.h);

    wall.context.fillRect(wall.x,wall.h + wall.gap,wall.w,wall.canvas.height);

};