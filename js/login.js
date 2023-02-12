// step 1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
   // step-2: get the email address inside with email input field
   // always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
   // console.log(email);

   // step: 3
   //3.a set id on the html element of input password
   //3.b get the element
   // 3.c get the value from password element
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   // console.log(password);
   // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIEN SIDE
   // step:4 verify email and password

   if(email=='galib@gmail.com' && password == 'Galib123'){
      // console.log('valid user');
      window.location.href = 'bank.html'
   }
   else{
      alert('detect problem');
   }

})

