
export const headerCheckout = async () =>{
    let plantilla = /*html*/`<div>
                    <a id="back" href="detail.html${location.search}">
                    
                    <img src="../storage/img/back.svg">
                </a>
            </div> `
    return plantilla
};

export const galleryCheckout = async (info) =>{
    let plantilla = '';
    info.forEach(element => {
        if(element && element.data){
        plantilla +=/*html*/`
        <article id="detail__product" class="details__product">
            <div class="product__imagen">
                <img src="${element.data.product_photo}" >
            </div>
            <div class="product__description">
                <h3>${element.data.product_title.length < 30 ? element.data.product_title : element.data.product_title.substring(0,20)+'...'}</h3>
                <small>${element.data.product_description.substring(0,20)+'...'}</small>
                <span id="priceSpan">${element.data.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/option (1).svg">
                <div id="buttoms__details__checkout" class="product__select">
                    <img id="minus__checkout" src="../storage/img/minusCheckout .svg">
                    <span id="counter">1</span>
                    <img id="plus__Checkout" src="../storage/img/plusCheckout.svg">
                </div>
            </div>
        </article>`;
}
    });

    return plantilla;
};

export const pricesCheckout = async (sumaPrecios)=>{
    let plantilla='' 
    plantilla += /*html*/`
                <div class="bill__total">
                    <label id="items" >Total (9 items)</label>
                    <span id="acumulative__price" >${sumaPrecios}</span>
                </div>
                <div class="bill__fee">
                    <label for="">Shipping fee</label>
                    <span>$0.00</span>
                </div>
                <div class="bill__subtotal">
                    <label for="">Sub total</label>
                    <span id="sub__total">${sumaPrecios}</span>
                </div>`;
    return plantilla
}

