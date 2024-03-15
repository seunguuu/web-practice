window.onload = function () {
  var buttonArray = document.querySelectorAll(".package-green-button");

  buttonArray.forEach(function (button) {
    // Click 이벤트를 할당
    button.addEventListener("click", function () {
      // Element 생성.
      var price = document.createElement("p");
      price.innerText = "$399.99";
      console.log(price);

      // Element 추가
      var package = button.parentElement.parentElement;
      package.append(price);
      //   package.prepend(price);
      //   package.after(price);
      //   package.before(price);

      // 버튼 제거
      var buttonArea = button.parentElement;
      buttonArea.remove();
    });
  });
};
