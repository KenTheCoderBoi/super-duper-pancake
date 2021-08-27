var r = 0
var g = 0
var b = 0
var dog = ""
var objects = []
var status = ""
function preload(){
    dog = loadImage("hi.jpg")
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()

    document.getElementById("status").innerHTML = "status:waiting"
    objectdetector = ml5.objectDetector("cocossd",modelLoaded)
}
function modelLoaded(){
    console.log("modelloaded")
    status = true

}
function gotresults(error,results){
    if(error){
        console.log("oh no")
    }
    console.log(results)
    objects = results
}

function draw(){
    image(video,0,0,640,420)
    if(status != ""){    
    r = random(100)
    g = random(100)
    b = random(100)
    objectdetector.detect(video,gotresults)
    for(i=0 ;i < objects.length; i++){

    fill(r,g,b)
    text(objects[i].label,objects[i].x,objects[i].y)
    document.getElementById("status").innerHTML = "status:on"
    document.getElementById("objects").innerHTML = "there are "+objects.length+"objects in the camera"
    textSize(30)
    noFill()
    stroke(r,g,b)
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height)
    }}


}