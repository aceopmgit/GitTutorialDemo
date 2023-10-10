var number1 = 2;

var number2 = 5



function add(a, b){

var answer = a + b; //line 1

return answer;

}

var sum = add(number1, number2); // line 2



console.log(sum) //line 3 output=7



console.log(answer)//line 4 
/*line 4 output=Reference Error because once a function is executed fully it gets deleted from the execution 
context. So when line 4 tries to access the variable answer which is inside the function add it gives refrence 
error*/


