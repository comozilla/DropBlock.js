document.addEventListener("DOMContentLoaded", function() {
  var bs = new BlocksManager();
  bs.init();
  bs.addBlocks("testBlock", "テスト関数", "function test() {}", "#F0F");

  bs.element.addEventListener("dragover", function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });
  bs.element.addEventListener("drop", function(e) {
    var dropName = e.dataTransfer.getData("text/x-blockName");
    bs.element.textContent = dropName;
  });
});
