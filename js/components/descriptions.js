export const contentTitle = async({data:dataUpdate}=res)=>{

let detailedDescription = async ()=>{    
    let descriptionContent =  dataUpdate.product_description;    
    // console.log(descriptionContent)
    let letters = descriptionContent;
    if(descriptionContent.length > 150){    
        return /*html*/`<article class="product__information">
                            <p>${letters.substring(0,150)}... 
                            <strong> Read more...</strong></p>
                        </article>`;
    }else {return/*html*/`<article class="product__information">
                            <p>${letters}</p>
                        </article>`}
    }
    return await detailedDescription();
};

