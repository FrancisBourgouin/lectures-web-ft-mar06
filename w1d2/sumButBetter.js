// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored


// Extraction Time!

// Function that will do the sum of a list of numbers
// IN:  Array of values (ideally numbers)
// OUT: Number (sum of the array values)
// TODO: Iterate over the elements (using a for loop)
// TODO: Check if a value is a number or not
// TODO: Add to a sum buffer
// TODO: Output the number

const calculateSum = function(listOfValues){
    let sumBuffer = 0
    for(let i = 0; i < listOfValues.length; i++){
        const currentNumber = listOfValues[i]

        if(typeof(currentNumber) === "number"){
            sumBuffer += currentNumber
        }
    }

    return sumBuffer
}


const result = calculateSum([1,2,3,4,5,6,76,7,8,"WAHAHAHAH", false, -20])
console.log(result)


// Extract values from the command line


const convertProcessValues = function(){
    const valuesOfTheCommandLine = process.argv
    const numberListBuffer = []
    for(let i = 0; i < valuesOfTheCommandLine.length; i++){
        const currentValue = Number(valuesOfTheCommandLine[i])
        
        numberListBuffer.push(currentValue)
    }
    
    return numberListBuffer
}
const processedValues = convertProcessValues()
console.log(processedValues)

const resultAgain = calculateSum(processedValues)
console.log(resultAgain)