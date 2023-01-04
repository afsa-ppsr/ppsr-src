function login(){
 var username = document.getElementById("username");
 var password = document.getElementById("password");
 var declaration = document.getElementById("declaration");
 
 if (username.value == "TestAccount" && password.value == "ppsraccount" && declaration.checked == true){
   document.location.href = "https://afsa-ppsr.github.io/ppsr/home.html", true;
 };
}
