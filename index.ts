//export {};
// Создаем кнопки в форме крестика для каждой строки из списка дел
const myNodelist: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
//создаем коллекцию элементов строк
let i;
for (i = 0; i < myNodelist.length; i++) { //добавляем в каждую строку кнопку крестик
    const span:HTMLElement = document.createElement("SPAN");
    const txt:Text = document.createTextNode("\u00D7"); //добавляем знак крестик
    span.className = "close"; //Элементу с крестиком назначаем класс close
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Добавляем поведение по нажатию кнопки - крестика. Должна удаляться строка из списка дел
let closeButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
//создаем коллекцию кнопок - крестиков
for (i = 0; i < closeButtons.length; i++) {
    let closeButton: Element = closeButtons[i]; //создаем переменную, содержащую отдельную кнопку-крестик
    closeButton.addEventListener("click", () => { //добавляем обработчик событий
        const li = closeButton.parentElement;//родительский элемент кнопки-крестика - строка из списка дел
        if (!!li) { //если строка-родитель существует, то сделаем ее невидимой
            li.style.display = "none";
        }
    })
}
// добавляем символ галочка, что дело выполнено
const list:HTMLUListElement | null = document.querySelector('ul'); //список элементов ul
if (list) {
    list.addEventListener('click', function (ev) { //добавляем обработчик событий
        let target:HTMLElement = <HTMLElement>ev.target;
        if (target) {
            if (target.tagName === 'LI') {
                target.classList.toggle('checked');
            }
        }
    }, false);
}
// Добавляем новое дело в список когда нажимаем кнопку Add
function newElement():void {
    const li:HTMLElement = document.createElement("li");
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
    if (!input) return;
    const inputValue = input.value; //считываем введенные данные из строки ввода
    const textNode:Text = document.createTextNode(inputValue);
    li.appendChild(textNode); //добавляем в объект строка введенные данные

    if (inputValue === '') { //если дело пустое, то выводим сообщение
        alert("You must write something!");
    } else {
        const ul:HTMLElement | null = document.getElementById("myUL");
        if (ul) {
            ul.appendChild(li); //добавляем дело в список
        }
    }
    input.value = ""; // обнуляем ввод

    const span:HTMLElement = document.createElement("SPAN");
    const txt:Text = document.createTextNode("\u00D7"); //Добавляем кнопку-крестик
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener("click", () => { //добавляем обработчика событий на кнопку-крестик
        const li:HTMLElement | null = span.parentElement;//родительский элемент кнопки это строка с делом
        if (!!li) { // если строка с делом есть
            li.style.display = "none"; // то делаем её невидимой
        }
    });
 }