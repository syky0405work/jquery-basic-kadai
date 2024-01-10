$(function () {
  // 文字色変化ボタンを押したとき、id=targetの文字色が変化
  $("#change-color").on("click", function () {
    $("#target").css("color", "red");
  });

  // 文字内容変化ボタンを押したとき、id=targetの内容が変化
  $("#change-text").on("click", function () {
    $("#target").text("Hello");
  });

  // フェードアウトボタンを押したとき、id=targetがフェードアウトする
  $("#fade-out").on("click", function () {
    $("#target").fadeOut(3000);
  });

  // フェードインボタンを押したとき、id=targetがフェードインする
  $("#fade-in").on("click", function () {
    $("#target").fadeIn(3000);
  });
});
