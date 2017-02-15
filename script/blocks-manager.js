var BlocksManager = (function() {
  function BlocksManager() {
    this.blocks = {};
    this.blockModels = {};
    this.blockConfigs = {
      ifBlock: { hint: "もし～ならば…をする", script: "if (～) {…}", color: "#F00" },
      alertBlock: { hint: "～をアラートする", script: "alert(～)", color: "#0FF" }
    };
    this.element = document.getElementById("workingarea");
    this.element.addEventListener("dragover", function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    });
    this.element.addEventListener("drop", function(e) {
      var dropName = e.dataTransfer.getData("text/x-blockName");
      this.element.textContent = dropName;
    }.bind(this));
  }
  BlocksManager.prototype.init = function() {
    Object.keys(this.blockConfigs).forEach(function(key) {
      var config = this.blockConfigs[key];
      this.blockModels[key] = new BlockModel(key, config.hint, config.script, config.color);
      this.blocks[key] = new Block(this.blockModels[key]);
      this.element.appendChild(this.blocks[key].element);
    }, this);
  }
  BlocksManager.prototype.addBlocks = function(name, hint, script, color) {
    this.blockModels[name] = new BlockModel(name, hint, script, color);
    this.blocks[name] = new Block(this.blockModels[name]);
    this.element.appendChild(this.blocks[name].element);
  }
  return BlocksManager;
})();
