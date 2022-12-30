Blockly.Blocks['start'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("start");
      this.appendStatementInput("start")
      .setCheck(null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['start'] = function(block) {
    var statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = '#!/usr/bin/env python3 \n\n';
    return code;
  };