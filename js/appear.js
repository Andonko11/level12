function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.0;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

    window.addEventListener('scroll',scrollAppear);


function scrollAppear2(){
    var introText2 = document.querySelector('.intro-text2');
    var introPosition2 = introText2.getBoundingClientRect().bottom;
    var screenPosition2 = window.innerHeight / 1.0;
    
    if(introPosition2 < screenPosition2){
        introText2.classList.add('intro-appear2');
    }
}
    
    window.addEventListener('scroll',scrollAppear2);


function scrollAppear3(){
    var introText3 = document.querySelector('.intro-text3');
    var introPosition3 = introText3.getBoundingClientRect().bottom;
    var screenPosition3 = window.innerHeight / 1.0;
        
    if(introPosition3 < screenPosition3){
        introText3.classList.add('intro-appear3');
    }
}
        
    window.addEventListener('scroll',scrollAppear3);