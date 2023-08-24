// Print the following details name, capital, flag using forEach function

const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){ 
    if (request.status==200)
{
    let objjson=JSON.parse(request.responseText)
    objjson.forEach((g)=>{
        console.log("Name:" + g.name.official);
        console.log("capital:" + g.capital);
        console.log("Flag:" + g.flags.svg);
})
}
    else   
{ 
    request.onerror=function()
{
    console.log("site is error")
}}}