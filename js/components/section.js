

export const titleProductDetail = async ({data:dataUpdate}=res)=>{
    return /*html*/`
    <article class="article__detail">
        <div class="detail__head">
            <h1>${dataUpdate.product_title}</h1>
            <div class="product__select">
                <img id="minusCounter" src="../storage/img/minus.svg" alt="">
                <span id="units">1</span>
                <img id="plusCounter" src="../storage/img/plus.svg" alt="">
            </div>
        </div>
    <div class="detail__score">
   
        ${new Array(parseInt(dataUpdate.product_star_rating ?? 0)).fill(`<img src="../storage/img/star.svg">`).join('')}
        <span>${dataUpdate.product_star_rating?? 0}</span>
        <a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a>
    </div>
    </article>`;
};


