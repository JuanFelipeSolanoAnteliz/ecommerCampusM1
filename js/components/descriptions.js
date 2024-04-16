export const contentTitle = async({data:dataUpdate}=res)=>{

let detailedDescription = async ()=>{    
    let descriptionContent =  dataUpdate.product_description;    
    // console.log(descriptionContent)
    let letters = descriptionContent;
   if(typeof dataUpdate.product_description === null){
        dataUpdate.product_description='';
    }
    if(descriptionContent.length > 150){    
        return /*html*/`<article class="product__information">
                            <p id='product__descripcion' >${letters.substring(0,150)} 
                            <strong id='read__more' >... Read more</strong></p>
                        </article>`;
    }else if(descriptionContent === null){
        return/*html*/`<article class="product__information">
                            <p>0</p>
                        </article>`
    }
    else {
        return/*html*/`<article class="product__information">
                            <p>${letters}</p>
                        </article>`
                    }
    }
    return await detailedDescription();
};


