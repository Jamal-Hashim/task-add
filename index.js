const title = document.getElementById('title');
const desc = document.getElementById('desc');
const task = document.querySelector('.task');
const btn = document.getElementById('btn');
function addTask(e) {
    e.preventDefault();
    const textTitle = title.value.trim();
    const textDesc = desc.value.trim();

    if (textTitle == "" || textDesc === "") {
        return;
    }
    else {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        h2.textContent = textTitle;
        p.textContent = textDesc;

        div.appendChild(h2);
        div.appendChild(p);
        task.appendChild(div);
    }
}

btn.addEventListener('click', addTask);
