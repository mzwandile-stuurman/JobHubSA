var date = new Date('2024-04-04T15:30:00').toLocaleDateString();

var Today = document.getElementsByClassName("expire");

for (let index = 0; index < Today.length; index++) {
    Today[index].innerHTML =  "Date posted" +" "+ date;

}
