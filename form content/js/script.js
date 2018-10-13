
// ボタンの状態に応じて、テキストを切り替え
// hoverのみ。
// TODO active、focusにも対応させる
$('#btn1').on('mouseover', function(){
  $(this).text('hover');
}).on('mouseout', function(){
  $(this).text('基本');
});


//
// フォーム
//

// パスワード一致判定
$('#passwdRetype').on('keyup', function(){
  var passwd = $('#passwd').val(); // value
  console.log(passwd);
  var passwdRetype = $('#passwdRetype').val(); // value
  console.log(passwdRetype);

  if (passwd.length >= 8 && passwd === passwdRetype) {
    console.log('一致');
    $('#submit').removeAttr('disabled').removeClass('disabled').val('送信');
  } else {
    console.log('不一致');
    $('#submit').attr('disabled', 'disabled').addClass('disabled').val('入力不足');
  }
});
