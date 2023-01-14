const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var block_image_object=""

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg" , function(Img){
    block_image_object=Img;

    block_image_object.scaleTOWidth(700);
    block_image_object.scaleTOheight(600);
    block_image_object.set({
        top:100
        left:0
    })
    canvas.add(block_image_object);
})
}	
	
}

function playSound(){
    x.play();
    console.log("play");
	
}
