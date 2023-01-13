document.addEventListener('load', e=> {
    var field = document.getElementById("account-customer-name");
    debugger;
    if (field.value == ''){
        field.value = sessionStorage.getItem('account_customer_name');
    }
});

document.addEventListener('change', e => {
    var field = document.getElementById("account-customer-name");

    if (field != null){ 
        var field_value = field.value;

        sessionStorage.setItem('account_customer_name', field_value);
    }
});



