var Block = (function() {
  function Block(model) {
    this.blockModel = model;
    this.element = document.createElement("div");
    this.element.classList.add(this.blockModel.name);
    this.element.style.backgroundColor = this.blockModel.color;
    this.element.style.padding = "10px";
    this.element.setAttribute("draggable", "true");
    this.element.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/x-blockName", this.blockModel.name);
      e.dataTransfer.effectAllowed = "copy";
    }.bind(this));
  }
  return Block;
})();
