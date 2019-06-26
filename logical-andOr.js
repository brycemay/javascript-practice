let temp = 55

//Logical and operator -true if both sides are true
//false if otherwise

// logical or operator - true if at least one side is true. false if otherwise

if
 (temp >= 60 && temp <= 90) { 
    console.log('its pretty nice out')
}else if (temp <= 0 || temp >= 120) {
    console.log('do not go outside')
} else {
    console.log('eh. do what you want')
}

//challenge 

let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer up some vegan dishes')
} else {
    console.log('offer anything on menu')
}


//if both are vegan, 'only offer up vegan dishes'
// is at least one vegan? 'offer some vegan options'
// else, offer up anything on the menu.