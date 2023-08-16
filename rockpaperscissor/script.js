question = prompt("pick a number ?",'' )
if (question == 0){
    alert(`hybrid value ${0}`)
}
else if(question >0){
    alert(`hybrid value ${1}`)
}
else {
    alert(`hybrid value ${-1}`)
}

let result;
a = 10;
b = 17;
result = (a + b < 4)? 'Below': 'Over';
alert(result);


let message;
login = prompt("Enter roll", '') 
message = (login == 'Employee') ? 'hello' : (login == 'Director')? 'Greetings' : (login == '')? 'No login' : '';
alert(message);
