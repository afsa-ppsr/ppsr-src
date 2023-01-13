

let account_customer_name = sessionStorage.getItem('account_customer_name')

var field = document.getElementById("account-customer-name");

if (account_customer_name != null){ 
    var field_value = field.value;

    sessionStorage.setItem('a', account_customer_name);
}