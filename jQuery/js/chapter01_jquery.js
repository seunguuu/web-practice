
// .ready ==> rendering이 끝난 후의 이벤트
// .ready ==> window.onload와 같다.

// jQuery(document).ready();
// $ ==> jQuery 객체.

// shorthand 표현식.
// $(document).ready();
$().ready( function() {
    // Rendering이 끝나면 파라미터로 전달된 함수가 실행된다.
    // Rendering이 언제 끝날 지 알 수 없다.

    // alert(); 을 실행해서 정상적으로 경고창이 뜨는지를 항상 확인한다.
    // alert("jQuery Loading and Rendering 완료");

    // js: document.querySelector("h1");
    var h1Element = $("h1");
    console.log(h1Element);

    // js: alert(h1Element.innerText);
    console.log(h1Element.text());

    // h1 DOM의 내용을 변경.
    h1Element.text("Where to?");

    // jQuery 함수의 특징.
    // .함수명(); <-- Getter
    // .함수명(데이터); <-- Setter
    // 값이 파라미터로 전달되면 Setter, 아니면 Getter로 생각하면 된다.
});