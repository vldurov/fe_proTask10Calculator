/*
* В папке calculator дана верстка макета калькулятора. Необходимо сделать этот калькулятор рабочим.
* При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
* При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет введения
 второго числа для выполнения операции.
* Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`, 
так и любого из операторов, в табло должен появиться результат выполенния предыдущего выражения.
* При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит, 
что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC` должно очищать память.
*/

const display = document.body.querySelectorAll("input")[0];
const key = document.body.querySelector(".keys");
const patern = /[0-9.]/;
const patern2 = /[+\-*/]/;
let memFlag = false;
let divFlag = false;
let memory;
let inf;
let inf2;
let symbl;
let rez;

key.addEventListener("click", (e) => {

        if(patern2.test(e.target.value)){
            document.body.querySelector(".orange").removeAttribute("disabled");
            symbl = e.target.value;
            inf = display.value;
            display.value = "";
        };

        if(patern.test(e.target.value)){
            display.value += e.target.value;  
        };

        if(e.target.value == "m+"){
            memory = display.value;
            memFlag = false;
            const div = document.createElement("div");
            div.className = "memory";
            div.innerText = "m";
            if(!divFlag){
            document.querySelector(".display").append(div);
            divFlag = true; 
            };
        };

        if(e.target.value == "m-"){
            memory = null;
            document.querySelector(".memory").remove();
            divFlag = false;
        };

        if(e.target.value == "mrc"){
            if(memFlag == true){
                memory = null;
                document.querySelector(".memory").remove();
            };
            display.value = memory;
            memFlag = true;
            divFlag = false;
        };

        if(e.target.value == "C") {
            display.value = "";
            inf = null;
            inf2 = null;
            symbl = null;
            rez = null;
            document.querySelector(".orange").setAttribute("disabled","");
        };

        if(e.target.value == "=") {
            inf2 = display.value;

            switch (symbl){
            case "+" :
                rez = parseInt(inf) + parseInt(inf2);
                break;
            case "-":
                rez = parseInt(inf) - parseInt(inf2);
                break;
            case "*":
                rez = parseInt(inf) * parseInt(inf2);
                break;
            case "/":
                rez = parseInt(inf) / parseInt(inf2);
                break;
            };
            display.value = rez;
        };

    // console.clear();
    // console.log(`inf = ${inf}`);
    // console.log(`inf2 = ${inf2}`);
    // console.log(`mem = ${memory}`);
    // console.log(`символ = ${symbl}`);
    // console.log(`результат = ${rez}`);
    // console.log(e.target.value);
});
