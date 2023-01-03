function showSubMenu(){
  var submenugroup = document.getElementsByClassName("submenu");

  var submenu = submenugroup[0];
  
  if (submenu.style.display === "none"){
    submenu.style.display = "inline-block";
  } else {
    submenu.style.display = "none";
  };
 
};



