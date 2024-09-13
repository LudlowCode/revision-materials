document.addEventListener('DOMContentLoaded', () => {
    const underscore = document.getElementById('underscore'); // every element tagged "underscore" gets it applied,
    let showUnderscore = true;                                // however has to have contrainers used cuz i wanted it centered.

    setInterval(() => {
        if (showUnderscore) {       //if it's true(showing)
            underscore.textContent = "_";//it shows
        } else {//if its not
            underscore.textContent = "";//it deletes it
        }
        showUnderscore = !showUnderscore; //easiest and coolest way to swap true and false every iteration
    }, 500); //ms interval time
});