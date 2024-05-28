//Get all the countries from Asia continent /region using Filter method
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function (){
var data = JSON.parse(this.response);
  const asia = data.filter((reg) => {
    if(reg.region === "Asia"){
        return reg.name;
    }
  })
  console.log("Region", asia);
};

//Get all the countries with a population of less than 2 lakhs using Filter method

var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
var data=JSON.parse(this.response);
   const populationData = data.filter((element)=>{
        return element.population<200000;
   })
   console.log("Population",populationData);};

//Print the following details name, capital, flag, using forEach method

var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
var data=JSON.parse(this.response);
data.forEach((element)=>{
console.log(element.name);
console.log(element.capital);
console.log(element.flag);
})}

//Print the total population of countries using reduce method

var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
var data=JSON.parse(this.response);
const totalPopulation = data.reduce((acc, element) => {
    return acc + element.population
})
console.log ("Total Population", totalPopulation);
};

//Print the country that uses US dollars as currency.

var request=new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all");
request.send();
request.onload=function (){
var data=JSON.parse(this.response);
for(i=0;i<data.length;i++){
    if(data[i].currencies[0].code==="USD")
   {
       console.log(data)
   }
 }
}