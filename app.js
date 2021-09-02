var stockIntial = document.querySelector("#stock-intial");
var stockQuantity = document.querySelector("#stock-quantity");
var stockCurrent = document.querySelector("#stock-current");
var btnClick = document.querySelector("#btn-Click");
var outputShow = document.querySelector("#output-container");


function clickHandler(){
    let stockIntialIn = Number(stockIntial.value);
    let stockQuantityIn  = Number(stockQuantity.value);
    let stockCurrentIn  = Number(stockCurrent.value);
    var stockIntialPrice = stockIntialIn * stockQuantityIn;
    let stockFinalPrice = stockQuantityIn * stockCurrentIn;
    if(stockIntialIn!== 0 && stockQuantityIn !== 0 && stockCurrentIn !== 0) {
            if(stockIntialPrice <= stockFinalPrice){
                profitMessage();
            }
            else{
                lossMessage();
            }

            function profitMessage(){
                let  profitAmount =  stockFinalPrice - stockIntialPrice;
            let profitPersent = (profitAmount / stockIntialPrice) * 100;
                profitPersent = parseInt(profitPersent);
                let profitDisplay = "You made profit of Rs" + profitAmount +"/- " +" and in persentage is " + profitPersent +"%";
            outputShow.innerText = profitDisplay;
            }
            function lossMessage(){
                let lossAmount = stockIntialPrice - stockFinalPrice;
                let losspersent = (lossAmount / stockIntialPrice) * 100;
                    losspersent = parseInt(losspersent);
                let lossDisplay = "You incurred loss of Rs" + lossAmount +"/- " +" and in persentage is " + losspersent +"%";
                outputShow.innerText = lossDisplay;
            }
        }
    else (
        outputShow.innerText = "Please fill all the details"
    )



}

btnClick.addEventListener("click", clickHandler)