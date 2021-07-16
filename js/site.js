//Basic JS to read and store data in local storage

let heroes = [];
//Reads local storage
let heroes2 = JSON.parse(localStorage.getItem("heroArray"));

//if there is no data reset it to [], if there is, it show it
if (heroes2 == null) {
    heroes2 = [];
} else {
    displayHeroes(heroes2);
}

//get all values, reassign them and calls the logic function
function getValues() {

    let hero = {};
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let heroName = document.getElementById("hname").value;
    hero["FirstName"] = firstName;
    hero["LastName"] = lastName;
    hero["HeroName"] = heroName;

    /*hero["firstName"] = document.getElementById("fname").value;*/

    addHero(hero);
}

function addHero(hero) {
    //pushes data into array that will be redirected to local storage
    heroes2.push(hero);

    //saves data to local storage
    localStorage.setItem("heroArray", JSON.stringify(heroes2));
    displayHeroes(heroes2);

}

function displayHeroes(heroes) {

    //send data to html
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let index = 0; index < heroes.length; index++) {

        results.innerHTML += `<br><strong>Fist Name: </strong>${heroes[index].FirstName}<br><strong>Last Name : </strong>${heroes[index].LastName}<br><strong>Hero Name : </strong>${heroes[index].HeroName}<hr>`;
    }
    formClear();
}
//delete data in local storage, activated by addEventListener
function clearHeroes() {

    heroes2 = [];
    localStorage.setItem('heroArray', JSON.stringify(heroes2));
    displayHeroes(heroes2);
}
//Clearing fields after submiting
function formClear() {

    let theForm = document.getElementById("heroForm");
    theForm.reset();
}