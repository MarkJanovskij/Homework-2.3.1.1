//1. Сначала задайте в переменные данные пользователя, стоимость посылки, смс с кодом, код в базе дынных и состояние почтамата.
let userName = "Mark Janovskij"
let userBalance = 500;
let costPackage = 100;
let idPackage = "1432HGF"
let numberInbox = 4
let smsCode = "A001DFX0"
let databaseCode = "A001DFX0"
let lockerState = "available"
//2. Затем проведите проверку: если код посылки в базе данных, соответствует введенному коду из смс, то выдайте посылку, списав средства с баланса пользователя.
if (smsCode===databaseCode){
    userBalance -=costPackage;
    console.log("Package delivered")
    console.log(`Remaining balance: ${userBalance}`);
    console.log("Dear Client, your package is delivered. Thank you for your business. Your remaining balance is $" + userBalance);
    // Send SMS message to customer
} else {
    console.log("Invalid SMS code");
}
//3. В конце выведите соответствующее сообщение в консоль.
