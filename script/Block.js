var Block = (function() {
  function Block(base) {
    this.blockBase = base;
    this.element = document.createElement("div");
    this.element.classList.add(this.blockBase.name);
    this.element.style.backgroundColor = this.blockBase.color;
    this.element.style.padding = "10px";
    this.element.setAttribute("draggable", "true");
    this.element.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/x-blockName", this.blockBase.name);
      e.dataTransfer.effectAllowed = "copy";
    }.bind(this));
  }
  return Block;
})();
