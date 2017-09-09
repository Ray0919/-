var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountingCollection = db.collection('accounting')

$("#submit").click(function() {
    var date = $("#date").val()
    var category = $("#category").val()
    var item = $("#item").val()
    var cost = $("#cost").val()

    var NewAccounting = {
        date: date,
        category: category,
        item: item,
        cost: cost
    }
    accountingCollection.insert(NewAccounting);
    accountingCollection.save()

    var date = $("#date").val("")
    var category = $("#category").val("")
    var item = $("#item").val("")
    var cost = $("#cost").val("")
    alert("儲存成功")


})