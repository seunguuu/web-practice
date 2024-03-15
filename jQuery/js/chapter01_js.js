
/* Rendering이 끝나기 전. */
// "" 자리에는 css의 selector를 쓸 수 있다.
// 여기에서 document란 html의 문서를 말한다.
var h1Element = document.querySelector("h1");
console.log("Before Render > ", h1Element);
// h1Element.innerText는 h1Element에 들어있는 content를 가져오는 역할을 한다.
// alert("Before Render > " + h1Element.innerText);

/** 
 * 브라우저가 Tag를 모두 분석한 뒤
 * 화면에 노출시키는 Rendering 과정이 끝나고 나면
 * onload 이벤트를 호출한다.
 * 
 * rendering이 끝난 후 부터 DOM을 Handling할 수 있다.
 */
window.onload = function() {
    // Rendering이 끝난 후
    var h1Element = document.querySelector("h1");
    console.log("After Render > ", h1Element);
    alert("After Render > " + h1Element.innerText);
};