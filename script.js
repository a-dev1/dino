let dino = document.querySelector(".dino");
let base = document.querySelector(".horizon")
let game_container = document.querySelector(".game-container")

let add_obstacles = () => {
    let obstacle = document.createElement("div");
    obstacle.classList.add("obstacle");
    game_container.appendChild(obstacle);
    return obstacle;
}

let cal = (e) => {
    if(e.keyCode == 38  || e.keyCode == 32){
        dino.style.bottom = "100px";
        dino.style.animationName = "stop-moving-foot";
        dino.style.backgroundPosition = "0px 0px"; 
        setTimeout(() => {
            dino.style.bottom = "0px";
            dino.style.backgroundPosition = "-44px 0px";
            dino.style.animationName = "moving-foot";
        }, 310); 
    }
}

let dynamic_obstacle;

let time = ((Math.random() * 2200) + 500);

let generate_random = () => {
    setTimeout(() => {
        time = ((Math.random() * 1200) + 500);
        // console.log(time);
        dynamic_obstacle = add_obstacles(); 
        dynamic_obstacle.addEventListener('DOMSubtreeModified', () => {
            console.log('now it will be triggered');
        });
        generate_random();
    }, time);
}
  

generate_random(); 
document.addEventListener('keydown', cal);

 
