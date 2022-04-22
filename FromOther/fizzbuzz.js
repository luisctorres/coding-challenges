

// write a function called fizzbuzz that will accept no arguments
// this function print an array with all numbers from 1 to 20 but with 3 exceptions:
//      - for every number that is only divisible by 3, Print out 'Fizz'
//      - for every number that is only divisible by 5, Print out 'Buzz'
//      - for every number that is only divisible by 3 & 5, Print out 'FizzBuzz'
//



function fizzBuzz() {
    //array to store result of each iteration
    let result = [];
    
    for (let i = 1; i <= 20; i++) {
        
        //FizzBuzz 
        if (i%15 == 0) {
            result.push("FizzBuzz");
            continue
        }
        
        //Fizz 
        if ((i%3 == 0) && !(i%5 == 0)) {
            result.push("Fizz");
            continue
        }

        //Buzz 
        if (!(i%3 == 0) && (i%5 == 0)) {
            result.push("Buzz");
            continue
        }
        //Does not meet conditions
        result.push(i);
    }

    console.log(result);
}

fizzBuzz();