
window.onload = function() {

    var liElements = document.querySelectorAll("li");
    console.log(liElements);

    liElements.forEach(function(li) {
        console.log(li.innerText);
        li.innerText = "Seoul";
    })
};