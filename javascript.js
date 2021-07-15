const currency_E1 = document.getElementById("currency__1");
const currency_E2  = document.getElementById("currency__2");
const amount_E1  = document.getElementById("amount__1");
const amount_E2  = document.getElementById("amount__2");


const rateE1 = document.getElementById("rate");
const swap = document.getElementById("swap");

// FETCH CURRENCY RATES AND UPDATE THE DOM
function calculate(){
    const currency_one = currency_E1.value
    const currency_two = currency_E2.value


   fetch(`https://v6.exchangerate-api.com/v6/2c706b5f184a62cdcc125c75/latest/${currency_one}`)
    .then(res => res.json())
    .then((data) =>{
        console.log(data);
        const rate = data.conversion_rates[currency_two];
        rateE1.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}` 

        amount_E2.value =(amount_E1.value * rate).toFixed(2);
    });

}
    data.forEach(converterContainer => {
     const{conversion_rates}
    const currencyList = document.createElement("div");
    currencyList.classList.add("currency")
     currencyList.innerHTML = `
     <select id="currency__1">
     ${conversion_rates}
       </select>
       <input type="number" id="amount__1" placeholder="0" value="1">
   </div>
 
     `
 }


currency_E1.addEventListener('change', calculate);
currency_E2.addEventListener ('change', calculate);
amount_E1.addEventListener('change', calculate);
amount_E2.addEventListener('change', calculate)


swap.addEventListener('click',()=>{
    const temp = currency_E1.value;
    currency_E1.value = currency_E2.value;
    currency_E2.value = temp;
    calculate();
})

calculate();
