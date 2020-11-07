const scrollBtn = document.querySelector(".scroll_top")

scrollBtn.addEventListener("click", function(){
    window.scrollTo({left: 0, top:0});
    
});

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 700) {
        scrollBtn.classList.add("show_scroll");
    } else {
        scrollBtn.classList.remove("show_scroll");
    }
});