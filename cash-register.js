function checkCashRegister(price, cash, cid) {
  var change = [];
  let result ={};
  let bal = cid.reduce((accu, curr) => accu + curr[1], 0);
  var changeT = cash - price;
  let monArr = cid.map(x => x[0]).reverse();
  let balArr = cid.map(x => x[1]).reverse();
  let monAnum = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  if (bal < changeT) {
    function checkCashRegister(price, cash, cid) {
      var change = [];
      let result ={};
      let bal = cid.reduce((accu, curr) => accu + curr[1], 0);
      var changeT = cash - price;
      let monArr = cid.map(x => x[0]).reverse();
      let balArr = cid.map(x => x[1]).reverse();
      let monAnum = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
      if (bal < changeT) {
          result.status = "INSUFFICIENT_FUNDS";
        }
      else if (bal == changeT) {
          result.status = "CLOSED";
          change = cid.slice();
      }
      else {
          for (let i = 0; i<cid.length; i++) {
        let np = Math.min(Math.floor(changeT/monAnum[i])* monAnum[i], balArr[i])
        if (np != 0) {
        change.push([monArr[i], np]);
        }
        changeT -= np;
        changeT = Math.round(changeT*100)/100;
    
      } 
    
          if (Math.round(change.reduce((accu, curr) => accu + curr[1], 0)*100)/100 == cash - price) {
            result.status = "OPEN";
          }
          else {result.status = "INSUFFICIENT_FUNDS";
                change = [];
                }
      }
     result.change = change;
     return result;
    }
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);