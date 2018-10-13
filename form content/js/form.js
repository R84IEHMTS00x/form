//jpostal　呼び出し
$(window).ready( function() {
	$('#zipcode').jpostal({
		postcode : [
			'#zipcode'
		],
		address : {
			'#address'  : '%3%4%5'
		}
	});
});

// 入力判定
$('#name, #tel, #email, #zipcode, #address, #building, #passwd, #passwdRetype').on('keyup', function(){
  var form = [
   $('#name').val(),
   $('#tel').val(),
   $('#email').val(),
   $('#zipcode').val(),
   $('#address').val(),
   $('#building').val()
 ];

 // //nameだけでもname !== '' でも似たような判定
 // if () {
 //   //送信できるようにする処理
 // }

 for (var i = 0; i < form.length; i++) {
   if(!form[i]) {// form[i]で入力されている判定　→　これを否定　→　入力されていなかった
     $('#submit').attr('disabled', 'disabled').addClass('nocomplete').text('入力不足');
     return false;
   }
   console.log(form[i]);//入力内容
 }
 console.log('全て入力されています。');

//パス一致
 var passwd = $('#passwd').val(); // value
 console.log(passwd);
 var passwdRetype = $('#passwdRetype').val(); // value
 console.log(passwdRetype);

 if (passwd.length >= 8 && passwd === passwdRetype) {
   console.log('一致');
   $('#submit').removeAttr('disabled').removeClass('nocomplete').text('送信');
 }　else {
   console.log('不一致');
   $('#submit').attr('disabled', 'disabled').addClass('nocomplete').text('パスワードが一致していません。');
 }
});

// log + tab →　console.log()
