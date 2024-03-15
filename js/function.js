function sayHello(){
    console.log("반갑습니다.");
}

function sayHelloWithName(name) {
    console.log("안녕하세요, " + name + "님!");
}

function calcNumbers(num1, num2){
    var result = num1 + num2;
    return result;
}

// 정상 케이스
sayHello();
sayHelloWithName("장민창");
var calcResult = calcNumbers(50, 40);
console.log(calcResult);


// 이상 케이스
sayHello(1, 2, 3, 4, 5);
sayHelloWithName();
var calcResult = calcNumbers(50, 40, 4, 5);
console.log(calcResult);


function addAllNumbers(n1, n2, n3, n4){
    console.log(arguments, n1, n2, n3, n4);

    var sum = 0;
    for(var i in arguments){
        sum += arguments[i];
    }
    return sum;
}

var addResult = addAllNumbers(1, 2, 3, 4);
console.log(addResult);


// 중첩 함수
function getCalcNumbers(numberOne, numberTwo){

    var result = calcPlus();

    // 숨기고 싶은 함수.
    function calcPlus(){
        return numberOne + numberTwo;
    }

    return result;
}

// 함수 안에 있는 중첩 함수를 호출할 수 없다.
// getCalcNumbers() 함수를 통해서만 실행될 수가 있다.
// calcPlus(); // Uncaught ReferenceError: calcPlus is not defined


// 콜백함수 (함수가 파라미터로 전달되는 함수)
function getCalcResult(num1, num2, beginFn, endFn){
    beginFn(num1, num2);
    var result = num1 + num2;

    endFn(num1, num2, result);
    return result;

}


var calcResult = getCalcResult(110, 220, function(num1, num2) {
    console.log("계산을 시작합니다");
}, function(num1, num2, result) {
    console.log("계산이 끝났습니다.");
    console.log("결과는 " + result + " 입니다.");
});


var calcResult2 = getCalcResult(110, 220, function(num1, num2) {
    console.log("=============================");
}, function(num1, num2, result) {
    console.log(num1 + " + " + num2 + " = " + result);
    console.log("=============================");
});
console.log(calcResult2);



function counter(){
    var count = 0;

    return function() {
        return ++count;
    }
}


function counter2() {
    var count = 0;

    function count2() {
        return ++count;
    }
    return count2;
}

var counter1 = counter();
console.log(counter1);
var count = counter1();
console.log(count);

count = counter1();
console.log(count);

count = counter1();
console.log(count);


var counter2 = counter2();
console.log(counter2);
var count2 = counter2();
console.log(count);

count2 = counter2();
console.log(count);

count2 = counter2();
console.log(count);


// 즉시 실행 함수.
// 실행하는 함수를 소괄호로 감싸고 함수의 파라미터를 그다음 소괄호에 적어준다.
(function (message){
    console.log(message + "실행됨.");
})("즉시 실행 함수 ");


function foo(){
    var count = 0;
    if(true){
        var bar = 10;
    }
    console.log(count);
    console.log(bar);
}

foo();