// Print the country which uses US Dollars as currency.

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{ 
    if (request.status==200)
    {
let objjson=JSON.parse(request.responseText)
objjson.filter((e)=>e.currencies).filter((e)=>{
    console.log(e.currencies.USD)}

)}
else   
{ 
request.onerror=function()
{
    console.log("site is error")
}}}