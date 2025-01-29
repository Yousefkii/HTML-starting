function globaly()
 {
  let sending_buttons = document.querySelector('#sending_buttons');
   sending_buttons.setAttribute("hidden","");
  let showing = document.querySelector("#globaly_det");
   showing.removeAttribute("hidden");
}
/*let recovering = document.append(showing);*/

function continent(dropdown){
  let continent_choice = dropdown.value;
  switch (continent_choice)
  {
     case 'Euroupe' :
      console.log("he chose Europe");
        document.addEventListener('click',function () {
           
        let label_menu = document.createElement("label");
        label_menu.textContent ="choose your country";
        let new_menu = document.createElement("select");
        new_menu.className ="contenents_cho";
        let option_1 = document.createElement("option");
        option_1.value ="Poland";
        option_1.textContent ="POland";
        let option_2 = document.createElement("option");
        option_2.value = "germany";
        option_2.textContent = "germany";
        let option_3 = document.createElement("option");
        option_3.value = "france";
        option_3.textContent = "france";
        let option_4 = document.createElement("option");
        option_4.value = "country";
        option_4.textContent = "choose your counrty";
        let card = document.querySelector("#globaly_det");
        
        new_menu.appendChild(option_4);
        new_menu.appendChild(option_1);
        new_menu.appendChild(option_2);
        new_menu.appendChild(option_3);
        card.appendChild(new_menu);
        new_menu.style.marginTop ="20px";
        if (document.querySelector(".contenents_cho")) {
          console.log("Dropdown already created!");
          return;
        } 
        // new_menu.style.marginLeft ="200px";
      })
      break;
     case "America":
      break;
    case "Africa" :
      break;
    case "Asia" :
      break;
  } 
}

function domicticly()
{
  let sending_buttons = document.querySelector('#sending_buttons');
  sending_buttons.setAttribute("hidden","");
 let showing = document.querySelector("#globaly_det");
  showing.removeAttribute("hidden");
}
function package()
{

}
function documents()
{

}
function butt(){
  let pp = document.createElement("p");
  pp.className="pp";
  let cont = document.createTextNode("this is a very paragraph");
  pp.appendChild(cont);
  let divo = document.querySelector("#buttooon");
  divo.appendChild(pp);
}
