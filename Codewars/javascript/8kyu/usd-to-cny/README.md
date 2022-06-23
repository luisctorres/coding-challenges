
# USD to CNY

Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")



## Programming Language Completed In

**Lang:** Javascript


## Solution

```
function usdcny(usd) {
    let conversionRate = 6.75
    let conversion = conversionRate * usd 
    usdCny = conversion.toFixed(2)
    return usdCny + " " +"Chinese Yuan";
  }

```

## Lessons Learned

By utilizing a basic function passing in the usd value as an argument.

We then multiply the value of usd by the conversion rate.

we return the value of that result .toFixed(2)

toFixed() allows us to round the number to the specified number of decimal places.
