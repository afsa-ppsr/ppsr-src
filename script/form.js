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

  var verify = document.getElementById("verify-arfn-arsn");

  var v_info = document.getElementById("verify-info");

  if (individual.checked == true){
    secured_party_name.style.display = 'block';
    arfn.style.display = 'none';
    verify.style.display = 'none';
    v_info.style.display = 'none';
  } 
  if(org.checked == true) {
    secured_party_name.style.display = "none";
    arfn.style.display = 'block';
  }
};

function select_arfn(){
  var yes_arfn = document.getElementById("yes-arfn");
  var no_arfn = document.getElementById("no-arfn");

  var org = document.getElementById("organisation");
  var verify = document.getElementById("verify-arfn-arsn");
  var v_info = document.getElementById("verify-info");

  if (org.checked == true){
    if (yes_arfn.checked == true){
      verify.style.display = "block";
    }
    if (no_arfn.checked == true){
      verify.style.display = "none";
      v_info.style.display = "none";
    }
  } 
};

function show_verify_info(){
  var v_info = document.getElementById("verify-info");
  v_info.style.display = "block";
  return false;
};

function toggle_b2g(e){
  var b2g_settings = document.getElementById("b2g-settings");

  if (e.innerHTML == "+"){
    e.innerHTML = "-";
    b2g_settings.style.display = "flex";
  } else {
    e.innerHTML = "+";
    b2g_settings.style.display = "none";
  }
};

function toggle_goni(e){
  var goni_settings = document.getElementById("goni-settings");

  if (e.innerHTML == "+"){
    e.innerHTML = "-";
    goni_settings.style.display = "flex";
  } else {
    e.innerHTML = "+";
    goni_settings.style.display = "none";
  }
};

function ready() {
  if (document.readyState == 'complete'){
    select_secured_party();
  } 
};

function select_arfn_ready(){
  if (document.readyState == 'complete'){
    select_arfn();
  } 
};

function set_hr_position(){
  var hr = document.getElementsByClassName("hr-progress-indicator")[0];
  
  var pi_bundle = document.getElementsByClassName("pi-bundle")[0];
  
  var pi = document.getElementsByClassName("progress-indicator")[0];
  
  var p = pi_bundle.getElementsByTagName("p")[0];
  
  hr.style.top = (p.getBoundingClientRect().y - 3) + "px";
  
  hr.style.width = pi.clientWidth + "px";
};

function set_hr_position_ready(){
    window.addEventListener('load', function(event){
    set_hr_position();
  });
  
  window.addEventListener('resize', function(event){
    set_hr_position();
  });
};

set_hr_position_ready(); 

