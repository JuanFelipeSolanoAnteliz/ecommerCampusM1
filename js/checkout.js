import { galleryCheckout } from "./module/checkout.js";
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

let checkout__details = document.querySelector("#checkout__details");
checkout__details.innerHTML = await galleryCheckout(info)



