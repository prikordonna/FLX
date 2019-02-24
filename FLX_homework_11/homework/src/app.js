const input = document.querySelector('#action');
input.addEventListener('keyup', buttonChangeAttribute);
let zero = 0;
let ten = 10;
const button = document.querySelector('#button');
button.setAttribute('disabled', 'disabled');
button.addEventListener('click', addList);

function buttonChangeAttribute() {
    if (input.value.length === zero) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function addList() {
    if(input.value !== ' ') {
        let listWrapper = document.createElement('div');
        listWrapper.className = 'listWrapper';
        let listItem = document.createElement('button');
        listItem.className = 'listItem';
        let icon = document.createElement('i');
        icon.className = 'material-icons';
        icon.textContent = 'done';
        listItem.appendChild(icon);
        let text = document.createElement('p');
        text.textContent = input.value;
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'material-icons delete';
        deleteIcon.textContent = 'delete';
        listWrapper.appendChild(listItem);
        listWrapper.appendChild(text);
        listWrapper.appendChild(deleteIcon);
        ten--;
        if (zero <= ten) {
            document.querySelector('.list').appendChild(listWrapper);
            console.log(ten);
        } else {
            const warnMessage = document.querySelector('.warning');
            warnMessage.textContent = 'Maximum item per list are created';
            button.disabled = true;
            input.disabled = true;
        }
        listItem.addEventListener('click', buttonChecked);
        deleteIcon.addEventListener('click', deleteItem);
        // listWrapper.addEventListener('mousedown', onMouseDown(listWrapper));
    }
}

function buttonChecked() {
    let colored = true;
    if (colored) {
        this.style.backgroundColor = '#000000';
        colored = false;
    } else {
        this.style.backgroundColor = '#fff';
        colored = true;
    }
}

function deleteItem() {
    let listItems = document.querySelectorAll('.listWrapper');
    for (let i= 0; i < listItems.length; i++) {
        listItems[i].onclick = listItems.parentNode.removeChild(listItems);
    }
}



// function onMouseDown(listWrapper) {
//     listWrapper.style.position = 'absolute';
//     moveAt();
// }

// function moveAt() {

// }


