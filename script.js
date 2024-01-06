let currentTime = new Date();

let todo = [{
    "id": 1,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "Не выполнено",
    }
}, {
    "id": 2,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "Готово",
    }
}, {
    "id": 3,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "Готово",
    }
}, {
    "id": 4,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "В прогрессе",
    }
}, {
    "id": 5,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "Готово",
    }
}, {
    "id": 6,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "Не выполнено",
    }
}, {
    "id": 7,
    "description": "Переписать проект на Vue 3",
    "title": "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "date": `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`,
    "time": `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`,
    "complete": {
        "checked": "В прогрессе",
    }
}];

let cont = document.querySelector('.container')

reload(todo)

function reload(todo) {
    /* cont.innerHTML = "" */

    for (let item of todo) {
        // create
        let create_elements = document.createElement('div')
        let h4_text = document.createElement('h4')
        let p_text = document.createElement('p')
        let h4_date = document.createElement('h4_date')
        let h4_time = document.createElement('h4_time')
        let p_done = document.createElement('p_done')
        let lines = document.createElement('div')

        // styling 
        create_elements.classList.add('create_elements')
        h4_text.classList.add('h4_text')
        p_text.classList.add('p_text')
        h4_date.classList.add('h4_date')
        h4_time.classList.add('h4_time')
        p_done.classList.add('p_done')
        lines.classList.add('lines')

        h4_text.innerHTML = item.description
        p_text.innerHTML = item.title
        h4_date.innerHTML = item.date
        h4_time.innerHTML = item.time
        p_done.innerHTML = item.complete.checked

        // append
        cont.append(create_elements, lines)
        create_elements.append(h4_text, p_text, h4_date, h4_time, p_done)
    }
}


let birtDate = new Date().getFullYear() /* - age */ // это нужен чтобы найти в каком году родился или наборот сколько лет ему ?

console.log(birtDate);

let newDate = new Date().toLocaleDateString('uz-UZ', { hour12: false })

console.log(newDate);

let currentTimee = new Date();
let hours = currentTimee.getHours();
let minutes = currentTimee.getMinutes();
let seconds = currentTimee.getSeconds();

console.log(hours + ":" + minutes + ":" + seconds);


let data = [
    { id: 1, name: "Переписать проект на Vue 3", email: "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto", date: `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`, time: `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`, task_type: "Не выполнено"}
]

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    let tabledata = document.querySelector(".data_table");

    let object = localStorage.getItem('object');
    let objectdata = JSON.parse(object);
    let elements = "";

    objectdata.map(record => {
        elements += `<div class="create_elements22">
        <div class="create_elements2"></div>

        <h4 class="h4_text">${record.name}</h4>

        <p class="p_text">${record.email}</p>

        <h4 class="h4_date">${record.date}</h4>

        <h4 class="h4_time">${record.time}</h4>

        <p class="p_done">
        ${record.task_type}</p>
        </div>
        <div class="lines2"></div>`
    })

    tabledata.innerHTML = elements;

}

function create() {
    document.querySelector(".create_form").style.display = "block";
    document.querySelector(".add_div").style.display = "none";
}

function add() {
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let time = document.querySelector(".time_type").value;
    let date = document.querySelector(".date_type").value;
    let task_type = document.querySelector(".task_type").value;

    let newObj = {id: 3, name: name, email: email, time: time, date: date, task_type: task_type};
    data.push(newObj);

    document.querySelector(".create_form").style.display = "none";
    document.querySelector(".add_div").style.display = "block";

    readAll();
}