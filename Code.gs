function lForm() {
  const ui = SpreadsheetApp.getUi();

  const html = HtmlService.createTemplateFromFile('Index');
 
  const htmlOutput = html.evaluate()
  ui.showModalDialog(htmlOutput,"Form")
}

function createMenu(){
  const ui = SpreadsheetApp.getUi();
const menu = ui.createMenu('My Form');
menu.addItem('Show Form' , "lForm");
menu.addToUi();
}

function onOpen(){
createMenu()
}