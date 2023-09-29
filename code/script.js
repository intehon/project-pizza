// Start here

// Step 1 - Welcome and introduction
alert(
  `Benvenuto! Welcome to pizza della Emelie! Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt(
  `What's your name?`
)

alert(
  `Ciao ${userName}!`
)

// Step 2 - Food choice
const foodChoice = prompt(
  `What type of food would you like to order?
  Select the number of your choice:
  1 - Pasta
  2 - Pizza
  3 - Salad`
)

//Initialize a variable to store the users selected food
let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "Pasta"
} else if (foodChoice === "2") {
  selectedFood = "Pizza"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  //If the user enters an invalid option, throw error and restart
  alert(`You've made an invalid choice. Please try again!`)
  process.exit(1) 
}

alert(`You've chosen ${selectedFood}! Yummy! Now, let's be more specific...`)

// Step 3 - Subtype choice
//Initialize variables to store values from users input
let typeOfFood = ""
let subtypeChoice = []
let finalChoice = ""

if (selectedFood === "Pasta") {
  typeOfFood = prompt(
    `What type of pasta would you like? 
    Select the number of your choice: 
    1 - Cacio E Pepe
    2 - Carbonara
    3 - Puttanesca`
  )
  subtypeChoice = ["cacio e pepe", "pasta carbonara", "pasta puttanesca"]
} else if (selectedFood === "Pizza") {
  typeOfFood = prompt(
    `What type of pizza would you like? 
    Select the number of your choice: 
    1 - Margherita
    2 - Capricciosa
    3 - Pizza Bianca`
  )
  subtypeChoice = ["Margherita", "Capricciosa", "Pizza Bianca"]
} else if (selectedFood === "Salad") {
  typeOfFood = prompt(
    `What type of salad would you like? 
    Select the number of your choice: 
    1 - Caesar Salad
    2 - Greek Salad
    3 - Classic Shrimp Salad`
  )
  subtypeChoice = ["Caesar salad", "Greek salad", "classic shrimp salad"]
}

if (typeOfFood === "1") {
  alert(
    `Excellente! You've chosen ${subtypeChoice[0]}. We'll prepare it for you in just a second! But first we need to know...`
  )
  finalChoice = subtypeChoice[0]
} else if (typeOfFood === "2") {
  alert(
    `Excellente! You've chosen ${subtypeChoice[1]}. We'll prepare it for you in just a second! But first we need to know...`
  )
  finalChoice = subtypeChoice[1]
} else if (typeOfFood === "3") {
  alert(
    `Excellente! You've chosen ${subtypeChoice[2]}. We'll prepare it for you in just a second! But first we need to know...`
  )
  finalChoice = subtypeChoice[2]
} else {
  alert(`You've made an invalid choice. Please try again!`)
  process.exit(1)
}


// Step 4 - Age
let age = parseInt(prompt(
  `Is this for a child or an adult? Your age, per favore:`
))

if (age <= 13) {
  age = `a child`
} else if (age > 13) {
  age = `an adult`
} else {
  alert(`You've entered an invalid digit. Please start over!`)
  process.exit(1)
}

const orderSummary = (prompt(
  `Ok, bene bene.. now, let's see.. You've ordered a ${finalChoice} for ${age}. 
  Do you wish to place the order? 
  1 - Yes
  2 - No`  
))

// Step 5 - Order confirmation

if (orderSummary === "1") {
  alert(`Bravissimo! One ${finalChoice} for ${age} will be ready for you to pick up in 15 minutes! Grazie for your order. Welcome!`)
} else if (orderSummary === "2") {
  alert(`Ok, we will cancel your order of ${finalChoice} for ${age}. Welcome back any time!`)
} else {
  alert(
    `Oh, something went wrong.. We were so close. Please, try again!`
  )
  location.reload() 
}