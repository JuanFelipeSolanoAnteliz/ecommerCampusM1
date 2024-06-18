
import {galleryCategory} from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import {getProductId} from "./module/detail.js";
import {contentTitle} from "./components/descriptions.js";
import {priceDetails} from "./components/detailfooter.js";


let main__section_gallery  = document.querySelector("#main__section_gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");

let plusCounter = document.querySelector("#plusCounter");
let minusCounter = document.querySelector("#minusCounter");
let units = document.querySelector("#units");
let total__price = document.querySelector("#total__price");

let footer__detail = document.querySelector("#footer__detail");

addEventListener("DOMContentLoaded", async (e) =>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await contentTitle(info);
    footer__detail.innerHTML= await priceDetails(info);
    // let {data} = res;
    // let {
        //     category_path,
        //     about_product,
        //     product_details,
        //     product_information,
        //     product_photos,
        //     product_variations,
        //     rating_distribution,
        //     review_aspects,
        //     ...dataUpdate
        // } = data;
        // console.log(dataUpdate);
    })
    
    
    
    
    plusCounter.addEventListener('click', async (e) => {
        let quantity = parseInt(units.textContent);
        
        if (info.data.product_price !== null) {
            let numberPrice = parseFloat(info.data.product_price.replace('$', ''));
            
            if (info.data.product_original_price !== null) {
                let originalPrice = parseFloat(info.data.product_original_price.replace('$', ''));
                
                if (quantity > 1) {
                    quantity++; // Incrementa la cantidad
                    units.textContent = quantity; // Actualiza el texto de unidades
    
                    total__price.innerHTML = /*html*/ `
                        <span id="total__price">add to cart | $${numberPrice * quantity} <sub>$${originalPrice * quantity}</sub></span>
                    `;
                } else {
                    // No debería llegar aquí porque no permites que quantity sea menor o igual a 1
                }
            } else {
                if (quantity > 1) {
                    quantity++; // Incrementa la cantidad
                    units.textContent = quantity; // Actualiza el texto de unidades
    
                    total__price.innerHTML = /*html*/ `
                        <span id="total__price">add to cart | $${numberPrice * quantity}</span>
                    `;
                }
            }
        }
    });

minusCounter.addEventListener('click',async (e)=>{
    quantity = parseint(units.textContent);
    if(info.data.product_price !== null){
        let numberPrice = parseInt(info.data.product_price.replace('$',''));
        if(info.data.product_original_price !== null){
            let originalprice = parseInt(info.data.product_original_price.replace('$',''));
            if(units > 1){
                units.textContent = quantity - 1;
                quantity = parseInt(units.textContent);
                total__price.innerHTML = /*html*/`
                <span id="total__price" >add to car | $${numberPrice*quantity} <sub>$${originalprice*quantity}</sub></span>
                `;
            }else{
                if(quantity>1){
                    units.textContent = quantity -1;
                    quantity = parseInt(units.textContent - 1);

                    total__price.innerHTML = /*html*/`
                    <span id="total__price" >add to car | $${numberPrice*quantity}</span>
                    `;
                };
            }
        };
    }else{
        if(quantity > 1){
            units.textContent = quantity + 1;
        };
    };
});

