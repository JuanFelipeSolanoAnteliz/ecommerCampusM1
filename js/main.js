import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex,footer } from "./components/gallery.js";
import { getAllProductName, getAllCategory, getAllProductRandom } from "./module/app.js";
import { getProductId } from "./module/detail.js";

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");
let nav__ul = document.querySelector(".nav__ul");
let footer__index = document.querySelector("#id__footer");
footer__index.innerHTML = await footer();

const footerCounter = async () =>{

    let index__Kart__counter = document.querySelector("#index__Kart__counter");
    let counter = sessionStorage.length-1;
    console.log(footer__index);
}
await footerCounter();

let searchProducts = async e => {

    let params = new URLSearchParams(location.search);
    let dataSearch = { search : e.target.value, id: params.get('id')}
    input__search.value = null;
    let res = ""
    if(input__search.dataset.opc == "random"){
        res = await getAllProductRandom({})
        delete input__search.dataset.opc
        history.pushState(null, "", "?id=aps");
        console.log(dataSearch);
    }
    else {
        res = await getAllProductName(dataSearch)
        console.log(dataSearch);
    }
    console.log(res);
    main__article.innerHTML = galleryIndex(res, params.get('id'));

    let {data: {products}} = res;
    let asin = products.map(value => {return {id: value.asin}});

    let proceso = new Promise(async(resolve, reject)=>{
        for (let i = 0; i < asin.length; i++) {
            if(localStorage.getItem(asin[i].id)) continue;
            let data = await getProductId(asin[i])
            localStorage.setItem(asin[i].id, JSON.stringify(data))
        }
        resolve({message: "Datos buscados correctamente" });
    })
    Promise.all([proceso]).then(res => {console.log(res);})

}

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  
    
    history.pushState(null, "", "?id=fashion");
    input__search.value = "zapato"
    const eventoChange = new Event('change');
    input__search.dispatchEvent(eventoChange);
})
    
    input__search.addEventListener("change", searchProducts);
// input__search.addEventListener("change", async e => {
//     let params = new URLSearchParams(location.search);
//     let data = { search : e.target.value, id: params.get('id')}
//     input__search.value = null;
//     let res = await getAllProductName(data)
//     main__article.innerHTML = galleryIndex(res, params.get('id'));

// });

