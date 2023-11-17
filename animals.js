var numberOfButtons=document.querySelectorAll(".anime").length;


for(var i=0; i<numberOfButtons;i++){
    document.querySelectorAll(".anime")[i].addEventListener("click",function(){

        

        var buttonInnerHTML=this.HTML;
        buttonAnimation(buttonInnerHTML);

        switch(buttonInnerHTML){
            case "B":
        var bird=new Audio("Sounds/bird sound.mp3");
        bird.play();
        break;
                case "W":
    var wolf=new Audio("Sounds/wolf sounds.wav");
                    wolf.play();
                    break;

                    default:alert("not found");
            
        
        }

    });
}


document.addEventListener("keypress", function(){
    alert("key was press");
});


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");


setTimeout()
    activeButton.classList.remove("pressed");

}
