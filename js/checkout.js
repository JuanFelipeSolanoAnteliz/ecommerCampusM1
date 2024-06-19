import { headerCheckout } from "./module/checkout.js";
import { galleryCheckout } from "./module/checkout.js";
import {pricesCheckout}from"./module/checkout.js";

let listsessionStorage = [];
let value;
let info;
let newVar = document.querySelectorAll("#detail__product")
for( let i = 0; i < sessionStorage.length; i ++){
    let key = sessionStorage.key(i);
    value = sessionStorage.getItem(key);
    listsessionStorage.push(JSON.parse(value));
    info = listsessionStorage;
}

console.log(info);
let pricesList = [];
info.forEach(element=>{
    if(element.data){
        let price = null;

        if(element.data.product_price){
            price = parseFloat(element.data.product_price)
        }else if(element.data.product_original_price){
            price = parseFloat(element.data.product_original_price)
        };
        if(price !== null && !isNaN(price)){
            pricesList.push(price);
        }else{
            pricesList.push(1);
        };
    };
})
console.log(pricesList)
let sumaPrecios = pricesList.reduce((total, numero) => total + numero, 0);
console.log(sumaPrecios)

let countData = 0;
info.forEach(element => {
    if(element.data) countData-=-1;
});
    console.log(countData);

let nav = document.querySelector("#nav");
nav.innerHTML = await headerCheckout()
let checkout__details = document.querySelector("#checkout__details");
checkout__details.innerHTML = await galleryCheckout(info);
let quantity = document.querySelector("#quantity");
quantity.innerHTML = await pricesCheckout(sumaPrecios);


let plus__checkout = document.querySelector("#plus__Checkout");
let counter = document.querySelector("#counter");
let minus__checkout =document.querySelector("#minus__checkout");
let items = document.querySelector("#items");

document.querySelectorAll("#plus__Checkout").forEach(element => {
    element.addEventListener('click', async (e) => {
        countData;
        if (countData >= 1) {
            countData++;
            counter.textContent = countData;
            updateItemsLabel(countData);
            preciosxItem(sumaPrecios);  
        }
    });
});

document.querySelectorAll("#minus__checkout").forEach(element=>{

        element.addEventListener('click',async (e)=>{
        countData
        if(countData>1){
            countData--;
            counter.textContent=countData;
            updateItemsLabel(countData);
            preciosxItem(sumaPrecios);
        }
    });
});

function updateItemsLabel(count) {
    let itemsLabel = document.querySelector("#items");
    let acumulative__price = document.querySelector("#acumulative__price");
    if (itemsLabel) {
        itemsLabel.textContent = `Total (${countData} items)`;
    }

}

const preciosxItem = async (sumaPrecios) => {
    let acumulative__price = document.querySelector("#acumulative__price");
    let sub__total = document.querySelector("#sub__total");
    acumulative__price.textContent = `${sumaPrecios*countData}`
    sub__total.textContent = `${sumaPrecios*countData}`
}

let countItems = 1;
updateItemsLabel(countItems);
countItems++;
updateItemsLabel(countItems);







