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
  if(org.checked == true) {
    secured_party_name.style.display = "none";
    arfn.style.display = 'block';
  }
  //alert(src.value);
};

function select_arfn(){
  var yes_arfn = document.getElementById("yes-arfn");
  var no_arfn = document.getElementById("no-arfn");

  var org = document.getElementById("organisation");
  var verify = document.getElementById("verify-arfn-arsn");

  if (org.checked == true){
    if (yes_arfn.checked == true){
      verify.style.display = "block";
    }
    if (no_arfn.checked == true){
      verify.style.display = "none";
    }
  }
  
}

function ready() {
  if (document.readyState == 'complete'){
    select_secured_party();
  } 
};

ready();
