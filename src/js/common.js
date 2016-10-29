"use strict";
$(function(){
	$(document).ready(function(){

		$('.slider').owlCarousel({
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			autoPlay: true
		});

		//popup form
		$('.popup').magnificPopup({
			type: 'inline',
			fixedBgPos: true,
			closeOnContentClick: true,
			mainClass: 'my-mfp-slide-bottom'
		});

		$(".suggest-list__item a").on("click", function(){
			event.preventDefault();
			var txt = $(this).html().replace(/<\/?[^>]+>/g,'');
			$(".search-form input[type=text]").val(txt);
		});

		// .replace(/<\/?[^>]+>/g,'')


//AJAX email send


		$('form').submit(function(event) {
			event.preventDefault();

			var id = $(this).attr('id');
			var data = $(this).serialize();

			$.ajax({
				url				: 'email.php',
				data			: data,
				type			: 'post',
				beforeSend: function(){
					/*отключаем кнопку, чтобы небыло лишних нажатий*/
					$('#'+ id +' input[type="submit"]').attr('disabled', 'disabled');
				},
				success		: function(){
					/*затираем введенные данные в полях ввода, чтобы показать, что форма обработана*/
					$('#'+ id +' input', '#'+ id + ' textarea').val('');
					/*закрываем popup-окно*/
					$.magnificPopup.close();
					/*Показвем сообщение об успешном завершении*/
					$(".success").fadeIn().delay(3000).fadeOut();
				},
				error			: function(){
					/*закрываем popup-окно*/
					$.magnificPopup.close();
					/*Показвем сообщение об неудачном завершении*/
					$(".error").fadeIn().delay(3000).fadeOut();
				},
				complete	: function(){
					/*Включаем кнопку*/
					$('#'+ id +' input[type="submit"]').removeAttr("disabled");
				}
			});
		});






//==========EoF==============
	});
});