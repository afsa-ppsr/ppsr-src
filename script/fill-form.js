document.addEventListener('readystatechange', e => {
    var field = document.getElementById("account-customer-name");

    if (field != null){ 
        var field_value = field.value;

        sessionStorage.setItem('account_customer_name', field.value);
    }
});