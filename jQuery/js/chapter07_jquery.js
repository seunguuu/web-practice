$().ready(function () {

    $("#package-ticket-count").on("change", function() {
        // 값이 변경되었을때 keyup 이벤트를 발생시킴
        $(this).keyup();
    });
    // $("#package-ticket-count").on("keyup", function() {
    $("#package-ticket-count").on("keyup", function() {
        // 1. package-ticket-count의 값을 받아온다.
        // parseInt > 문자를 숫자로 변경하는 함수
        var ticketCount = parseInt($(this).val());

        // JS의 경우
        // document.querySelector(“#package-ticket-count).value;

        // 숫자가 아니거나 음수일때 0으로 변경해서 ticketCount에 할당
        if(isNaN(ticketCount) || ticketCount < 0){
            ticketCount = 0;
            $(this).val(ticketCount);
        }
        // 2. data-price 변수의 값을 받아온다.
        // var ticketPrice = $(".package").data("price");
        var ticketPrice = $(this).closest(".package").data("price");

        console.log("ticketPrice", ticketPrice);
        console.log("ticketCount", ticketCount);

        console.log("ticketCount type", typeof(ticketCount)); // string
        console.log("ticketPrice type", typeof(ticketPrice)); // number
        // 3. 입력값과 price의 값을 곱해서
        var amount = ticketPrice * ticketCount;
        console.log("amount", amount);
        console.log("amount type", typeof(amount));

        // 4. #amount에 텍스트를 변경한다.
        $("#amount").text(amount);
    })
})