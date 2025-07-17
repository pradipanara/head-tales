const clicks = document.querySelector(".click");
const h2 = document.querySelector(".h2");
const image = document.querySelector("img");
console.log(clicks);
console.log(h2);

clicks.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
    const headtale = gen_com_choice();
    console.log(headtale);
    if (headtale ==="head"){

        image.src = "./images/1.jpg" ;
        clicks.innerText = "It is heads";   
    }else{
        image.src = "./images/2.jpg" ;
        clicks.innerText = "It is tales";
    }
    h2.innerText = "Play Again";
    
});
h2.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    clicks.innerText = "Click To Flip";
    
    h2.innerText = "Play Your Luck";
    image.src = "./images/0.png" ;

});
const gen_com_choice = () =>{
    const option = ["head","tales"];
    const randidx=Math.floor(Math.random() * 2);
    return option[randidx];

}