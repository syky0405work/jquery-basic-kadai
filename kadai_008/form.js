$(function () {
  // class=btnをクリックしたとき
  $(".btn").on("click", function () {
    // class=text-boxのvalの値を変更する
    $(".text-box").val("クリックしました！");
  });
});
