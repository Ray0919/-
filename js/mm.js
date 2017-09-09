var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting')
accountingCollection.load()

$("#submit").click(function() {
    $("#accountingTable").find("tr").remove();
    if ($('input[name=method]:checked').var() == "curMonth")
        var date = new Date();
    var year = date.getUTCFullYear();
    var month = date.getUTCmonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var dateString = year + "-" + month + "-01";
    var accountings = accountingCollection.find({

        date: {
            $gte: dateString
        }

    });
    for (var i = 0; i < accounting.length; i++) {
        $("#accountingTable").append(createAccountingHTMLString(accountings[i].year, accountings[i].month))
    }
});
var eatCost = 0;
var playCost = 0;
var otherCost = 0;
for (var i = 0; i < accounting.length; i++) {
    if (accountings[i].category == "吃的") {
        eatCost += accountings[i].cost / 1;
    } else if (accountings[i].category == "玩的") {
        playCost += accountings[i].cost / 1;
    } else if (accountings[i].category == "其他") {
        otherCost += accountings[i].cost / 1;
    }
}
var totalCost = eatCost + playCost + otherCost;
$("eatCost").text(eatCost)
$("eatProportion").text(Math.round((eatCost/totalCost)*100) + "%")
$("playCost").text(playCost)
$("playProportion").text(Math.round((playCost/totalCost)*100) + "%")
$("otherCost").text(otherCost)
$("otherProportion").text(Math.round((otherCost/totalCost)*100) + "%")
$("totalCost").text(totalCost)






