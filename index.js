/*console.log('we are in project 4');
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
let validuser = false
let validemail = false
let validphone = false
$('#success').hide()
$('#failure').hide()

// console.log(name, email, phone);

name.addEventlistener('blur', () => {
    console.log('name is blurred');
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1-10}$/
    let str = name.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid')
        validuser = true
    }
    else {
        console.log('your name is not valid');
        name.classList.add('is-invalid')
        validuser=true
    }

})
email.addEventlistener('blur', () => {
    console.log('name is blurred');
    // validate email here
    let regex = /^([\-\.0-9_a-zA-Z]+)@([_\-\.0-9a-zA-Z])\.(a-zA-Z){2-7}$/
    let str = email.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid')
        validemail = true
    }
    else {
        console.log('your email is not valid');
        email.classList.add('is-invalid')
        validemail = true
    }

})
phone.addEventlistener('blur', () => {
    console.log('name is blurred');
    //validate phone here
    let regex = /^[0-9]{10}$/
    let str = phone.value
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone no is valid');
        phone.classList.remove('is-invalid')
        validphone = true
    }
    else {
        console.log('your phone no is not valid');
        phone.classList.add('is-invalid')
        validphone = true
    }

})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('you click on submit');
    console.log(validuser, validemail, validphone);

    if (validemail && validuser && validphone) {
        let failure=document.getElementById('failure')
        console.log('phone,email and user are valid. Submitting the form');
        let success = document.getElementById('success')
        success.classList.add('show')
        // failure.classList.remove('show')
        // $('#failure').alert('close')
        $('#failure').hide()
        $('#success').show()
    }
    else {
        console.log('one of phone, email or user are not valid.hence not submitting the form.please correct the errors and try again');
        let failure=document.getElementById('failure')
        failure.classList.add('show')
        // success.classList.remove('show')
        // $('#success').alert('close')
        $('#success').hide()
        $('#failure').show()
    }

})*/

console.log("This is project 4");
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
