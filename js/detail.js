
import {galleryCategory} from "./components/gallery.js";
import { titleProductDetail } from "./components/section.js";
import {getProductId} from "./module/detail.js";
import {contentTitle} from "./components/descriptions.js";
import {priceDetails} from "./components/detailfooter.js";

// console.log(await getFromLocal());

let main__section_gallery  = document.querySelector("#main__section_gallery");
let main__section__title = document.querySelector("#main__section__title");
let main__section__description = document.querySelector("#main__section__description");
let footer__detail = document.querySelector("#footer__detail");

addEventListener("DOMContentLoaded", async (e) =>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductId({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    console.log(info)
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section__title.innerHTML = await titleProductDetail(info);
    main__section__description.innerHTML = await contentTitle(info);
    footer__detail.innerHTML= await priceDetails(info);

    footer__detail.addEventListener('click', async (e)=>{
        sessionStorage.setItem(location.search, localStorage.getItem(id));
        console.log('si');
    })

    let plusCounter = document.querySelector("#plusCounter");
    let minusCounter = document.querySelector("#minusCounter");
    let units = document.querySelector("#units");
    let total__price = document.querySelector("#total__price");

   
    plusCounter.addEventListener('click', async (e) => {
        let quantity = parseInt(units.textContent);
        
        if (info.data.product_price !== null) {
            let numberPrice = parseFloat(info.data.product_price.replace('$', ''));

            if (info.data.product_original_price !== null) {
                let originalPrice = parseFloat(info.data.product_original_price.replace('$', ''));
                
                if (quantity >= 1) {
                    quantity++; // Incrementa la cantidad
                    units.textContent = quantity; // Actualiza el texto de unidades
    
                    total__price.innerHTML = /*html*/ `
                        <span id="total__price">add to cart | $${numberPrice * quantity} <sub>$${originalPrice * quantity}</sub></span>
                    `;
                } else {
                    console.log("si")
                    // No debería llegar aquí porque no permites que quantity sea menor o igual a 1
                }
            } else {
                if (quantity >= 1) {
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
    let quantity = parseInt(units.textContent);

    if(info.data.product_price !== null){
        let numberPrice = parseFloat(info.data.product_price.replace('$',''));

        if(info.data.product_original_price !== null){
            let originalprice = parseFloat(info.data.product_original_price.replace('$',''));

            if(units >= 1){
                units.textContent = quantity - 1;
                quantity = parseInt(units.textContent);
                total__price.innerHTML = /*html*/`
                <span id="total__price" >add to car | $${numberPrice*quantity} <sub>$${originalprice*quantity}</sub></span>
                `;
            }else{
                if(quantity>=1){
                    units.textContent = quantity -1;
                    quantity = parseInt(units.textContent - 1);

                    total__price.innerHTML = /*html*/`
                    <span id="total__price" >add to car | $${numberPrice*quantity}</span>
                    `;
                };
            }
        }else {if(quantity > 1){
            units.textContent = quantity - 1;}

            total__price.innerHTML = /*html*/`
                    <span id="total__price" >add to car | $${numberPrice*quantity}</span>
                    `;
        };
    };
});

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
    
    
    
 
