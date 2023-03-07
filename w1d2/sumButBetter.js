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
    for(const currentNumber of listOfValues){
        sumBuffer += currentNumber
    }

    return sumBuffer
}

const convertAndValidateList = function(list){

    const numberListBuffer = []
    for(const currentValue of list){
        const isValidValue = !Number.isNaN(currentValue)

        if(isValidValue){
            numberListBuffer.push(currentValue)
        }
    }
    
    return numberListBuffer
}

const resilientCalculateSum = function(list){
    const cleanedList = convertAndValidateList(list)
    const sum = calculateSum(cleanedList)

    return sum
}


const result = resilientCalculateSum(process.argv)
console.log(result)


const result2 = resilientCalculateSum(['a',12,3,4,45,56,6,false])
console.log(result2)