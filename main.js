//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFood(object){

    for (let item in object){
        let value = object[item];

        console.log(`${item}:`)
        // Loops through arry if array
        if (Array.isArray(value)){
            for(let thing of value){

                // loops through key value pairs if object
                if(typeof(thing)=="object"){
                    for (let [key,value] of Object.entries(thing)){
                        console.log(`${key}: ${value}`)
                    }
                }
                console.log(thing)
            }
        }else{
            console.log(value)
        }
    }

}

displayFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    
    constructor(name,age){
        this.name =name
        this.age = age
    }

    printInfo = () =>{
        return `${this.name} is ${this.age} years old.`
    }

    addAge = num =>{
        this.age += num
        return this.age
    }

    getOlder(){
        this.age+=1
        return this.age
    }
}


jackJack = new Person("Jack Jack",1);
console.log(jackJack.printInfo())
jackJack.addAge(2)
console.log(jackJack.printInfo())


aang = new Person("Aang", 12)
console.log(aang.printInfo())
aang.getOlder()
aang.getOlder()
aang.getOlder()
console.log(aang.printInfo())
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function check_length(word){
    return new Promise((resolve, reject)=>{
        if (word.length > 10){
            resolve("Big word")
        }else{
            reject("Small number")
        }
    }

    )
}

check_length("enclyclopedic").then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(`small number`)
})

// Codewars Practice

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    vowels="aeiou";
    vowelCount = 0;
    for(i =0; i< str.length; i++){
      if (vowels.includes(str[i])){
        vowelCount += 1;
      }
    }
    
    return vowelCount;
  }


//   The museum of incredible dull things
//   The museum of incredible dull things wants to get rid of some exhibitions. 
//Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
//She gives them a rating, and then removes the one with the lowest rating.
  
//   However, just as she finished rating all exhibitions, she's off to an important fair,
// so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. 
//Fair enough.
  
//   Task
//   Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
  
//   Don't change the order of the elements that are left.
  
//   Examples
//   * Input: [1,2,3,4,5], output = [2,3,4,5]
//   * Input: [5,3,2,1,4], output = [5,3,2,4]
//   * Input: [2,2,1,2,1], output = [2,2,2,1]

  function removeSmallest(numbers) {
  
    let lowscore = Infinity
    
    for(let score of numbers){
      if (score < lowscore){
        lowscore = score
      }
    }
    
    let lowScoreRemoved = false;
    output = [];
    for(let score of numbers){
      if (score == lowscore && lowScoreRemoved==false){
        lowScoreRemoved = true;
      }else{
        output.push(score);
      }
    }
    
    return output;
  }

//   Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
