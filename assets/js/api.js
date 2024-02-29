/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2"

const APP_ID = "84d32716"
const API_KEY = "a948fe9b59771cd367c8fd3db4d44371"
const TYPE = "public"



export const fetchData = async function(queries , successCallback){
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");
    
    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query? `&${query}` : ""}`;


    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors'
      })

    if(response.ok){
        const data = await response.json()
        successCallback(data);
    }
}




