export const galleryIndex = (res, category)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <section>
           <div class="section__front_page">
               <a href="views/detail.html?id=${value.asin}">
                   <img src="${value.product_photo}">
               </a>
               <img src="storage/img/heart.svg">
           </div>
           <h5>${value.product_title}</h5>
           <small>${category}</small>
           <div class="section__price">
               <span>${(value.product_price)? value.product_price : 0}</span>
               <div  class="price__score">
                   <img src="storage/img/star.svg">
                   <p>${(value.product_star_rating!=null) ? value.product_star_rating : 0}</p>
               </div>
           </div>
       </section>
       `;
    });
    return plantilla
};

export const galleryCategory = ({data: {product_photos}} = res)=>{
    return /*html*/`
        <article class="article__product">
            <div class="product__image">
                ${product_photos.map(value => `<div class="product__image__item"><img src="${value}"></div>`).join('')}
            </div>
            <div class="product__menu">
                <a href="../?id='fashion'">
                    <img src="../storage/img/back.svg">
                </a>
                <img src="../storage/img/heartBlack.svg">
            </div>
        </article>`;
}
// import { variable } from "../checkout.js";
let counter = sessionStorage.length-1;

const replaceZero = async(counter)=>{
    if(counter ==0){
        counter = /*html*/`<div></div>`;
        return counter;
    }else{return counter}
}

export const footer = async()=>{
    return /*html*/`<ul id="footer__index" class="footer__ul">
            <li>
                <a href="#">
                    <img src="../storage/img/homeSelect.svg" alt="">
                </a>
            </li>
            <li>
                <a href="/views/checkout.html">
                    <img src="../storage/img/bag.svg" alt="">
                    <span id="index__Kart__counter" >${await replaceZero(counter)}</span>
                </a>    
            </li>
            <li>
                <a href="#">
                    <img src="../storage/img/heart.svg" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="../storage/img/profile.svg" alt="">
                </a>
            </li>
        </ul>
    `
}