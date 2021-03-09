var canvas;
var ctx;
var w = 1100;
var h = 700;
var allCircles = [];

var o1 = {
    "x": rand(w),
    "dx": rand(10),
    "y": rand(h),
    "dy":rand(10),
    "r": 50,
    "c": 420,
    "a": 0.1
}


var o4 = {
    "x": w/2,
    "y": h/2,
    "w": 10,
    "h": 1000,
    "c": 330,
    "a": 0.1,
    "angle": 0,
    "changle": 10,
    "distance": 100
}

var o5 = {
    "x": w/2,
    "y": h/4,
    "w": 10,
    "h": 1000,
    "c": 800,
    "a": 0.1,
    "angle": 0,
    "changle": 10,
    "distance": 100
}


var oneDegree = 2*Math.PI/360;




////////////////////////////////////////////////
setUpCanvas();

createData(40);

animationLoop();

function animationLoop(){
    logo(o4);
    angle(o4, 2.5);
    forward(o4,rand(10));

    logo2(o5);
    angle(o5, 5);
    forward(o5,rand(10));

    circlesDrawUpdate(allCircles);
    requestAnimationFrame(animationLoop)
}


///////////////////////////////////////////////////

function logo(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    for(var i = 0; i<10; i++){
        angle(o, 1);
        forward(o, 60);
        ctx.lineTo(o.x, o.y);
        ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
        ctx.fill(); 
    }
    o.x = x;
    o.y = y;
    o.angle = a;
}

function logo2(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    for(var i = 0; i<10; i++){
        angle(o, 1);
        forward(o, 60);
        ctx.lineTo(o.x, o.y);
        ctx.strokeStyle = "hsla("+o.c+",100%,50%,"+o.a+")"
         ctx.stroke();
    }
    o.x = -x;
    o.y = -y;
    o.angle = -a;
}


function angle(o,a){
    if(a == undefined){
        o.angle+=o.changle;
    }else{
        o.angle+=a;
    }
}

function forward(o,d){
    var cx;
    var cy;
    if(d != undefined){
        o.distance = d;
    };
    cx = o.distance*Math.cos(o.angle*oneDegree-5);
    cy = o.distance*Math.sin(o.angle*oneDegree+10);
    o.x+=cx;
    o.y+=cy;

}



//////////////////////////////////////////
function circlesDrawUpdate(a){
    
    for(var i=0; i<allCircles.length; i++){
        circle(a[i]);
        updateData(a[i]);
    }
 
}

function createData(num){
    for(var i=0; i<num; i++){
        allCircles.push({
            "x": w/num*i,
            "y": rand(h),
            "dx": rand(0),
            "dy": rand(8),
            "r": 30,
            "c": 170+rand(60),
            "a": 0.3,
            "da": rand(0.0001)
        })
    }
}

function createRandomData(num){
    for(var i=0; i<8; i++){
        allCircles.push({
            "x": rand(w),
            "y": rand(h),
            "dx": h/2(10),
            "dy": rand(10),
            "r": 80,
            "c": 200+rand(60),
            "a": 0.1
            })
    }
}

function updateData(o){
    var i;
    o.x += o.dx;
    o.y += o.dy;
    o.a -= o.da;

    if(o.a < 0){
        i = allCircles.indexOf(o)
        allCircles.splice(i,1);
    }
    if(o.x > w || o.x < 0){
        o.dx *= -10;
    };
    if(o.y > h || o.y < 0){
        o.dy *= -8;
    }
}


function circle(o){
    ctx.beginPath();
    ctx.arc(o.x, o.y, o.r, 0, 2*Math.PI);
    ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.fill();
    
}









////////////////////////////////////////////
function randn(r){
    var result = Math.random()*r - r/2;
    return result
}

function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}
function rand(r){
    var result = Math.random()*r;
    return result
}







function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "1px dotted silver";
}







console.log("door5")



/////////////////////////////
///work cited
//https://www.w3schools.com/tags/canvas_strokestyle.asp
