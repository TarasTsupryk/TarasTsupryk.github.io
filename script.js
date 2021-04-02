window.onload = function(){
    var showBtns = document.querySelectorAll(".showMore__item");

    for (var i = 0; i < showBtns.length; i++){
        showBtns[i].onclick = function(){
            var subTitle = this.parentElement.parentElement.querySelector(".item__subTitle"); 
            subTitleSpan = subTitle.querySelector(".item__croweddText");
            subTitleSpan.classList.toggle("show");

            if(subTitleSpan.classList.contains('show')){
                this.innerText = "show less";
                subTitle.querySelector("span").style.display = "none";
            } else {
                this.innerText = "show more";
                subTitle.querySelector("span").style.display = "inline";
            }
        }
    }

}


