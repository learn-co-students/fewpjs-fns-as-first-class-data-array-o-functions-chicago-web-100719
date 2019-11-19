const wakeDog = function(dogName, dogBreed) {
  let wake = `Wake ${dogName} the ${dogBreed}`
  console.log(wake)
  return wake;
}

var leashDog = function(dogName, dogBreed) {
  let leash = `Leash ${dogName} the ${dogBreed}`
  console.log(leash)
  return leash;
}

var walkToPark = function(dogName, dogBreed) {
  let walk = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walk)
  return walk;
}

var throwFrisbee = function(dogName, dogBreed) {
  let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(frisbee)
  return frisbee;
}

var walkHome = function(dogName, dogBreed) {
  let home = `Walk home with ${dogName} the ${dogBreed}`
  console.log(home)
  return home;
}

var unleashDog = function(dogName, dogBreed) {
  let unleash = `Unleash ${dogName} the ${dogBreed}`
  console.log(unleash)
  return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed) {
  return routine.map(f => f(dogName, dogBreed))
}

