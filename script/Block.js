var Block = (function() {
  function Block(index, name) {
    this.blockBaseIndex = index;
    this.element = document.createElement("div");
    this.elementName = name;
  }

  Block.prototype.addElement = function(parentElement) {
    this.element.classList.add(this.elementName);
    this.element.setAttribute("draggable", "true");
    parentElement.appendChild(this.element);
    this.element.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/x-blockName", this.getAttribute("class"));
      e.dataTransfer.effectAllowed = "copy";
    });
  }

  return Block;
})();
