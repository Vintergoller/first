let header = document.querySelector('.js-header'),
headerH = document.querySelector('.js-header').clientHeight;




document.onscroll = function(){
    let scroll = window.scrollY;
    console.log(scroll);
    if(scroll>headerH + 100){
        header.classList.add('fixed');
      
        
    }
    else{
        header.classList.remove('fixed');
  
      
    }
}