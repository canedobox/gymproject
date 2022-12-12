// When the document is ready.
$(document).ready(function () {
  // store reference of element "submit-btn"
  const submitBtn = document.getElementById('submit-btn');

  //declare validation function on event
  const validate = (e) => {
    // prevent default behavior.
    e.preventDefault();

    // store references of label input
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const validationMessage = document.getElementById('validation-message');

    // email regular expression. (valid email example: a@a.aa)
    const emailRegex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // check if name is not empty
    if (name.value === '') {
      validationMessage.innerHTML = 'Please enter your name';
      validationMessage.style.display = 'block';
      name.focus();
      // console fail message
      console.log('#name validation failed: ' + validationMessage.innerText);
      return;
    }
    //check if name is not shorter then 2 characters
    else if (name.value.length < 2) {
      validationMessage.innerHTML = 'Name should be at least 2 characters';
      validationMessage.style.display = 'block';
      name.focus();
      // console fail message
      console.log('#name validation failed: ' + validationMessage.innerText);
      return;
    }

    //check if email is not empty
    if (email.value === '') {
      validationMessage.innerHTML = 'Please enter your email';
      validationMessage.style.display = 'block';
      email.focus();
      // console fail message
      console.log('#email validation failed: ' + validationMessage.innerText);
      return;
    }
    //check if email is valid
    else if (emailRegex.test(email.value) == false) {
      validationMessage.innerHTML = 'Email is not valid';
      validationMessage.style.display = 'block';
      email.focus();
      // console fail message
      console.log('#email validation failed: ' + validationMessage.innerText);
      return;
    }

    //check if option is selected
    if (subject.value === '') {
      validationMessage.innerHTML = 'Please select an option';
      validationMessage.style.display = 'block';
      subject.focus();
      // console fail message
      console.log('#select validation failed: ' + validationMessage.innerText);
      return;
    }

    // check if the message is not empty
    if (message.value === '') {
      validationMessage.innerHTML = 'Please enter your message';
      validationMessage.style.display = 'block';
      message.focus();
      // console fail message
      console.log('#message validation failed: ' + validationMessage.innerText);
      return;
    }
    // check if message is not longer then 500 characters
    else if (message.value.length > 500) {
      validationMessage.innerHTML =
        'Message must must have maximum 500 characters';
      validationMessage.style.display = 'block';
      message.focus();
      // console fail message
      console.log('#message validation failed: ' + validationMessage.innerText);
      return;
    }

    // console success message
    console.log('Message sent successfully');

    // display success alert message
    alert(
      'Your message has been sent!\n\nName: ' +
        name.value +
        '\nEmail: ' +
        email.value +
        '\nSubject: ' +
        subject.value +
        '\nMessage: ' +
        message.value
    );

    // reset form and validation message
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
    validationMessage.innerHTML = '';
    validationMessage.style.display = 'none';
  };

  // add click event listener to #submit-btn
  submitBtn.addEventListener('click', validate);
});
