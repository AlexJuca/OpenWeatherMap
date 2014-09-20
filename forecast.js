$(document).ready(function()
{
	var obj_de_insercao = '#dados'
	function actualizar(cidade)
	{
		$(obj_de_insercao).empty();
		// Funcao responsavel para bsucar dos dados 
		$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q="+cidade+"&units=metric", function( dados ) {
		var items = [];

		$.each(dados, function( key, val ) {});



		var temp = dados.main.temp_min;
		var temp_max = dados.main.temp_max;
		var cidade = dados.name;
		var vento = dados.wind.speed;
		var chuva = dados.rain;

		// Insercao de dados no DOM ou browser
		$(obj_de_insercao).append("<h1> Cidade:" +cidade+"</h1>");
		$(obj_de_insercao).append("<p> Temperatura actual: " +temp+ "</p>");

		$(obj_de_insercao).append("<p> Temperatura maxima para hoje: " +temp_max+ "</p>");

		$(obj_de_insercao).append("<p> Vento: " +vento+ ", mps</p>");

		$(obj_de_insercao).append("<p> Chuva: " +chuva+ "</p>");
		// Fim Insercao de dados no DOM ou browser

		});

	}// Fim da funcao actualizar

	// Evento click
	$('#refresh').click(function(e)
	{
		
		var cidade = $('#input').val();
		if(cidade != ""){
			// Actualiza a cidade
			actualizar(cidade);
		}
		else{
			alert('Por favor, Colouca uma cidade!');
		}
		
	});

	

});
