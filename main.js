img="";
status="";
objects=[];
function preload(){
	img=loadImage('dog_cat.jpg');
}
 
function setup(){
	canvas=createCanvas(640, 320);
	canvas.center();
	objectDetector=ml5.objectDetector('cocossd', modelLoaded);
	document.getElementById("status").innerHTML="Status: Detecting Object";
}

 function draw(){
	 image(img, 0, 0, 640, 320);
if(status !=""){
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="Status:Object Dected";
fill("#FF0000");
stroke("#FFFFF0");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+"%", objects[i].x+15,objects[i].y+15);
noFill();
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);



}
}

 }

  function modelLoaded(){
	  console.log("Model Loaded!")
	  status=true;
	  objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results){
if(error){
	console.log(error);
}
else{
	console.log(results);
	object=results;
}
  }