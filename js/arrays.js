
// 비어있는 배열
var scoreArray = [];
console.log("scoreArray > ", scoreArray);

// 아이템이 하나만 있는 배열
var scoreArray2 = [10];
console.log("scoreArray2 > ", scoreArray2);

// 아이템이 여러개 있는 배열
var scoreArray3 = [10, 20, 30, 40];
console.log("scoreArray3 > ", scoreArray3);

// 다른 타입의 아이템을 여러개 가지고 있는 배열
var scoreArray4 = [undefined, null, 10, true, false, 10.333, "문자", '문자열', [1, 2, 3, 4]];
console.log("scoreArray4 > ", scoreArray4);


// 일반 for
for(var i=0; i<scoreArray4.length; i++){
    if( Array.isArray(scoreArray4[i]) ) {
        for(var j=0; j < scoreArray4[i].length; j++){
            console.log("for - scoreArray4[i][j]", scoreArray4[i][j]);
        }
    }
    else{
        console.log("for = scoreArray4[i]", scoreArray4[i]);
    }
}

// for - in
for(var i in scoreArray4){
    // i ==> index

    if( Array.isArray(scoreArray4[i]) ){
        for(var j in scoreArray4[i]){
            console.log("for-in - scoreArray4[i][j]", scoreArray4[i][j]);
        }
    }
    else{
        console.log("for-in i", i);
    }
}


var scoreArray5 = [];
console.log("scoreArray5", scoreArray5.length, scoreArray5);

// 배열에 아이템 추가
scoreArray5.push(undefined);
console.log("scoreArray5", scoreArray5.length, scoreArray5);

scoreArray5.push(null);
console.log("scoreArray5", scoreArray5.length, scoreArray5);

scoreArray5.push(100);
console.log("scoreArray5", scoreArray5.length, scoreArray5);


// 배열의 아이템 삭제.
// scoreArray5 [ undefined, null, 100 ]
//                   0        1    2
// 0번 인덱스를 제거. ( pop )
// scoreArray5.pop(); // -1: 가장 첫 번째 삭제, 0: 가장 마지막을 삭제.
// console.log("scoreArray5", scoreArray5.length, scoreArray5);

// 0번 인덱스를 제거. ( splice )
// 시작 인덱스, 지울 개수 를 적어준다.
scoreArray5.splice(0, 1);
console.log("scoreArray5", scoreArray5.length, scoreArray5);

// 아이템 추가
scoreArray5.push(90);
console.log("scoreArray5", scoreArray5.length, scoreArray5);

// 1번 인덱스를 제거 (splice)
scoreArray5.splice(1, 1);
console.log("scoreArray5", scoreArray5.length, scoreArray5);
