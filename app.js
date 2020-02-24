var salutation = function greet() {
    return 'Haydo!';
};
 var salutation = greet();
console.log(salutation);


 function echo(sound) {
     return 'sound';
 };
console.log(echo());


 function greet(name) {
     return 'Hello ' + name + '!';
 }
 greet('Lucas');


function shout(string) {
    return 'Fire';
}
console.log(shout () + shout ()) ;


function doSomething(name) {
    return 'Lucas';
}
console.log(doSomething());


function multiplyFive(value,fixed) {
    fixed=5;
    return value*fixed;
}
console.log(multiplyFive(10));


function myFunction(){
 var text='Hello World!!!';
 alert(text);
}
myFunction();


let isAnswerRight = true;
var answer = (isAnswerRight = true) ? 'The answer is right!' : 'The answer is wrong!'
console.log(answer);


function tellFortune(jobTitle,geographicLocation,partnerName,numberOfChildren) {
var future = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ' and married to ' + partnerName + ' with ' + numberOfChildren + ' kids.';
console.log(future);
}
tellFortune('Game Developer', 'Dublin', 'Priscila', 5);
tellFortune('Programer', 'Madrid', 'Priscila', 4);
tellFortune('Data Scientist', 'Lisbon', 'Priscila', 6);
