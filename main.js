sketches=["teddy-bear","laptop","lantern","apple","clock","carrot","cup","star","duck"];
random_number=Math.floor((Math.random()*sketches.length));
sketch=sketches[random_number];
document.getElementById("sketch_name").innerHTML="Sketch to be drawn: "+sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;
function updateCanvas(){
    background('white');
    random_number=Math.floor((Math.random()*sketches.length));
sketch=sketches[random_number];
document.getElementById("sketch_name").innerHTML="Sketch to be drawn: "+sketch;
}
function setup() {
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function draw() {
    check_sketch();
    if (drawn_sketch==sketch){
        answer_holder="set";
        score=score+1;
        document.getElementById('score').innerHTML="Score : "+score;
    }
}
function check_sketch(){
    timer_counter++;
    document.getElementById("time").innerHTML="Timer : "+timer_counter;
    console.log (timer_counter);
    if (timer_counter>400){
        timer_counter=0;
        timer_check="completed";
    }
    if (timer_check=="completed"|| answer_holder=="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
}