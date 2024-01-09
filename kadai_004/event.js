// HTMLドキュメントの読み取り後にログを出す
$(function () {
  console.log("loadイベントが発生しました");
});

// 画面をスクロールしたときにログを出す
$(function () {
  $(window).on("scroll", () => {
    console.log("scrollイベントが発生しました");
  });
});
