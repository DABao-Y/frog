let sysModal, modal1;

function init(){
	sysModal = new bootstrap.Modal('#sysModal');
	modal1 = new bootstrap.Modal('#modal1');
	$('.btn-send').click(function(e){
		let mType = ($(this).attr('mType'))?$(this).attr('mType'):0;
		let mBgc = ($(this).attr('mBgc'))?parseInt($(this).attr('mBgc')):'none';
		let mTitle = ($(this).attr('mTitle'))?$(this).attr('mTitle'):'none';
		let isCenter = ($(this).attr('centered')=='')?1:0;
		if($(this).attr('static')==''){
			modal1 = new bootstrap.Modal('#modal1', {backdrop:'static'});
		}else{
			modal1 = new bootstrap.Modal('#modal1');
		}
		launchModal1(mType, mBgc, mTitle, isCenter);
	})
}
function launchModal1(mType, mBgc, mTitle, isCenter){
	$('#modal1 .modal-dialog').removeClass('modal-dialog-centered');
	$('#modal1 .modal-header .text').html(mTitle);
	if(isCenter==1){
		$('#modal1 .modal-dialog').addClass('modal-dialog-centered');
	}
	modal1.show();
}