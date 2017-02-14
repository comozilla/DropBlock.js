var BlocksManager = (function() {
  function BlocksManager() {
    this.blocks = [];
    this.blockBases = {};
    this.blockConfigs = {
      ifBlock: ["もし～ならば…をする", "if (～) {…}", "#F00"],
      alertBlock: ["～をアラートする", "alert(～)", "#0FF"]
    };
    this.element = document.getElementById("workingarea");
  }
  BlocksManager.prototype.init = function() {
    Object.keys(this.blockConfigs).forEach(function (key) {
      var config = this.blockConfigs[key];
      this.blockBases[key] = new BlockBase(key, config[0], config[1], config[2]);
      this.blocks.push(new Block(this.blockBases[key], this.element));
    }, this);
  }
  BlocksManager.prototype.addBlocks = function(name, hint, script, color) {
    this.blockBases[name] = new BlockBase(name, hint, script, color);
    this.blocks.push(new Block(this.blockBases[name], this.element));
  }
  return BlocksManager;
})();
