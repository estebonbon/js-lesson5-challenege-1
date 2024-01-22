var button = document.querySelector(".show-cat");

var cat = document.querySelector(".cat");

button.addEventListener("click", function () {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait come back!";
        button.classList.add("disappear");
        //console.log("Yes");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, Cat!"
        button.classList.remove("disappear");
        //console.log("No");
    }

   
});


//console.log(cat);
//cat.classList.add("show");