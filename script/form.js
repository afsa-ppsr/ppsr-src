function toggle_accordion(){

  var form_list = document.getElementsByTagName("form");

  var form = form_list[0];

  var accordion_list = document.getElementsByClassName("accordion");

  var accordion = accordion_list[0];

  if (accordion.innerHTML == "-"){
   accordion.innerHTML = "+";
   form.style.display = "none";
  } else {
    accordion.innerHTML = "-";
    form.style.display = "block";
  }
};

function select_secured_party(){
  var individual = document.getElementById("individual");
  var org = document.getElementById("organisation");

  var secured_party_name = document.getElementById("individual-secured-party-name");

  debugger;

  if (individual.checked == true){
    secured_party_name.style.display = '';
  } 
  if(organisation.checked == true) {
    secured_party_name.style.display = "none";
  }

  //alert(src.value);
};

function ready() {
  if (document.readyState == 'complete'){
    select_secured_party();
  } 
};

ready();
