let dogName = document.querySelector("#dog-name");
let dogMood = document.querySelector("#dog-mood");
let dogPets = document.querySelector("#dog-pets");


let dogs = {
  pitbull: {
    name: "Mr. Pitbull",
    mood: ["Sad", "Happy"],
    pets: 0
  }

}

function updatePet() {
  dogs.pitbull.pets++;
  dogPets.innerText = dogs.pitbull.pets;
}