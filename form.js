
// let form = document.getElementById('registration');
let form = document.forms['form'];
form.addEventListener('click', function(event){
    event.preventDefault()
    let name = form['name'].value;
    let phone = form['phone'].value;
    let email = form['email'].value;
 let nameErr = "";
 let phoneErr ="";
 let emailErr = "";
 if( name ==""){
    nameErr ="Your name is required"
 }
 if(phone ==""){
    phoneErr ="Your phone number is required"
 }else if(phone.length != 11){
    phoneErr ="Invalid phone number "
 }
 if(email == ""){
    emailErr = "your email is required"
 }else if(email.endsWith('.com') == false){
    emailErr = "Invalid email"
 }else if(email.includes('@') == false){
    emailErr = "Invalid email"
 }
 if(nameErr == false && phoneErr == false && emailErr == false){
    document.getElementById('name').innerHTML=name
    document.getElementById('phone').innerHTML=phone 
    document.getElementById('email').innerHTML=email
 }else{
       document.getElementById('nameErr').innerHTML=nameErr;
       document.getElementById('phoneErr').innerHTML=phoneErr
       document.getElementById('emailErr').innerHTML=emailErr

 }


    // let name= form[0].value
    // let email= form[2].value
    // let phone= form[1].value
    // console.log(name, email, phone)
//    let name= document.getElementById('name').value;
//    let phone= document.getElementById('phone').value;
//    let email= document.getElementById('email').value;
//    console.log(name, phone, email)
})


// function getData(event){
//     event.preventDefault()
   
// }