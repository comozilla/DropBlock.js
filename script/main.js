var IfBlock = (function() {
  function IfBlock() {
    BlockBase.call(this, "", "", "transparent");
  }
  return IfBlock;
})();

var AlertBlock = (function() {
  function AlertBlock() {
    BlockBase.call(this, "", "", "transparent");
  }
  return AlertBlock;
})();

var Blocks = (function() {
  function Blocks() {
    this.blocks = [];
    this.baseBlocks = [];
    this.blockConfigs = {
      if: ["hint", "script", "color"],
      alert: ["hint", "script", "color"]
    };
    this.parentElement = document.getElementById("workingarea");
  }
  Blocks.prototype.addBlock = function(index, name, className) {
    this.blocks.push(new Block(index, name));
    this.baseBlocks.push(eval("var " + name + "= new " + className + "()"));
    this.blocks[index].addElement(this.parentElement);
  }
  return Blocks;
})();

document.addEventListener("DOMContentLoaded", function() {
  var bs = new Blocks();
  bs.addBlock(0, "ifBlock", "IfBlock");

  bs.parentElement.addEventListener("dragover", function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  });
  bs.parentElement.addEventListener("drop", function(e) {
    var dropName = e.dataTransfer.getData("text/x-blockName");
    bs.parentElement.textContent = dropName;
  });
});
