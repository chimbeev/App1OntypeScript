"use strict";
//export {};
// Создаем кнопки в форме крестика для каждой строки из списка дел
const myNodelist = document.getElementsByTagName("LI");
//создаем коллекцию элементов строк
let i;
for (i = 0; i < myNodelist.length; i++) { //добавляем в каждую строку кнопку крестик
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7"); //добавляем знак крестик
    span.className = "close"; //Элементу с крестиком назначаем класс close
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Добавляем поведение по нажатию кнопки - крестика. Должна удаляться строка из списка дел
let closeButtons = document.getElementsByClassName("close");
//создаем коллекцию кнопок - крестиков
for (i = 0; i < closeButtons.length; i++) {
    let closeButton = closeButtons[i]; //создаем переменную, содержащую отдельную кнопку-крестик
    closeButton.addEventListener("click", () => {
        const li = closeButton.parentElement; //родительский элемент кнопки-крестика - строка из списка дел
        if (!!li) { //если строка-родитель существует, то сделаем ее невидимой
            li.style.display = "none";
        }
    });
}
// добавляем символ галочка, что дело выполнено
const list = document.querySelector('ul'); //список элементов ul
if (list) {
    list.addEventListener('click', function (ev) {
        let target = ev.target;
        if (target) {
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
            }
        }
    }, false);
}
// Добавляем новое дело в список когда нажимаем кнопку Add
function newElement() {
    const li = document.createElement("li");
    const input = document.getElementById("myInput");
    if (!input)
        return;
    const inputValue = input.value; //считываем введенные данные из строки ввода
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode); //добавляем в объект строка введенные данные
    if (inputValue === '') { //если дело пустое, то выводим сообщение
        alert("You must write something!");
    }
    else {
        const ul = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li); //добавляем дело в список
        }
    }
    input.value = ""; // обнуляем ввод
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7"); //Добавляем кнопку-крестик
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", () => {
        const li = span.parentElement; //родительский элемент кнопки это строка с делом
        if (!!li) { // если строка с делом есть
            li.style.display = "none"; // то делаем её невидимой
        }
    });
}
