function calcPrompt(){
    let num1 =  Number(prompt("Write a number: "));
    let askEquation = prompt("Write what you want to do with these two numbers.\nOptions: \'Add\' \'Subtract\' \'Devide\' \'Multiply\' \nAlso try: \'+\' \'-\' \'*\' \'/\' \nYou can also write: \'Plus\' \'Minus\'");
    let num2 = Number(prompt("Write a second number: "));
    let equationA = num1 + num2;
    let equationB = num1 - num2;
    let equationC = num1 * num2;
    let equationD = num1 / num2;
    if(askEquation == "Add"){
        document.write(equationA);
    }
    else if(askEquation == "Subtract"){
        document.write(equationB);
    }
    else if(askEquation == "Multiply"){
        document.write(equationC);
    }
    else if(askEquation == "Devide"){
        document.write(equationD);
    }
    else if(askEquation == "+"){
        document.write(equationA);
    }
    else if(askEquation == "-"){
        document.write(equationB);
    }
    else if(askEquation == "*"){
        document.write(equationC);
    }
    else if(askEquation == "/"){
        document.write(equationD);
    }
    else if(askEquation == "Plus"){
        document.write(equationA);
    }
    else if(askEquation == "Minus"){
        document.write(equationB);
    }
    else{
        document.write("You entered an invalid responce.")
    }
}
calcPrompt();



