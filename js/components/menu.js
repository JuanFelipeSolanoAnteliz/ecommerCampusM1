export const menuListCategoryIndex = async(res)=>{
    let {data} = res;
    let plantilla = "";
    data.array.forEach((value, index) => {
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="#" >
                <img src="storage/img/category.svg" >
                <span>${value.name}</span>
            </a>
        </li>
        `;
    });
    return plantilla;
};