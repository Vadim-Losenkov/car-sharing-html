$(function(){

  $('.slider__inner').slick({
  	arrows: false,
  	dots: true,
  	slidesToShow: 3,
    responsive: [
			
		// Для экрана меньше 840px выводится 2 изображения в слайдере раздела "Пригнанные нами авто"
			{
				breakpoint: 841,
				settings: {
					slidesToShow: 2
				} 
			},

			// Для экрана меньше 600px выводится 1 изображение в слайдере раздела "Пригнанные нами авто"
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1
				} 
			},
		]
  });

});