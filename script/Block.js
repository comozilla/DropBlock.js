var Block = (function() {
  function Block(base, parentElement) {
    this.blockBase = base;
    this.element = document.createElement("div");
    this.element.classList.add(this.blockBase.name);
    this.element.style.backgroundColor = this.blockBase.color;
    this.element.style.padding = "10px";
    this.element.setAttribute("draggable", "true");
    parentElement.appendChild(this.element);
    this.element.addEventListener("dragstart", function(e) {
      e.dataTransfer.setData("text/x-blockName", this.getAttribute("class"));
      e.dataTransfer.effectAllowed = "copy";
    });
  }
  return Block;
})();
