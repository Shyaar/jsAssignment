let numbers=[3,2]

// if(numbers[0]>numbers[1]){
//     console.log(`number ${numbers[0]} is greater than ${numbers[1]}`)
// }else if(numbers[1]>numbers[0] ){
//     console.log(`number ${numbers[1]} is greater than ${numbers[0]}`)
// }else{
//     console.log(`number ${numbers[0]} is of same value as ${numbers[1]}`)
// }

numbers[0]>numbers[1]?console.log(`number ${numbers[0]} is greater than ${numbers[1]}`):numbers[1]>numbers[0]?console.log(`number ${numbers[1]} is greater than ${numbers[0]}`):console.log(`number ${numbers[0]} is of same value as ${numbers[1]}`)