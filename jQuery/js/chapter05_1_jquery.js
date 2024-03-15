$().ready(function () {
  // 버튼의 클릭 이벤트 생성
  $(".package-button-area").on("click", function () {
    var package = $(this).closest(".package");
    var amount = package.data("price");
    var currency = package.data("currency");

    console.log("amount > ", amount);
    console.log("currency > ", currency);

    // 태그 만들기
    var price = $("<p>From " + currency + amount + "</p>");
    price.on("click", function () {
      var text = $(this).text();
      alert(text);
    });

    // .package 아래에 추가하기
    package.append(price);
    // GET PRICE 버튼 지우기
    $(this).remove();
  });
});
