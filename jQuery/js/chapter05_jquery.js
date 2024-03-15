$().ready(function () {
  // .package-green-button 에게 클릭 이벤트를 할당.
  //   $(".package-green-button").click(); // <-- 버튼을 클릭해라!

  // $(selector).click(callbackFunction); <-- Deprecated
  $(".package-green-button").on("click", function () {
    //   $(".package-green-button").click(function () {
    // p 태그 만들기
    var price = $("<p>$399.99</p>");
    //   var price = $("<p></p>");
    //   price.text("$399.99");

    // .package 내의 가장 아래쪽으로 붙이기
    // $(".package").append(price);
    // 클릭한 버튼 밑에 p 태그를 추가하기
    // $(this).parent().after(price);
    // 클릭한 버튼에서 가장 가까운 .package 부모를 찾아 가장 아래쪽에 붙이기
    $(this).closest(".package").append(price);

    // .pakage-button-area 지우기
    // $(".package-button-area").remove();
    // 클릭한 버튼만 지우기
    $(this).closest(".package-button-area").remove();

    // $(this).parent().remove();
  }); // <-- 버튼을 클릭하면 function을 수행해라!
});
