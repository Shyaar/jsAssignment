let score;
//change score to see grade
score = 100;

if(score<45){
    console.log("F")
}
else if(score>44 && score<50){
    console.log("D")
}
else if(score>49 && score<60){
    console.log("C")
}
else if(score>59 && score <70){
    console.log("B")
}
else if(score >69 && score<101 ){
    console.log("A")
}else{
    console.log(`${score} is an invalid grade`)
}

// 0 to 44 is failed
// 45 to 49 is D
// 50 to 69 is c 
// 70- 89 is b 
// 90 - 100 is a