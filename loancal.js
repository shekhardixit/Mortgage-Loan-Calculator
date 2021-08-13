function calcLoan(){
    var totalAmount= document.getElementById('totalAmount').value;
    var rate= document.getElementById('rate').value;
    var time= document.getElementById('time').value;
    var interest= (totalAmount*(rate*0.1))/time;
    var payments=((totalAmount/time)*interest).toFixed(0.2);
    payments=payments.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
    document.getElementById('payments').innerHTML="Monthly Payment: $"+payments;
}