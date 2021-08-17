const birthDate = document.querySelector("#birth-date")
const luckyNumber = document.querySelector('#lucky-number')
const checkButton = document.querySelector("#btn-check")
const outputBox = document.querySelector("#output-box")

function birthSum(bDate){
    //remove - from string
    //sum the string individually while converting it to int
    bDate = bDate.replaceAll('-', '')
    let sum = 0;
    for(let i = 0; i < bDate.length; i++){
        sum = sum + Number(bDate.charAt(i));
    }
    return sum
}

function birthSumByLuckyNumber(dobSum){
    if(dobSum % luckyNumber.value === 0){
        console.log("your birthday is lucky")
        outputBox.innerText = "Lucky Guy, Lucky Birthday";
    }else{
        console.log("Make your own luck");
        outputBox.innerText = "Make your own luck";
    }
}

checkButton.addEventListener('click', function (){
    console.log(birthDate.value, luckyNumber.value);
    let dobSum = birthSum(birthDate.value);
    birthSumByLuckyNumber(dobSum);
})