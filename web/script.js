const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit",(event) =>{
    event.preventDefault();
    let transactionDescription = document.getElementById("transactionDescription").value;
    let transactionPrice = document.getElementById("transactionPrice").value;
    let transaction = {transactionDescription: transactionDescription, transactionPrice: transactionPrice };
    let transactionJson = JSON.stringify(transaction);

    fetch('http://localhost:8080/transactions', {
        method: 'Post',
        body : transactionJson

    })

    
})

fetch('http://localhost:8080/transactions').then(x => x.json()).then(console.log)