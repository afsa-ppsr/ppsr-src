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

function toggle_accordion_description(e){

  var a_desc = e.parentElement.getElementsByClassName("additional-details-description")[0];

  if (e.innerHTML == "-"){
   e.innerHTML = "+";
   a_desc.style.display = "none";
  } else {
    e.innerHTML = "-";
    a_desc.style.display = "block";
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

function toggle_physical_ad(){
  var physical_ad = document.getElementById("form-element-left-physical-ad");
  var physical_ad_input = document.getElementById("physical-address");

  if ( physical_ad_input.checked == true){
    physical_ad.style.display = "block";
  } else {
    physical_ad.style.display = "none";
  }
}

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
  
  hr.style.top = (p.getBoundingClientRect().y - 16) + "px";
  
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

function show_identifier_options(){
  var org_identifier_type = document.getElementById("org-identifier-type");
  var input_yes = document.getElementById("yes");
  var input_no = document.getElementById("no");
  
  if(input_yes.checked == true){
    org_identifier_type.style.display = "block";
  }
  if (input_no.checked == true){
    org_identifier_type.style.display = "none"; 
  }
};

function show_identifier_options_ready(){
  if (document.readyState == 'complete'){
    show_identifier_options();
  } 
};

function show_supporting_text(event){
  var grandparent = event.target.parentElement.parentElement; //gets form elements div
  var supporting_text = grandparent.getElementsByClassName("supporting-text-right")[0];
  var all_supporting_text = document.getElementsByClassName("supporting-text-right");

  /*make all supporting text disappear*/
  for (var i=0; i < all_supporting_text.length; i++){
    all_supporting_text[i].style.display = "none";
  }

  /*show supporting text inside grandparent*/
  supporting_text.style.display = "block";
};

function show_supporting_text_ready(e){
  if (document.readyState == 'complete'){
    let inputs = document.querySelectorAll("input");
    let selects = document.querySelectorAll("select");
    let textareas = document.querySelectorAll("textarea");
    inputs.forEach(input => {
      input.addEventListener('focus', e => {
        show_supporting_text(e);
      })
    })
    selects.forEach(select => {
      select.addEventListener('focus', e => {
        show_supporting_text(e);
      })
    })
    textareas.forEach(textarea => {
      textarea.addEventListener('focus', e => {
        show_supporting_text(e);
      })
    })
  }
};

document.addEventListener('readystatechange', e => {
  show_supporting_text_ready(e);
});

// create spg

function add_spg(){
  // add new form
  var form = document.getElementsByTagName("form");
  var length = form.length;
  var last_form = form[length-1];
  var new_form = last_form.cloneNode(true);
  // add accordion

  var accordion_heading = document.getElementsByClassName("accordion-heading");
  var length_a = accordion_heading.length;
  var last_heading = accordion_heading[length-1];

  var new_heading = last_heading.cloneNode(true);

  last_form.parentElement.append(new_heading);

  //new_heading.append(new_form);
}

// create registrations

function set_secured_party(){
  let select = document.querySelector("select");
  var spg_details = document.getElementById("spg-details");
  var account_fav = document.getElementById("account-favourite");
  if (select.value == "Test SPG"){
    //display details
    spg_details.style.display = "block";
    //select account favourite
    account_fav.checked = true;
    account_fav.disabled = true;
  }
}

function set_collateral_class(e){
  if (document.readyState == 'complete'){
    let inputs = document.querySelectorAll("[name='collateral-class']");
    inputs.forEach(input => {
      input.addEventListener('click', e => {
        //disable selection
        for (var i = 0; i < inputs.length; i++){
          inputs[i].disabled = true;
        }
        //show div id
        var div = document.getElementById("collateral-class-read-only");
        div.style.display = "block";
        //set collateral class
        var cc = document.getElementById("cc");
        var value = e.target.value;
        cc.innerHTML = value;
      })
    })
  }
};

document.addEventListener('readystatechange', e => {
  set_collateral_class(e);
});

function change_collateral_class(){
  let inputs = document.querySelectorAll("[name='collateral-class']");
  for (var i = 0; i < inputs.length; i++){
    inputs[i].disabled = false;
    inputs[i].checked = false;
  }
  var div = document.getElementById("collateral-class-read-only");
  div.style.display = "none";
}


