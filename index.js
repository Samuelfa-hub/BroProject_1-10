//creating the const to init the program
const Init = document.getElementById("SubmtBtn");
//Getting input and displayng info 
Init.onclick = function() { 
    let Height = prompt("Coloque sua Altura"); 
    Height = Number(Height); 

    let Weight = prompt("Coloque seu peso");
    Weight = Number(Weight);

    let IMC = Weight / (Height ** 2) *10000;

    document.getElementById("IMCResults").textContent = "IMC: " + IMC ;

    if(IMC <=18.5) {
        document.getElementById("IMCCheck").textContent = "Parece que você está abaixo do peso"
    }
    else if (IMC <= 29.9 ){ 
        document.getElementById("IMCCheck").textContent = "Parece que você está com sobrepeso"
    }
    else if ( IMC > 30){ 
        document.getElementById("IMCCheck").textContent = "Parece que você está com obesidade"
    }


}