
$().ready(function() {
    
    // id가 destinations 인 element 하위의
    // 모든 li를 찾아온다.
    // CSS : "#destinations li"
    // $("#destinations li"); <-- 이 방법은 사용 x
    var liDestinations = $("#destinations").find("li"); // <-- 더 빠르다.
    
    console.log(liDestinations);
    console.log(liDestinations.text());
    console.log(liDestinations.html());
    
    // liDestinations.html("<div>Change!</div>");

    // CSS : "#destinations li:first-child"
    // $("#destinations li:first-child"); <-- 느리다.
    var firstLiElement = $("#destinations").find("li").first(); // <-- 빠르다.
    console.log("first li: ", firstLiElement.text());

    // CSS : "#destinations li:last-child"
    // $("#destinations li:last-child"); <-- 느리다.
    var lastLiElement = $("#destinations").find("li").last();
    console.log("last li: ", lastLiElement.text());

    // CSS : "#destinations li:nth-child(2)"
    // $("#destinations li:nth-child(2)");
    var secondLiElement = $("#destinations").find("li").first().next();
    console.log("second li: ", secondLiElement.text());
    
    var secondLiElement2 = $("#destinations").find("li").last().prev();
    console.log("second li: ", secondLiElement2.text());

    // $("#destinations").find("li").first();
    var firstLiElement2 = $("#destinations").find("li").eq(0);
    console.log("first li: ", firstLiElement2.text());

    // $("#destinations").find("li").first().next();
    var secondLiElement3 = $("#destinations").find("li").eq(1);
    console.log("second li: ", secondLiElement3.text());

    // $("#destinations").find("li").last();
    // $("#destinations").find("li").first().next().next();
    var lastLiElement2 = $("#destinations").find("li").eq(2);
    console.log("last li: ", lastLiElement2.text());

    var parentElement = $("li").parent(); // 사용 X (DOM의 구조가 상시로 바뀌기 때문)
    console.log(parentElement);
});