let age = 60

if(age < 13){
    console.log(`user is ${age}, Ticket value =$5`)
}else if(age>12 && age<19){
    console.log(`user is ${age}, Ticket value =$10`)
}else if(age>18 && age<60){
    console.log(`user is ${age}, Ticket value =$20`)
}else{
    console.log(`user is ${age}, Ticket value =$15`)
}