var textArea = document.getElementById("textArea");
          
function showCode() {
  // Generate JavaScript code and display it.
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  var code = Blockly.Python.workspaceToCode(demoWorkspace);
  var textArea = document.getElementById("textArea");
  textArea.value = code;
  }


demoWorkspace.addChangeListener(showCode);
