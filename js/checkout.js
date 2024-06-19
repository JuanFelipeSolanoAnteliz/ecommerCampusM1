import { headerCheckout } from "./module/checkout.js";
import { galleryCheckout } from "./module/checkout.js";
import {pricesCheckout}from"./module/checkout.js";

let listsessionStorage = [];
let value;
let info;

for( let i = 0; i < sessionStorage.length; i ++){
    let key = sessionStorage.key(i);
    value = sessionStorage.getItem(key);
    listsessionStorage.push(JSON.parse(value));
    info = listsessionStorage;
}
console.log(info);

let nav = document.querySelector("#nav");
nav.innerHTML = await headerCheckout()
let checkout__details = document.querySelector("#checkout__details");
checkout__details.innerHTML = await galleryCheckout(info);
let quantity = document.querySelector("#quantity");
quantity.innerHTML = await pricesCheckout();


let plus__checkout = document.querySelector("#plus__Checkout");
let counter = document.querySelector("#counter");
let minus__checkout =document.querySelector("#minus__checkout");
let items = document.querySelector("#items");
let acumulative__price = document.querySelector("#acumulative__price");
let sub__total = document.querySelector("#sub__total");

document.querySelectorAll("#plus__Checkout").forEach(element => {
    element.addEventListener('click', async (e) => {
        let intCounter = parseInt(counter.textContent);
        if (intCounter >= 1) {
            intCounter++;
            counter.textContent = intCounter;
            updateItemsLabel(intCounter);
        }
    });
});

document.querySelectorAll("#minus__checkout").forEach(element=>{

        element.addEventListener('click',async (e)=>{
        let intCounter = parseInt(counter.textContent);
        if(intCounter>1){
            intCounter--;
            counter.textContent=intCounter;
            updateItemsLabel(intCounter);
        }
    });
});

function updateItemsLabel(count) {
    let itemsLabel = document.querySelector("#items");
    let acumulative__price = document.querySelector("#acumulative__price");
    if (itemsLabel) {
        itemsLabel.textContent = `Total (${info.length-1} items)`;
    }

}

let countItems = 1;
updateItemsLabel(countItems);
countItems++;
updateItemsLabel(countItems);







