let heroes = [];
//Access the browser's local storage and look for something named heroArray
let heroes2 = JSON.parse(localStorage.getItem("heroArray"));
//If there was not something called heroArray make an empty array
if (heroes2 = null) {
    heroes2 = [];
}
//After this code I know that heroes2 is an array, it may have information or it may
//be empty but it is definitely an array

function addHero() {
    heroes2.push(hero);

    localStorage.setItem("heroArray", JSON.stringify(heroes2));





    displayData(heroes2);
}