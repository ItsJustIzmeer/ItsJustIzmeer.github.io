  // JAVASCRIPT script.js //
  //  CALCULATOR JAVASCRIPT //
  function getHistory(){
    return document.getElementById("history-value").innerText;
  }
  function printHistory(num){
    document.getElementById("history-value").innerText=num;
  }
  function getOutput(){
    return document.getElementById("output-value").innerText;
  }
  function printOutput(num){
    if(num==""){
      document.getElementById("output-value").innerText=num;
    }
    else{
      document.getElementById("output-value").innerText=getFormattedNumber(num);
    }	
  }
  function getFormattedNumber(num){
    if(num=="-"){
      return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
  }
  function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
  }
  var operator = document.getElementsByClassName("operator");
  for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
      if(this.id=="clear"){
        printHistory("");
        printOutput("");
      }
      else if(this.id=="backspace"){
        var output=reverseNumberFormat(getOutput()).toString();
        if(output){//if output has a value
          output= output.substr(0,output.length-1);
          printOutput(output);
        }
      }
      else{
        var output=getOutput();
        var history=getHistory();
        if(output==""&&history!=""){
          if(isNaN(history[history.length-1])){
            history= history.substr(0,history.length-1);
          }
        }
        if(output!="" || history!=""){
          output= output==""?output:reverseNumberFormat(output);
          history=history+output;
          if(this.id=="="){
            var result=eval(history);
            printOutput(result);
            printHistory("");
          }
          else{
            history=history+this.id;
            printHistory(history);
            printOutput("");
          }
        }
      }
      
    });
  }
  var number = document.getElementsByClassName("number");
  for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
      var output=reverseNumberFormat(getOutput());
      if(output!=NaN){ //if output is a number
        output=output+this.id;
        printOutput(output);
      }
    });
  }

/* BMI CALCULATOR */

function showMessage(){
  var message = document.getElementById("weight").value;
  //display_message.innerHTML= message;
  document.write
}

function calculateBMI(){
  var total = 0;
  var weight = parseInt(document.getElementById('weight').value);
  var height = parseInt(document.getElementById('height').value);
  total = weight / (height * height);
  printOutput(total);
}

window.onload = () => {
  let button = document.querySelector("#btn");

  // Function for calculating BMI
  button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
    
  /* Getting input from user into height variable.
  Input is string so typecasting is necessary. */
  let height = parseInt(document
    .querySelector("#height").value);

  /* Getting input from user into weight variable. 
  Input is string so typecasting is necessary.*/
  let weight = parseInt(document
        .querySelector("#weight").value);

  let result = document.querySelector("#bmiresult");
  let textresult = document.querySelector('#textresult');
  let resulterror = document.querySelector('#resulterror');

  // Checking the user providing a proper
  // value or not
  if (height === "" || isNaN(height)) 
    resulterror.innerHTML = "Provide a valid Height!";

  else if (weight === "" || isNaN(weight)) 
    resulterror.innerHTML = "Provide a valid Weight!";

  // If both input is valid, calculate the bmi
  else {

    // Fixing upto 2 decimal places
    let bmi = (weight / ((height * height) 
                        / 10000)).toFixed(2);

    // Dividing as per the bmi conditions

    if (bmi < 18.6){
      result.innerHTML =
        `<span>${bmi}</span>`;
      textresult.innerHTML =
        `Under Weight`;
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = 
            `<span>${bmi}</span>`;
      textresult.innerHTML =
            `Normal`;
    }
    else {
      result.innerHTML = 
            `<span>${bmi}</span>`;
      textresult.innerHTML =
            `Over Weight`;
    }
  }
  }

  function clearBMI(){
    resulterror.innerHTML = "";
  }

/* Unit Converter JavaScript */

var input = document.getElementById('h');
var result = document.getElementById('w');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;

function myResult(){
  option_from = inputType.value;
  option_to = resultType.value;

  if(option_from === "meter" && option_to==="kilometer"){
    result.value = Number(input.value) * 0.001;
  }else if(option_from === "meter" && option_to==="centimeter"){
    result.value = Number(input.value) * 100;
  }else if(option_from === "meter" && option_to==="meter"){
    result.value = input.value
  }

  if(option_from === "kilometer" && option_to==="meter"){
    result.value = Number(input.value) * 1000;
  }else if(option_from === "kilometer" && option_to==="centimeter"){
    result.value = Number(input.value) * 100000;
  }else if(option_from === "kilometer" && option_to==="kilometer"){
    result.value = input.value
  }

  if(option_from === "centimeter" && option_to==="kilometer"){
    result.value = Number(input.value) * 0.00001;
  }else if(option_from === "centimeter" && option_to==="meter"){
    result.value = Number(input.value) * 0.01;
  }else if(option_from === "centimeter" && option_to==="centimeter"){
    result.value = input.value
  }
}

// Tax Income Calculator

"use strict";
function calc() {
    let income = document.getElementById("income").value;
    income = parseFloat(income);
    let taxed = income * 2.5 / 100

    document.getElementById("result-tax").innerHTML = "Net income = RM" + income.toFixed(2) + "<br>Amount Taxed = RM" + taxed.toFixed(2);
}