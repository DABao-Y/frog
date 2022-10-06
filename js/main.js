const URL = 'https://script.google.com/macros/s/AKfycbzpCUtnu5ynsg75x8mV4xlT4FW4nII0Hc8JW0A82P1zf-vYODiLFyZUXJN6mGH-0GsJ/exec';

$(document).ready(function() {
	init();
});

function init() {
	$('.btn-send').click(function(e){
		postData();
	});
}

function postData(){
	let params = {};
	params.method = 'write1';
	params.userName = $('input[name=userName]').val();
	params.userTel = $('input[name=userTel]').val();
	params.userEmail = $('input[name=userEmail]').val();
	// radio 
    params.economicStatus = $('input[name=economicStatus]:checked').val();
	params.pet = $('input[name=pet]:checked').val();
   
	// select
	params.userpet = $('select[name=userpet]').val();
	// textarea
	params.userNeed3 = $('textarea[name=userNeed3]').val();
	params.userNeed4 = $('textarea[name=userNeed4]').val();


	$.post(URL, params, function(data){
		if(data.result == 'sus'){

		}else{
			alert(data)
		}
	}).fail(function(data){
		alert(data)
	});
}




