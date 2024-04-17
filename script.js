let eInput = document.querySelector(".English");
let mInput = document.querySelector(".Math");
let sInput = document.querySelector(".Science");
let gInput = document.querySelector(".Gym");

let button = document.querySelector("button");
let results = document.querySelector(".results")

let Egrade;
let Mgrade;
let Sgrade;
let Ggrade;

let eNum;
let mNum;
let gNum;
let sNum;
const gradeInput = () =>{
    Egrade = eInput.value.toLowerCase();
    console.log(Egrade);
     Mgrade = mInput.value.toLowerCase();
     Sgrade = sInput.value.toLowerCase();
     Ggrade = gInput.value.toLowerCase();
};


const convert= (letter) =>{
   

if (letter === "a" ){
return 4}

else if (letter === "b"){
return 3}

else if (letter === "c"){
return 2}

else if (letter === "d"){
return 1}

else if (letter === "f"){
    return 0}
    else alert("Please enter all grades correctly" )
};

function grade(){
let GPA = (eNum+mNum+sNum+gNum)/4;
results.innerHTML=` Your GPA is ${GPA}`
};

button.onclick = function(){
    gradeInput();
 eNum = convert(Egrade);
 mNum = convert(Mgrade);
 sNum = convert(Sgrade);
 gNum = convert(Ggrade);
   grade();
   
};



