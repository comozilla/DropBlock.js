document.addEventListener("DOMContentLoaded", function() {
  var bs = new BlocksManager();
  bs.init();
  bs.addBlocks("testBlock", "テスト関数", "function test() {}", "#F0F");
});
