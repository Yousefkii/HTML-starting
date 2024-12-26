
//logging in function
console.log(userName);
function check(){
    let userName = document.getElementById('userName').value;
let password = document.querySelector('#pass').value;
if (userName === 'youssef' && password === '12345') {
    alert('all good dude');
    let userName = document.querySelector('#userName').value ="";
    let password = document.querySelector('#pass').value = "";
   
    
    let
    return;
}
else if (userName === 'youssef hegazy' && password !== '12345') {
    alert('sorry but only the password is wrong');
    document.querySelector('#pass').value = "";
}
else{
    alert('sorry but only the username is wrong');
    document.querySelector('#userName').value ="";
document.querySelector('#pass').value = "";
let divo = document.createElement("div");
divo.className ="product"
document.body.appendChild(divo);
for (let i = 0; i < 100; i++) {
    let H3 = document.createElement("h3");
    let paragraph = document.createElement ("p");
    let p_content = document.createTextNode("product for osama ElZero");
    let h3_content = document.createTextNode("H3 for osama Elzero");
    H3.appendChild(h3_content);
    paragraph.appendChild(p_content);
    divo.appendChild(H3);
    divo.appendChild(paragraph);
}
}
}