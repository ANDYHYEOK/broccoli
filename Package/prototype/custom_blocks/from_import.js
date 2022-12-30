Blockly.Blocks['from_import'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("from");
      this.appendValueInput("fi_from")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("import");
      this.appendValueInput("fi_import")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


Blockly.Python['from_import'] = function(block) {
    var value_fi_from = Blockly.Python.valueToCode(block, 'fi_from', Blockly.Python.ORDER_ATOMIC);
    var value_fi_import = Blockly.Python.valueToCode(block, 'fi_import', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'from'+value_fi_from+'import'+value_fi_import+'\n';
    return code;
}