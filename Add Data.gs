function sendData(rowData){

  
  const currentDate = new Date()
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const dataSheet = ss.getSheetByName('DATA')
  dataSheet.appendRow([currentDate,rowData.itemCat,rowData.itemName,rowData.qty])

return true;
}


function dropDown(){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const dropO = ss.getSheetByName('Dropdown Data')
return dropO.getRange(2,1,dropO.getLastRow()-1,2).getValues();
}

// function dropDown(){
//   const ss = SpreadsheetApp.getActiveSpreadsheet()
//   const dropO = ss.getSheetByName('Dropdown Data')
//  var array = dropO.getRange(2,1,dropO.getLastRow()-1,1).getValues().flat();
// let unique = [...new Set(array)];
// Logger.log(unique)
// return
// }

