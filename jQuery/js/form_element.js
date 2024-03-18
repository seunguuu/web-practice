// jQuery(document).ready(function() {});
// $(document).ready(function() {});
$().ready(function() {
    // 1. input type text의 값을 가져오기
    var emailValue = $("#email").val();
    console.log(emailValue);

    // 2. input type text의 값을 할당하기
    $("#email").val("mcjang1116@gmail.com");

    // 3. input type text의 값을 가져오기
    emailValue = $("#email").val();
    console.log(emailValue);


    // ------------------------------------------- //
    // 1. jobs의 선택된 값을 가져오기
    var selectedJobs = $("#jobs").val(); // 2
    console.log(selectedJobs); // 2

    // 2. jobs에서 값을 변경해서 다른 옵션을 선택하도록 하기
    $("#jobs").val("3"); // 화면에서 "교수" 가 선택된 상태로 변경

    // 3. jobs의 선택된 값을 가져오기
    selectedJobs = $("#jobs").val(); // 3
    console.log(selectedJobs); // 3


    // 4. jobs의 옵션이 바뀌었을 때 발생할 이벤트를 정의.
    $("#jobs").on("change", function() {
        var changedOptionValue = $(this).val();
        console.log(changedOptionValue);

        // === : 타입과 값이 일치할 때만 true ==> "1" === 1 ==> false
        // == : 타입과 관계없이 값만 같다면 true ==> "1" == 1 ==> true
        if(changedOptionValue === "0"){
            alert("직업을 반드시 선택해야 합니다!");
        }
        else if(changedOptionValue === "1"){
            alert("회사원을 선택했습니다.");
        }
        else if(changedOptionValue === "2"){
            alert("학생을 선택했습니다.");
        }
        else if(changedOptionValue === "3"){
            alert("교수를 선택했습니다.");
        }
        else{
            alert("올바른 직업을 선택하세요!");
        }
    });

    //   $("#jobs").val("999999");
    //   $("#jobs").change();

    
    var checkedAgeLength = $("input[type=radio][name=age]:checked").length;
    console.log(checkedAgeLength);
    if(checkedAgeLength === 0){
        alert("나이대를 선택해주세요!");
    }
    
    var checkedAgeValue = $("input[type=radio][name=age]:checked").val();
    console.log("선택한 나이대는: ", checkedAgeValue);



    var checkedGenreLength = $("input[type=checkbox][name=favorite-genre]:checked").length;
    console.log(checkedGenreLength);
    if(checkedGenreLength === 0){
        alert("좋아하는 장르를 1개 이상 선택해주세요!");
    }

    var checkedGenreValue = $("input[type=checkbox][name=favorite-genre]:checked").val();
    console.log("선택한 장르는: ", checkedGenreValue);



    $("#checked-all").on("change", function() {
        // checked 속성값을 가져온다.
        var isChecked = $(this).prop("checked");
        
        // 모든 장르 체크박스에 checked 할당. 전체선택 기능
        $("input[type=checkbox][name=favorite-genre]").prop("checked", isChecked);
    });

    $("input[type=checkbox][name=favorite-genre]").on("change", function() {
        // 체크박스들이 모두 체크되어 있을때의 길이 체크
        var allCheckboxLength = $("input[type=checkbox][name=favorite-genre]").length;
        // 체크된 체크박스의 길이 체크
        var checkedCheckboxLength = $("input[type=checkbox][name=favorite-genre]:checked").length;

        // 모두 선택되어있다면 isAllChecked는 true, 하나라도 체크가 되어있지 않다면 isAllChecked는 false
        var isAllChecked = allCheckboxLength === checkedCheckboxLength;
        // 결과를 "전체선택" 체크박스에 반영
        $("#checked-all").prop("checked", isAllChecked);
    })
});


/**
 * 모바일 기기에서 키보드의 레이아웃을 변경.
 * <input type="text" />
 * <input type="number" />
 * <input type="tel" />
 * <input type="email" />
 * <input type="..." />
 */