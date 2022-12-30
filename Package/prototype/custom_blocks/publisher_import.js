Blockly.Blocks['publisher_import'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("publish");
      this.appendValueInput("publish")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("data type");
      this.appendValueInput("data_type")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("queue_size");
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(10, 5, 20), "queue_size");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  Blockly.Python['publisher_import'] = function(block) {
    var value_publish = Blockly.Python.valueToCode(block, 'publish', Blockly.Python.ORDER_ATOMIC);
    var value_data_type = Blockly.Python.valueToCode(block, 'data_type', Blockly.Python.ORDER_ATOMIC);
    var number_queue_size = block.getFieldValue('queue_size');
    // TODO: Assemble Python into code variable.
    var code = 'Publisher(\''+value_publish+'\', '+value_data_type+', queue_size='+number_queue_size+') \n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };
  