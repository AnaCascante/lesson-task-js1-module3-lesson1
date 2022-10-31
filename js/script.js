
// Question 1 Write code that checks if the below variable is truthy, log the string "truthy" if it is, and "falsy" if not.


const menuIsOpen = false;

if (menuIsOpen){
    console.log ("truthy");
} else {
    console.log ("falsy"); 
}

// Question 2  Based on the below URL, what are the different querystring parameters and their respective values?


const url = "https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354";

// platform = 4, genres = action, publishers = 345;


//  Question 3 - Create an async function called `getCatFacts`. - Inside the function make an API call to the below URL using async/await, and save it to a variable called `response`. - Create a variable called `results` where you await the json of your response variable. - Console.log the length of `results`.

async function (getCatFacts){
    const url = "https://cat-fact.herokuapp.com/facts";
    const response = await fetch (url);
    const results = await response.json ();¨
    console.log (results.length);
}

getCatFacts ();

// https://noroff.herokuapp.com/v1/cat-facts/facts

