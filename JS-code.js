function hovering_nav() {
   document.querySelector("#nav_links_hover").addEventListener("mouseenter", () => {
    document.querySelectorAll(".nav-selections").forEach(el => {
      el.style.color = "black";
    });
  });
  document.querySelector("#nav_links_hover").addEventListener("mouseleave", () => {
    document.querySelectorAll(".nav-selections").forEach(el => {
      el.style.color = "white";
    });
  });
}
function globaly()
 {
  let sending_buttons = document.querySelector('#sending_buttons');
   sending_buttons.setAttribute("hidden","");
  let showing = document.querySelector("#globaly_det");
   showing.removeAttribute("hidden");
}
/*let recovering = document.append(showing);*/
let continent_choice
function continent(contenents_cho) {
 continent_choice = contenents_cho.value;

  switch (continent_choice) {
      case 'Euroupe':
          console.log("He chose Europe");

          // Check if the dropdown already exists
          if (document.querySelector(".country_dropdown_menu")) {
              console.log("Dropdown already created!");
              return;
          }

          // Create dropdown menu elements
          let label_menu = document.createElement("label");
          label_menu.textContent = "Your country";
          label_menu.classList.add("address_label");
          label_menu.style.marginTop = "30px";

          let new_menu = document.createElement("select");
          new_menu.classList.add("country_dropdown_menu", "contenents_cho");

          let option_4 = new Option("Choose your country", "country");
          let option_1 = new Option("Poland", "poland");
          let option_2 = new Option("Germany", "germany");
          let option_3 = new Option("France", "france");
          let Option_5 = new Option("netherlands", "netherlands");
          let Option_6 = new Option("Italy","Italy");

          new_menu.append(option_4, option_1, option_2, option_3,Option_6,Option_5);
          new_menu.style.marginTop = "20px";

          // Create a div to hold the dropdown and label  
          let dropdown_mwnu_div = document.createElement("div");
          dropdown_mwnu_div.classList.add("country_selection_div");
          dropdown_mwnu_div.style = "margin-top:30px";
          dropdown_mwnu_div.style.transition = "1s";
          dropdown_mwnu_div.append(label_menu, new_menu);

          // Append to the parent container
          let card = document.querySelector("#globaly_det");
          card.appendChild(dropdown_mwnu_div);

          break;

      case "North America":

        console.log("he has chosen north america");

        if (document.querySelector(".country_dropdown_menu")) {
          console.log("it has already been created");
        }    
        let america_menu_label = document.createElement("label");
        america_menu_label.textContent = "Your country";
        america_menu_label.classList.add("address_label");
        america_menu_label.style.marginTop = "30px";

        let new_menu_america = document.createElement("select");
        new_menu_america.classList.add("country_dropdown_menu", "contenents_cho");

        let option_7 = new Option("Choose your country", "country");
        let option_8 = new Option("United states", "United states");
        let option_9 = new Option("Canada", "Canada");
        let option_10 = new Option("Mexico", "Mexico");
        

        new_menu_america.append(option_7, option_8, option_9, option_10);
        new_menu_america.style.marginTop = "20px";

        // Create a div to hold the dropdown and label  
        let dropdown_mwnu_div_am = document.createElement("div");
        dropdown_mwnu_div_am.classList.add("country_selection_div");
        dropdown_mwnu_div_am.style = "margin-top:30px";
        dropdown_mwnu_div_am.style.transition = "1s";
        dropdown_mwnu_div_am.append(america_menu_label, new_menu_america);

        // Append to the parent container
        let card_america = document.querySelector("#globaly_det");
        card_america.appendChild(dropdown_mwnu_div_am);
      break;
      case "south America":
        console.log("He chose south America");

        // Check if the dropdown already exists
        if (document.querySelector(".country_dropdown_menu")) {
            console.log("Dropdown already created!");
            return;
        }

        // Create dropdown menu elements
        let sAmerica_label_menu = document.createElement("label");
        sAmerica_label_menu.textContent = "Your country";
        sAmerica_label_menu.classList.add("address_label");
        sAmerica_label_menu.style.marginTop = "30px";

        let sAmerica_new_menu = document.createElement("select");
        sAmerica_new_menu.classList.add("country_dropdown_menu", "contenents_cho");

        let option_11 = new Option("Choose your country", "country");
        let option_12 = new Option("Brazil", "Brazil");
        let option_13 = new Option("venezuela", "venezuela");
        let option_14 = new Option("chile", "chile");
        let Option_15 = new Option("salvador", "salvador");
        let Option_16 = new Option("colombia","colombia");

        sAmerica_new_menu.append(option_11, option_12, option_13, option_14,Option_16,Option_15);
        sAmerica_new_menu.style.marginTop = "20px";

        // Create a div to hold the dropdown and label  
        let dropdown_mwnu_div_sAmerica = document.createElement("div");
        dropdown_mwnu_div_sAmerica.classList.add("country_selection_div");
        dropdown_mwnu_div_sAmerica.style = "margin-top:30px";
        dropdown_mwnu_div_sAmerica.style.transition = "1s";
        dropdown_mwnu_div_sAmerica.append(sAmerica_label_menu, sAmerica_new_menu);

        // Append to the parent container
        let card_sAmerica = document.querySelector("#globaly_det");
        card_sAmerica.appendChild(dropdown_mwnu_div_sAmerica);

        break;      
      break;
      case "Africa":
      console.log("he has chosen Africa");
      
      if (document.getElementById(".country_dropdown_menu")) {
        console.log("the dropdown menu has been created before");
      return;
      }
       // Create dropdown menu elements
       let Africa_label_menu = document.createElement("label");
       Africa_label_menu.textContent = "Your country";
       Africa_label_menu.classList.add("address_label");
       Africa_label_menu.style.marginTop = "30px";

       let Africa_new_menu = document.createElement("select");
       Africa_new_menu.classList.add("country_dropdown_menu", "contenents_cho");

       let option_17 = new Option("Choose your country", "country");
       let option_18 = new Option("Egypt", "Egypt");
       let option_19 = new Option("ALgeria", "ALgeria");
       let option_20 = new Option("tunsia", "tunsia");
       let Option_21 = new Option("Lybia", "Lybia");
       let Option_22 = new Option("Sudan","Sudan");

       Africa_new_menu.append(option_17, option_18, option_19, option_20,Option_21,Option_22);
       Africa_new_menu.style.marginTop = "20px";

       // Create a div to hold the dropdown and label  
       let dropdown_mwnu_div_Africa = document.createElement("div");
       dropdown_mwnu_div_Africa.classList.add("country_selection_div");
       dropdown_mwnu_div_Africa.style = "margin-top:30px";
       dropdown_mwnu_div_Africa.style.transition = "1s";
       dropdown_mwnu_div_Africa.append(Africa_label_menu, Africa_new_menu);

       // Append to the parent container
       let Africa_card = document.querySelector("#globaly_det");
       Africa_card.appendChild(dropdown_mwnu_div_Africa);
       
      break;
      case "Asia":
        console.log("He chose Asia");

          // Check if the dropdown already exists
          if (document.querySelector(".country_dropdown_menu")) {
              console.log("Dropdown already created!");
              return;
          }

          // Create dropdown menu elements
          let Asia_label_menu = document.createElement("label");
          Asia_label_menu.textContent = "Your country";
          Asia_label_menu.classList.add("address_label");
          Asia_label_menu.style.marginTop = "30px";

          let Asia_new_menu = document.createElement("select");
          Asia_new_menu.classList.add("country_dropdown_menu", "contenents_cho");

          let option_23 = new Option("Choose your country", "country");
          let option_24 = new Option("China", "China");
          let option_25 = new Option("Japan", "Japan");
          let option_26 = new Option("Malysia", "Malysia");
          let Option_27 = new Option("Thiland", "Thiland");
          let Option_28 = new Option("South Korea","South Korea");

          Asia_new_menu.append(option_23, option_24, option_25, option_26,Option_27,Option_28);
          Asia_new_menu.style.marginTop = "20px";

          // Create a div to hold the dropdown and label  
          let Asia_dropdown_mwnu_div = document.createElement("div");
          Asia_dropdown_mwnu_div.classList.add("country_selection_div");
          Asia_dropdown_mwnu_div.style = "margin-top:30px";
          Asia_dropdown_mwnu_div.style.transition = "1s";
          Asia_dropdown_mwnu_div.append(Asia_label_menu, Asia_new_menu);

          // Append to the parent container
          let Asia_card = document.querySelector("#globaly_det");
          Asia_card.appendChild(Asia_dropdown_mwnu_div);
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
if (document.querySelector(".docs_numbers" )) {
  console.log("Dropdown already created!");
  return;
}
  //removing the buttons once the useer chossses
    document.querySelector("#box").style.opacity="0";
    document.querySelector("#docu").style.opacity="0";

    let label_docu = document.createElement("label");
    label_docu.textContent= "number of documents";
    label_docu.classList.add("address_label");

    let num_docs = document.createElement("input");
    num_docs.setAttribute("type","number");
    num_docs.classList.add( "docs_numbers","contenents_cho");
    num_docs.style.width ="105px";
    num_docs.style.backgroundColor ="lightblue";
    num_docs.setAttribute("placeHolder",'number of docs');

    //appending in the DOM
    document.querySelector("#buttooon").appendChild(label_docu);
    document.querySelector("#buttooon").appendChild(num_docs);

    document.addEventListener('change', ()=>{
      switch (num_docs) {
        case 'write':
          new_menu.focus();
          break;
      
        default:
          break;
      }
    })
}
function biggest_crank(){
  document.querySelector("#news_pic").style.backgroundImage = "url('https://d3f3h35mrzf979.cloudfront.net/Pictures/480xany/3/2/1/81321_wettering.JPG')";
  let cran_position = document.querySelector("#cran");
  cran_position.style.marginLeft ="120px";
  cran_position.style.fontWeight ="bolder";
  cran_position.style.transitionDuration ="500ms";
  document.querySelector("#pack").style.color ="gray";
  document.querySelector("#air").style.color ="gray";

  document.querySelector("#cran").addEventListener("mouseleave", ()=>{
    cran_position.style.marginLeft ="85px"
    cran_position.style.fontWeight ="normal";
    document.querySelector("#pack").style.color ="black";
  document.querySelector("#air").style.color ="black";
  });
}

function packages_trans(){
  let crank = document.querySelector("#news_pic").style.backgroundImage = "URL('https://effectshippingllc.com/wp-content/uploads/2021/12/sdm1.jpg')";
  let cran_position = document.querySelector("#pack");
  cran_position.style.marginLeft ="120px";
  cran_position.style.fontWeight ="bolder";
  cran_position.style.transitionDuration ="500ms";
  document.querySelector("#cran").style.color ="gray";
  document.querySelector("#air").style.color ="gray";

  document.querySelector("#pack").addEventListener("mouseleave", ()=>{
    cran_position.style.marginLeft ="85px"
    cran_position.style.fontWeight ="normal";
    document.querySelector("#cran").style.color ="black";
  document.querySelector("#air").style.color ="black";
  });
}
function airplanes(){
  let crank = document.querySelector("#news_pic").style.backgroundImage = "URL('https://img.etimg.com/thumb/width-1600,height-900,imgsize-143180,resizemode-75,msid-113334097/news/international/us/passengers-board-airplanes-from-left-side-heres-why.jpg')";
  let cran_position = document.querySelector("#air");
  cran_position.style.marginLeft ="120px";
  cran_position.style.fontWeight ="bolder";
  cran_position.style.transitionDuration ="500ms";
  document.querySelector("#pack").style.color ="gray";
  document.querySelector("#cran").style.color ="gray";

  document.querySelector("#air").addEventListener("mouseleave", ()=>{
    cran_position.style.marginLeft ="85px"
    cran_position.style.fontWeight ="normal";
    document.querySelector("#pack").style.color ="black";
  document.querySelector("#cran").style.color ="black";
  });
function scrol (){
  window.scrollTo({
    left :0,
   top :5000,
   behavior:"smooth",

  });
 
};
window.onscroll = function(){
  if (scrollY >= 800) {
    document.querySelector("#scroll_up").style.display ="block";
  }
  else{
    document.querySelector("#scroll_up").style.display ="none";
  }
}
function go_uo(){
  window.scrollTo({
    top :0,
    behavior :"smooth",
  });
};
function track ()
{
  let TRN = document.querySelector("#tracking_number_input").value;
  
  if (TRN === "") 
  {
    alert("you have to write the number first");
    return;
  }
  else if(TRN.length < 5)
  {
    alert("the tracking number isn't right");
    return;
  }
  TRN = Number(TRN);
  let orders_numbers = [11000,12000,13000,14000,15000];
  let checks = orders_numbers.some((e) =>{
       return e ===TRN;
  });
  if (checks === true) {
    alert("your order is on his way please be patient");
  }
  else{
    alert("there is no such order number, please try again");
  }
};
function butt(){
  let pp = document.createElement("p");
  pp.className="pp";
  let cont = document.createTextNode("this is a paragraph");
  pp.appendChild(cont);
  let divo = document.querySelector("#buttooon");
  divo.appendChild(pp);
}
