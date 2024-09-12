let header = document.querySelector('.js-header'),
headerH = document.querySelector('.js-header').clientHeight;

let headertext = document.querySelector('._textUnlock');


document.onscroll = function(){
    let scroll = window.scrollY;
    console.log(scroll);
    if(scroll>headerH + 120){
        header.classList.add('fixed');
        headertext.classList.add('mainTextUnfixed');
        
    }
    else{
        header.classList.remove('fixed');
        headertext.classList.remove('mainTextUnfixed');
        document.body.removeAttribute('style');
    }
}