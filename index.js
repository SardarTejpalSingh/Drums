// var buttons = document.querySelectorAll("button");
// for(var i=0;i<buttons.length;i++){
//     buttons[i].addEventListener("click", function () {
//         makeSound(this.innerHTML);
//         tog(this.innerHTML);      
//     });    
// }

$("button").on("click", function(){
    makeSound(this.innerHTML);
    tog(this.innerHTML);
})

// document.addEventListener("keypress", function(event) {
//     makeSound(event.key);
//     tog(event.key);
// });

$(document).on("keypress", function(event) {
        makeSound(event.key);
        tog(event.key);
})

function makeSound(c) {
    switch (c) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log("This is a sound");
            break;
    }
}

function tog(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");    
    }, 100);
}