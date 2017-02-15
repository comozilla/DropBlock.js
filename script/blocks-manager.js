var BlocksManager = (function() {
  function BlocksManager() {
    this.blocks = {};
    this.blockBases = {};
    this.blockConfigs = {
      ifBlock: {hint: "もし～ならば…をする", script: "if (～) {…}", color: "#F00"},
      alertBlock: {hint: "～をアラートする", script: "alert(～)", color: "#0FF"}
    };
    this.element = document.getElementById("workingarea");
  }
  BlocksManager.prototype.init = function() {
    Object.keys(this.blockConfigs).forEach(function (key) {
      var config = this.blockConfigs[key];
      this.blockBases[key] = new BlockBase(key, config.hint, config.script, config.color);
      this.blocks[key] = (new Block(this.blockBases[key]));
      this.element.appendChild(this.blocks[key].element);
    }, this);
  }
  BlocksManager.prototype.addBlocks = function(name, hint, script, color) {
    this.blockBases[name] = new BlockBase(name, hint, script, color);
    this.blocks[name] = (new Block(this.blockBases[name]));
    this.element.appendChild(this.blocks[name].element);
  }
  return BlocksManager;
})();
