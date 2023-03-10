function validate()
{
    var fname= document.getElementById("fname");
    var phone= document.getElementById("phone");
    if (fname.value=="")
    {
        document.getElementById("error").innerHTML = "*First name required!!";
        return false;
    }
    else if(phone.value=="")
    {
        document.getElementById("phone-error").innerHTML= "*Phone Number Required!!";
        return false;
    }
    else if(phone.value.length!=10)
    {
        document.getElementById("phone-error").innerHTML= "*10 Digits Phone Number Required!!";
        return false;
    }
}
function email_validation()
{
    var email=document.form.email.value;
    let check =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email=="")
    {
        document.getElementById("email-error").innerHTML= "*Email_Id Required!!";
        return false;
    }
    else if (email.match(check))
    {
        document.form.email.focus();
        return true;
    }
    else
    {
        document.form.email.focus();
        document.getElementById("email-error").innerHTML= "*Enter Valid Email_Id";
        return false;
    }
}
function password_validation()
{
    var password1= document.getElementById("password1");
    var password2= document.getElementById("password2");
    if (password1.value=="" && password1.value.length<8)
    {
        document.getElementById("pass1error").innerHTML= "*Enter Valid Details!!"
        return false;
    }
    else if(password2.value=="" && password2.value.length<8)
    {
        document.getElementById("pass2error").innerHTML= "*Enter Valid Details!!"
        return false;
    }
    else if(password1.value != password2.value)
    {
        alert("Password not matching!!");
        return false;
    }
}
function valid()
{
    let valid_form = validate() && email_validation() && password_validation();

    if (valid_form)
    {
        return true;
    }
    else
    {
        return false;
    }
}