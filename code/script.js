// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
  `What's your name?`
)

alert(
  `Ciao ${userName}!`
)

// Step 2 - Food choice
const foodChoice = parseInt(prompt(
  `What type of food would you like to order?
  Press 1 for pasta, 2 for pizza or 3 for salad?`
))

switch(foodChoice) {
  case 1:
    alert(`You've chosen pasta! Excellent choice!`)
    break;
  case 2:
    alert(`You've chosen pizza! Yummy yummy!`)
    break;
  case 3:
    alert(`Mmm, salad! Great choice!`)
    break;
  default:
    alert(`You've made an invalid choice. Please try again!`)
    location.reload() 
    break;
}

// Step 3 - Subtype choice

let typeOfFood;

  if (foodChoice === 1) {
    typeOfFood = parseInt(prompt(
      `What type of pasta would you like?
      Press 1 for cacio e pepe, 2 for carbonara or 3 for puttanesca`
    ))
  
    switch(typeOfFood) {
      case 1:
      alert(`You've chosen cacio e pepe!`)
      break;
    case 2:
      alert(`You've chosen carbonara`)
      break;
    case 3:
      alert(`You've chosen puttanesca!`)
      break;
    default:
      alert(`You've made an invalid choice. Please try again!`)
      location.reload() 
      break;
    }
  } else if (foodChoice === 2) {
    typeOfFood = parseInt(prompt(
      `What type of pizza would you like?
      Press 1 for margherita, 2 for capricciosa or 3 for pizza bianca`
    ))
    switch(typeOfFood) {
      case 1:
      alert(`You've chosen margherita!`)
      break;
    case 2:
      alert(`You've chosen cappricciosa`)
      break;
    case 3:
      alert(`You've chosen pizza bianca!`)
      break;
    default:
      alert(`You've made an invalid choice. Please try again!`)
      location.reload() 
      break;
    }
  } else if (foodChoice === 3) {
    typeOfFood = parseInt(prompt(
      `What type of salad would you like?
      Press 1 for caesar salad, 2 for greek salad or 3 for a classic shrimp salad`
    ))
    switch(typeOfFood) {
      case 1:
      alert(`You've chosen caesar salad!`)
      break;
    case 2:
      alert(`You've chosen greek salad!`)
      break;
    case 3:
      alert(`You've chosen shrimp salad!`)
      break;
    default:
      alert(`You've made an invalid choice. Please try again!`)
      location.reload() 
      break;
    }
  } else {
    alert(`You've made an invalid choice. Please try again!`)
      location.reload() 
  }

// Step 4 - Age
// const age = parseInt(prompt(
//   `Is this for a child or an adult? Please enter your age:`
// ))

// if (age <= 13) {
//   age = `a child`
// } else if (age > 13) {
//   age = `an adult`
// } else {
//   alert(`You've entered an invalid digit. Please start over!`)
//   location.reload()
// }

// Step 5 - Order confirmation
const orderSummary = parseInt(prompt(
  `Ok, bene, bene, ottimo. Now, let's see.. You've ordered a ${typeOfFood}. 
  Do you wish to place the order?
  Press 1 to proceed or 2 to start over`
))
