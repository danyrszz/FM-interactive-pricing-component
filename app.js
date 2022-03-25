const slider = document.querySelector(".slider");
const viewsLabel = document.querySelector(".pageviews");
const price = document.querySelector(".price");
const toggler = document.querySelector("#toggler");
const togglerControl = document.querySelector(".toggler-control");
const togglerCircle = document.querySelector(".toggler-circle");
let value = 50;
let checked = false;
let currentIndex = 2;
const prices = [8,12,16,24,32];
const pgviews = ["10K PAGEVIEWS","50K PAGEVIEWS","100K PAGEVIEWS","500K PAGEVIEWS","1M PAGEVIEWS"];
const discountedPrices = prices.map(a=>{return a-a*.25});
slider.addEventListener("input", setValue);
toggler.addEventListener("input", toggle);

//init state
renderData(currentIndex);
slider.style.backgroundSize = `50% 100%`;

function renderData(i){
    viewsLabel.textContent = pgviews[i];
    if(!checked){
        price.textContent = `$${parseInt(prices[i]).toFixed(2)}`;
    }else{
        price.textContent = `$${parseInt(discountedPrices[i]).toFixed(2)}`;
    }
}
function setValue(e){
    slider.style.backgroundSize = `${e.target.value}% 100%`;
    value = e.target.value;
    if(value<20){
        currentIndex = 0;
        renderData(0);
    }
    else if(value===20 || value<= 40) {
        currentIndex = 1;
        renderData(1);
    }
    else if(value===40 || value<= 60){
        currentIndex = 2;
        renderData(2);
    }
    else if(value===60 || value<= 80){
        currentIndex = 3;
        renderData(3);
    } 
    else if(value===80 || value<= 100){
        currentIndex = 4;
        renderData(4);
    }
}
function toggle (e){
    if(e.target.checked){
        togglerControl.style.backgroundColor = "hsl(174, 77%, 80%)";
        togglerCircle.style.transform = "translateX(20px)";
        checked = true;
        renderData(currentIndex);
    }else{
        togglerControl.style.backgroundColor = "hsl(223, 50%, 87%)";
        togglerCircle.style.transform = "translateX(0px)";
        checked = false;
        renderData(currentIndex);
    }
}