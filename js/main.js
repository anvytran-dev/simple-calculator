//Create event listener for the equal sign
//Create function 
//Acknowledge the 2 values
//Do math
//Display

document.querySelector('#equalAdd').addEventListener('click', add)

document.querySelector('#equalMinus').addEventListener('click', minus)

document.querySelector('#equalDivide').addEventListener('click', divide)

document.querySelector('#equalMultiply').addEventListener('click', multiply)

function add(){
    let num1 = Number(document.querySelector('#little1').value)
    let num2 = Number(document.querySelector('#little2').value)

    let sum = num1 + num2

    console.log(sum)
    
    document.querySelector('#displayAdd').innerText = sum
}

function minus(){
    let num1 = Number(document.querySelector('#notHungry1').value)
    let num2 = Number(document.querySelector('#notHungry2').value)

    let diff = num1 - num2

    console.log(diff)
    
    document.querySelector('#displayDiff').innerText = diff
}

function divide(){
    let num1 = Number(document.querySelector('#friends1').value)
    let num2 = Number(document.querySelector('#friends2').value)

    let quo = num1 / num2

    console.log(quo)
    
    document.querySelector('#displayQuo').innerText = quo
}

function multiply(){
    let num1 = Number(document.querySelector('#party1').value)
    let num2 = Number(document.querySelector('#party2').value)

    let prod = num1 * num2

    console.log(prod)
    
    document.querySelector('#displayProd').innerText = prod
}

document.querySelector('.secIntr').addEventListener('click', displayCountBox)

function displayCountBox(){
    console.log('fun')
    document.querySelector('.secIntr').style.display = "none"
    document.querySelector('.secProb').style.display = "flex"
}

document.querySelector('#h2Help1').addEventListener('click', displayAddCalc)

document.querySelector('#h2Help2').addEventListener('click', displayMinCalc)

document.querySelector('#h2Help3').addEventListener('click', displayDivCalc)

document.querySelector('#h2Help4').addEventListener('click', displayMulCalc)

function displayAddCalc(){
    document.querySelector('.secProb').style.display = "none"
    document.querySelector('.secAdd').style.display ="flex"
}

function displayMinCalc(){
    document.querySelector('.secProb').style.display = "none"
    document.querySelector('.secMin').style.display ="flex"
}

function displayDivCalc(){
    document.querySelector('.secProb').style.display = "none"
    document.querySelector('.secDiv').style.display ="flex"
}

function displayMulCalc(){
    document.querySelector('.secProb').style.display = "none"
    document.querySelector('.secMul').style.display ="flex"
}

document.querySelector('.h3Cont').addEventListener('click', backToProb)

function backToProb(){
    document.querySelector('.secProb').style.display = "flex"
    document.querySelector('.secAdd').style.display ="none"
}

document.querySelector('.h3ContMin').addEventListener('click', backToProb2)

function backToProb2(){
    document.querySelector('.secProb').style.display = "flex"
    document.querySelector('.secMin').style.display ="none"
}

document.querySelector('.h3ContDiv').addEventListener('click', backToProb3)

function backToProb3(){
    document.querySelector('.secProb').style.display = "flex"
    document.querySelector('.secDiv').style.display ="none"
}

document.querySelector('.h3ContMul').addEventListener('click', backToProb4)

function backToProb4(){
    document.querySelector('.secProb').style.display = "flex"
    document.querySelector('.secMul').style.display ="none"
}

