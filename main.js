function preload(){

}
function setup(){
    createCanvas(700, 500);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,640,480);
    fill(0, 0, 0, 0);
    stroke(0, 209, 0);
    strokeWeight(20);
    rect(40, 40, 620, 425);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(15);
    circle(50,50,80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(15);
    circle(650,50,80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(15);
    circle(50,450,80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(15);
    circle(650,450,80);
}
function take_snapshot(){
    save('student_name.png');
}