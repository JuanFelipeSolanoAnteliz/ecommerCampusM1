import { headers } from "../components/env.js";

export const getAllProductName = async ({search:text}={search:"Phone"}) =>{
    console.log(`waiting...`);
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
    let options = {
        method:"GET",
        headers
    };
    let res = await fetch(url,options);
    let data = res.json();

    return data;
};



