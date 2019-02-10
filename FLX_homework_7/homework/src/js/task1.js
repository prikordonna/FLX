let login = prompt('Enter your login');
const currentTime = new Date().getHours();

if (login === null || login === "") {
    alert("Canceled");
} else if (login.length < 4 ) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User" ) {
    let password = prompt("Enter your password");
    if (password === null || password === "") {
        alert("Canceled");
    } else if ( password === "UserPass") {
        if (currentTime < 20) {
            alert("Good day, dear User!");
        } else {
            alert("Good evening, dear User!");
        }
    } else {
        alert("Wrong password");
    }
} else if( login === "Admin" ) {
    let password = prompt("Enter your password");
    if (password === null || password === "") {
        alert("Canceled");
    } else if ( password === "RootPass") {
        if (currentTime < 20) {
            alert("Good day, dear Admin!");
        } else {
            alert("Good evening, dear Admin!");
        }
    }
} else {
    alert("I don't know you");
}