// h1 { color: red}
// .parrafito { ... }
// #pid { ...}
// const h1 = document.querySelector("h1")
// const p = document.querySelectorAll("p")
// const parrafito = document.querySelector(".parrafito")
// const pid = document.querySelector("#pid")
// const input = document.querySelector("input")



// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = "Patito Feo <br>";
// //h1.innerText = "Patito Feo <br>";
// // console.log(h1.getAttribute("class"))
// // h1.setAttribute("class", "rojo")

// h1.classList.add("rojo");
// // h1.classList.remove("verde");
// // h1.classList.toggle.contains("verde");

// input.value = "456";

// const img = document.createElement("img");
// img.setAttribute("src", "https://i.ytimg.com/vi/NIFJJLk2_Qw/maxresdefault.jpg");
// console.log(img)

// pid.innerHTML = "";

// pid.appendChild(img);

const h1=document.querySelector('h1');
const form=document.querySelector('#form');


const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');

const btn=document.querySelector('#btnCalcular');

const pResult=document.querySelector('#result');

// btn.addEventListener("click", sumarInputValues);
btn.addEventListener("click", sumarInputValues);

function sumarInputValues(event){
    // console.log({event})
    // event.preventDefault();
    const sumaInputs=Number(input1.value)+Number(input2.value);
    pResult.innerText="Resultado: "+sumaInputs;
}