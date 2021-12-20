var character = document.getElementById("character");
var block = document.getElementById("block");
character.classList.add("animate");
character.classList.add("walking")

var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");

    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function end(message){
    block.style.animation = "none";
    if (message)
    alert(message);
    else
    alert("Oh man, you got drunk again! You have made it "+(Math.floor(counter/100))+"% to the peak!");
}

function start(){
    counter=0;
    block.style.animation = "block 1s infinite linear";
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (counter>10000)
    {
        end("Wohoo!!! You've managed to avoid drinking till the top! Now you get.. the chance to drink on the mountain's peak!")
        start()
    }
    else if (blockLeft<30 && blockLeft>6 && characterTop>=130){
        end()
        start()
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }

}, 10);