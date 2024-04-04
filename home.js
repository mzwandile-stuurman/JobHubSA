var date = new Date();

var Today = document.getElementsByClassName("expire");

for (let index = 0; index < Today.length; index++) {
    Today[index].innerHTML = date.getFullYear();

    
}