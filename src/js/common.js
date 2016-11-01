"use strict";
$(function(){
	$(document).ready(function(){


/*owl-carousel index-page slider*/
		$('.slider-wrap').owlCarousel({
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: true
		});

/*slider for product-cart*/
		$('#slides').slides({
			preload: true,
			preloadImage: 'images/loading.gif',
			play: 5000,
			pause: 2500,
			hoverPause: true
		});
		$(".slides_container").on("click",function(e){
			event.preventDefault(e);
		});

/*change cart icon on hover li*/
		$("#warenkorb").hover(
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-cart");
				},
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-unisex");
		});
		$("#konto").hover(
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-gear");
				},
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-unisex");
		});
		$("#abmelden").hover(
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-lock");
				},
				function(){
					$(".cart__icon > i").removeClass().addClass("icon icon-unisex");
		});


/*Click on product - add / compare*/
		$(".product__item .img-box").on("click", function(){
				if ($(this).parent().find(".overlay").css('display') == 'none') {
					$(this).parent().find(".overlay").fadeIn(500);
				}
				else {
					$(this).parent().find(".overlay").fadeOut(500);
				}
		});
		$(".overlay").hover(
				function(){},
				function(){
					$(this).fadeOut(500);
		});

/*popover block*/
	$(".companies li").hover(
			function(){
				$(this).find(".popover").css("display","block");
			},
			function(){
				$(this).find(".popover").css("display","none");
			}
	);

/*To top button*/

		var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
		var delay = 1000; // Задержка прокрутки
		$(document).ready(function() {
			$(window).scroll(function () { // При прокрутке попадаем в эту функцию
				/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
				if ($(this).scrollTop() > top_show) $('#top').fadeIn();
				else $('#top').fadeOut();
			});
			$('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
				/* Плавная прокрутка наверх */
				$('body, html').animate({
					scrollTop: 0
				}, delay);
			});
		});

/*add product item*/
		$(".add-item i.minus").on("click",function(){
			var count = $("#items-count").html();
			if(count > 1){
				count--;
				$("#items-count").html(count);
			}
		});
		$(".add-item i.plus").on("click",function(){
			var count = $("#items-count").html();
			count++;
			$("#items-count").html(count);
		});
		







		//popup form
		// $('.popup').magnificPopup({
		// 	type: 'inline',
		// 	fixedBgPos: true,
		// 	closeOnContentClick: true,
		// 	mainClass: 'my-mfp-slide-bottom'
		// });

		// $(".suggest-list__item a").on("click", function(){
		// 	event.preventDefault();
		// 	var txt = $(this).html().replace(/<\/?[^>]+>/g,'');
		// 	$(".search-form input[type=text]").val(txt);
		// });

		// .replace(/<\/?[^>]+>/g,'')


//AJAX email send


		// $('form').submit(function(event) {
		// 	event.preventDefault();
		//
		// 	var id = $(this).attr('id');
		// 	var data = $(this).serialize();
		//
		// 	$.ajax({
		// 		url				: 'email.php',
		// 		data			: data,
		// 		type			: 'post',
		// 		beforeSend: function(){
		// 			/*отключаем кнопку, чтобы небыло лишних нажатий*/
		// 			$('#'+ id +' input[type="submit"]').attr('disabled', 'disabled');
		// 		},
		// 		success		: function(){
		// 			/*затираем введенные данные в полях ввода, чтобы показать, что форма обработана*/
		// 			$('#'+ id +' input', '#'+ id + ' textarea').val('');
		// 			/*закрываем popup-окно*/
		// 			$.magnificPopup.close();
		// 			/*Показвем сообщение об успешном завершении*/
		// 			$(".success").fadeIn().delay(3000).fadeOut();
		// 		},
		// 		error			: function(){
		// 			/*закрываем popup-окно*/
		// 			$.magnificPopup.close();
		// 			/*Показвем сообщение об неудачном завершении*/
		// 			$(".error").fadeIn().delay(3000).fadeOut();
		// 		},
		// 		complete	: function(){
		// 			/*Включаем кнопку*/
		// 			$('#'+ id +' input[type="submit"]').removeAttr("disabled");
		// 		}
		// 	});
		// });






//==========EoF==============
	});
});