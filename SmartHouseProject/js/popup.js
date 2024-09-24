// let popupBg = document.querySelector('.popup'); // Фон попап окна
// let popup = document.querySelector('.pulse__body'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна


// if(openPopupButtons.length>0){
//     for(let index = 0; index<openPopupButtons.length;index++){
//         const popupLinks = openPopupButtons[index];
//         popupLinks.addEventListener("click",function(e){
//             const popupName = popupLinks.getAttribute('href').replace('#','');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelector('.close-popup');
// if(popupCloseIcon.length>0){
//     for(let index=0;index<popupLinks.length;index++){
//         const el = popupCloseIcon[index];
//         el.addEventListener('click',function(e){
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         })
//     }
// }

// function popupOpen(curentPopup){
//     if(curentPopup){
//         const popupActive = document.querySelector('.open-popup');
//         curentPopup.classList.add('active'); 
//         curentPopup.classList.add('active');
//         curentPopup.addEventListener("click", function(e){
//             if(!e.target.closest('.popup__body')){
//                 popupClose(e.target.closest('.popup'));
//             }
           
//         });
        
    

//     }

   
    

// }
// function popupClose(popupActive){
  
//     popupActive.classList.remove('active'); 
//     popupActive.classList.remove('active');


// }

// $(function(){
//   $('.open-popup').on('click', function(){
//       $().addClass('active').siblings().removeClass('active');
//     });
//   });
$(function(){
  $('.popup').on('click', function(){
      $(this).toggleClass('show close').siblings().removeClass('show close');
    });
  });

//openPopupButtons.forEach((button) => { // Перебираем все кнопки
   // button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
     //   e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      //  popupBg.classList.add('active'); // Добавляем класс 'active' для фона
       // popup.classList.add('active'); // И для самого окна
   /// })
//});

//closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  //  popupBg.classList.remove('active'); // Убираем активный класс с фона
  //  popup.classList.remove('active'); // И с окна
//});

// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//     if(e.target === popupBg) { // Если цель клика - фот, то:
//         popupBg.classList.remove('active'); // Убираем активный класс с фона
//         popup.classList.remove('active'); // И с окна
//     }
// });
