let usersUrl = 'https://jsonplaceholder.typicode.com/users'; 
let posts = 'https://jsonplaceholder.typicode.com/posts';
let comments = 'https://jsonplaceholder.typicode.com/comments';
let xmlHttp = new XMLHttpRequest();
spin(true);

function request (method, url) {
    spin(true);
    xmlHttp.open(method, url);
    xmlHttp.onload = function() {
        if ((xmlHttp.readyState==4) && (xmlHttp.status==200)) {
            const requestText = xmlHttp.responseText; 
            const parsedText = JSON.parse(requestText);
            showUsers(parsedText);
        } else {
            console.log(xmlHttp.status, xmlHttp.statusText);
        }
    }
    xmlHttp.send();
    spin(false);
}
request('GET', usersUrl);

function showUsers(users) {
    for (let i = 0; i < users.length; i++) {
        let id = users[i].id;
        const divXml = document.getElementById('xml-sample');
        const createDiv = document.createElement('div');
        createDiv.className = "element";
        createDiv.id = id;
        const divImage = document.createElement("div");
        divImage.className = "image";
        const cat = document.createElement("img");
        cat.className = "cat";
        cat.src = getAvatar(cat);
        divImage.append(cat);
        const personalInfo = document.createElement("div");
        personalInfo.className = "personal-info";
        const name = document.createElement("p");
        name.className = "name";
        name.innerText = `Name : ${users[i].name}`;
        const email = document.createElement("p");
        email.className = "email";
        email.innerText = `Email : ${users[i].email}`;
        const phone = document.createElement("p");
        phone.className = "phone";
        phone.innerText = `Phone : ${users[i].phone}`;
        const buttons = document.createElement("div");
        buttons.className = "buttons";
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "Delete";
        deleteBtn.setAttribute('onclick',`deleteElement(${id});`);
        const editBtn = document.createElement('button');
        editBtn.className = "edit-btn";
        editBtn.innerText = "Edit";
        editBtn.setAttribute('onclick', `editElement(${id})`);
        const saveButton = document.createElement("button");
        saveButton.className = "save";
        saveButton.innerText = "Save";
        saveButton.style.display = "none";
        buttons.append(deleteBtn, editBtn, saveButton);
        personalInfo.append(name,email,phone,buttons);
        createDiv.append(divImage,personalInfo)
        divXml.append(createDiv)
    }
    spin(false);
}

function deleteElement(id) {
    request('DELETE', usersUrl+`/${id}`);
    document.getElementById(`${id}`).remove();
}


function editElement(id) {
    console.log(`edit ${id}`)
    let userInfo = document.getElementById(id);
    let edit = userInfo.querySelector(`.edit-btn`).style.display = 'none';
    let saveBtn = userInfo.querySelector(`.save`).style.display = "inline-block";

    // edit username
	let username = userInfo.querySelector('.name');
	username.style.display = 'none';
	let input = document.createElement('input');
	input.type = 'text';
	input.className = 'input-username';
	input.setAttribute('value', `${username.innerHTML}`);
	username.append(input);


    saveBtn.setAttribute('onclick', `saveChanges(id)`);

    request('PUT', usersUrl+`/${id}`);
}


function getAvatar (cat) {
	spin(true);
    xmlHttp.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
	xmlHttp.onload = function () {
		if ((xmlHttp.readyState==4) && (xmlHttp.status==200)) {
            const requestText = xmlHttp.responseText; 
            let avatarURL = JSON.parse(requestText);
            cat.src = `${avatarURL[0].url}`;
		} 
	}
	xmlHttp.send();
	spin(false);
}

function spin(state) {
    if (state) {
        let spinner = document.createElement('div');
		spinner.className = 'spinner';
		document.body.appendChild(spinner);
    } else {
        let removeSpinner = document.querySelector('.spinner');
		removeSpinner.remove();
    }
}
