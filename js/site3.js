const heroSample = {
    FirstName: "Tony",
    LastName: "Stark",
    HeroName: "Iron Man"
};



function getValues() {
    //pull values from the screen

    //push the values into an object




}


// add a Hero to the project
function addHero() {

    let hero = {};
    let heroes = [];

    //add Peter Parker
    hero["FirstName"] = "Peter";
    hero["LastName"] = "Parker";
    hero["HeroName"] = "Spider Man";

    let hero2 = {};
    //Add Tony Star
    hero2["FirstName"] = "Tony";
    hero2["LastName"] = "Stark";
    hero2["HeroName"] = "Iron Man";

    heroes.push(hero);
    heroes.push(hero2);
    displayHeroes(heroes);

    //pass the objects to addHero
    //addHero(hero)
}

//
function displayHeroes(heroes) {

    let results = document.getElementById("results");
    results.innerHTML = "";

    for (let index = 0; index < heroes.length; index++)

        results.innerHTML += `FistName: ${heroes[index].FirstName}, LastName : ${heroes[index].LastName}, HeroName : ${heroes[index].HeroName}`;

}
