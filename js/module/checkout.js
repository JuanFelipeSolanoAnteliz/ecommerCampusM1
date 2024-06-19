
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
                <h3>${element.data.product_title.length < 30 ? element.data.product_title : element.data.product_title.substring(0,30)+'...'}</h3>
                <small>${element.data.product_description.substring(0,20)+'...'}</small>
                <span>${element.data.product_price}</span>
            </div>
            <div class="product__custom">
                <img src="../storage/img/option (1).svg">
                <div id="buttoms__details__checkout" class="product__select">
                    <img id="minus__checkout" src="../storage/img/minusCheckout .svg">
                    <span>4</span>
                    <img id="plus__Checkout" src="../storage/img/plusCheckout.svg">
                </div>
            </div>
        </article>`;
}
    });
    return plantilla;
};