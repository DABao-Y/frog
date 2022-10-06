const URL = 'https://script.google.com/macros/s/AKfycbxLouzwVawMyyXVpfqY1-tn9kaynTHE7u1OnJHCQ6hUCF7_Ch3RVpT9NEKOt2-Z2EVq/exec';

$(document).ready(function() {
	loadData();
});

function loadData(){
	let params = {};
	params.method = 'read1';

	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
			for(let i=0;i<userData.length;i++){
				let content = oneRow(i+1, userData[i]);
				$('tbody').append(content);
			}
		}else{

		}
	})
	$.post(URL, params, function(data){
		if(data.result == 'sus'){
			let userData = data.data;
			for(let i=0;i<userData.length;i++){
				let content = twoRow(i+1, userData[i]);
				$('.text').append(content);
			}
		}else{

		}
	}).fail(function(data){
	});
}


function oneRow(n, man){
	let html = `
			<tr>
				<th scope="col">姓名</th>
				<td>${man.userName}</td>
            </tr>
            <tr>
				<th scope="col">想要領養的毛孩</th>
				<td>${man.userpet}</td>
            </tr>
            <tr>
				<th scope="col">有無其他寵物</th>
				<td>${man.pet}</td>
            </tr>
            <tr>
				<th scope="col">經濟狀況</th>
				<td>${man.economicStatus}</td>
            </tr>
            <tr>
				<th scope="col">聯絡電話</th>
				<td>${man.userTel}</td>
            </tr>
            <tr>
				<th scope="col">Email</th>
				<td>${man.userEmail}</td>
            </tr>
			`;
           
	return html;
}
function twoRow(n, man){

	let html=
			`<p>飼養的配套措施和方法</p>
			<div class="mb-3 flex-fill">
				<div class="form2">${man.userNeed3}</div>
			</div>
			<p>其他想和我們說的話</p>
			<div class="mb-3 flex-fill">
				<div class="form2" placeholder="無">${man.userNeed4}</div>
			</div>`;
           
	return html;
}

