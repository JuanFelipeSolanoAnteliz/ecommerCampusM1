import { headers } from "../components/env.js";

export const getProductId = async ({id:idCategory})=>{
    console.log(`waiting....`);

    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${idCategory}&country=US`;
    let options = {
        method:'GET',
        headers
    };

    let res = await fetch(url,options);
    let data = await res.json();
    return data;
};