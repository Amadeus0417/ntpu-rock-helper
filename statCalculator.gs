class StatCalculator{
  // 開啟當前學期的紀錄表
  static createStatSheet(){
    var sheet = this.createSheet();
    var stats = this.calcStats(Properties.RESERVATION_LOG_SHEET.getDataRange().getValues().filter(Common.isBandReservation));
    if(stats[0] == null) return sheet.getId();
    sheet.getSheetByName('時數統計')
      .getRange(2, 1, stats.length, stats[0].length)
      .setVerticalAlignment('center')
      .setHorizontalAlignment('middle')
      .setValues(stats);
    sheet.getSheetByName('時數統計')
      .getDataRange()
      .setVerticalAlignment('middle')
      .setHorizontalAlignment('center');
    return sheet.getId();
  }
  static createSheet(){
    var sheet = SpreadsheetApp.create(`${Properties.SEMESTER_NAME}_練團時數統計表`);
    sheet.insertSheet()
      .setName('時數統計')
      .appendRow(['姓名', '練團時數', '費用', '每小時收費：', 20]);
    sheet.deleteSheet(sheet.getSheetByName('工作表1'));
    Properties.STAT_SHEET_URL = sheet.getUrl();
    return sheet;
  }
  static calcStats(reservationData){
    var memberDict = {};
    for(var data of reservationData){
      var mem = data[5].split('\n');
      for(var m of mem){
        if(m == '') continue;
        if(memberDict[m] == undefined){
          memberDict[m] = data[4];
        } else {
          memberDict[m] += data[4];
        }
      }
    }
    return Common.convertListOfDictToRows(memberDict);
  }
}
