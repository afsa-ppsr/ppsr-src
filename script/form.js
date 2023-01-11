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
  var arfn = document.getElementById("organisation-arfn-arsn");

  if (individual.checked == true){
    secured_party_name.style.display = 'block';
    arfn.style.display = 'none';
  } 
  if(organisation.checked == true) {
    secured_party_name.style.display = "none";
    arfn.style.display = 'block';
  }

  //alert(src.value);
};

function ready() {
  if (document.readyState == 'complete'){
    select_secured_party();
  } 
};

ready();
