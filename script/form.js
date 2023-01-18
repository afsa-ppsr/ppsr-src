

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

function toggle_accordion(e){

  // get all forms
  var form_list = document.getElementsByTagName("form");

  // which form
  var form = form_list[0];


  // get all accordions
  var accordion_list = document.getElementsByClassName("accordion");

  var accordion = e;

  var counter;
  for (var i = 0; i < accordion_list.length; i++){
    if (accordion_list[i] == accordion){
      counter = i;
      break;
    } 
  }

  form = form_list[i];

  if (accordion.innerHTML == "-"){
   accordion.innerHTML = "+";
   form.style.display = "none";
  } else {
    accordion.innerHTML = "-";
    form.style.display = "block";
  }
};

function add_spg(){

  var form = document.getElementsByTagName("form");
  var length = form.length;
  var last_form = form[length-1];
  var new_form = last_form.cloneNode(true);

  var accordion_heading = document.getElementsByClassName("accordion-heading");
  var length_a = accordion_heading.length;
  var last_heading = accordion_heading[length-1];

  var new_heading = last_heading.cloneNode(true);
  length+=1;
  new_heading.getElementsByTagName("h2")[0].innerHTML = "Secured Party " + length.toString();

  var add_spg_button = document.getElementById("add-spg");

  add_spg_button.insertAdjacentElement('beforeBegin',new_heading)

  new_heading.insertAdjacentElement('afterEnd', new_form);
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
        //show div ids
        var div = document.getElementById("collateral-class-read-only");
        div.style.display = "block";

        //set collateral class
        var cc = document.getElementById("cc");
        var value = e.target.value;
        cc.innerHTML = value;

        //show motor vehicle div only if motor vehicle is selected
        if (e.target.value == "Motor vehicle"){
          var div2 = document.getElementById("motor-vehicle-1");

          div2.style.display = "block";
        }
        if (e.target.value == "Watercraft"){
          var divs = document.getElementsByClassName("watercraft");
          for (var i = 0; i < divs.length; i++){
            divs[i].style.display = "block";
          }
        }
      })
    })
  }
};

document.addEventListener('readystatechange', e => {
  set_collateral_class(e);
});

function change_collateral_class(){
  // enable all options
  let inputs = document.querySelectorAll("[name='collateral-class']");
  for (var i = 0; i < inputs.length; i++){
    inputs[i].disabled = false;
    inputs[i].checked = false;
  }
  // hide div
  var div = document.getElementById("collateral-class-read-only");
  div.style.display = "none";

  // hide all fieldsets

  var divs = document.getElementsByClassName("motor-vehicle");
  for (var i = 0; i < divs.length; i++){
    divs[i].style.display = "none";
  }
}

function show_fieldsets(){
  var registration_duration = document.getElementById("registration-duration");
  registration_duration.style.display = "block";

  var add_details = document.getElementById("additional-details-section");
  add_details.style.display = "block";

  var goni = document.getElementById("goni-section");
  goni.style.display = "block";

  var earlier_reg = document.getElementById("earlier-registration-section");
  earlier_reg.style.display = "block";
}

function hide_fieldsets(){
  var registration_duration = document.getElementById("registration-duration");
  registration_duration.style.display = "none";

  var add_details = document.getElementById("additional-details-section");
  add_details.style.display = "none";

  var goni = document.getElementById("goni-section");
  goni.style.display = "none";

  var earlier_reg = document.getElementById("earlier-registration-section");
  earlier_reg.style.display = "none";
}

function specific_motor_vehicle(){
  var yes = document.getElementById("yes-specific-mv");
  var no = document.getElementById("no-specific-mv");

  var vins = document.getElementById("motor-vehicle-2");

  var desc = document.getElementById("motor-vehicle-3");

  var motor_4 = document.getElementById("motor-vehicle-4");

  var motor_5 = document.getElementById("motor-vehicle-5");

  let inputs = document.querySelectorAll("[name='vins']");

  if (yes.checked == true){
    //display div
    vins.style.display = "block";
    desc.style.display = "none";
    for (var i = 0; i < inputs.length; i++){
      inputs[i].checked = false;
    }
    hide_fieldsets();
  }
  if (no.checked == true){
    //display div
    vins.style.display = "none";
    desc.style.display = "block";
    motor_4.style.display = "none";
    motor_5.style.display = "none";
    show_fieldsets();
  }
};

function collateral_show_fieldsets(){
  var vin = document.getElementById("vin");
  var chassis = document.getElementById("chassis");
  var man = document.getElementById("man");

  var div_1 = document.getElementById("motor-vehicle-4");
  var div_2 = document.getElementById("motor-vehicle-5");

  if (vin.checked == true || chassis.checked == true){    
    div_1.style.display = "block"
    div_2.style.display = "none";
  }

  if (man.checked == true){
    div_1.style.display = "none"
    div_2.style.display = "block";
  }

  show_fieldsets();

}


