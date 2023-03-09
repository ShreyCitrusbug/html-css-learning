console.log("hii")
function validate()
{
    var fname= document.getElementById("fname");
    var email_id= document.getElementById("email");
    var phone= document.getElementById("phone");
    var password1= document.getElementById("password1");
    var password2= document.getElementById("password2");
    var email=document.form.email.value;
    let check =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fname.value=="")
    {
        document.getElementById("error").innerHTML = "*First name required!!";
        return false;
    }
    else if(email_id.value=="")
    {
        document.getElementById("emailerror").innerHTML= "*Email_Id Required!!";
        return false;
    }
    else if(phone.value=="")
    {
        document.getElementById("phoneerror").innerHTML= "*Phone Number Required!!"
        return false;
    }
    else if(phone.value.length<10)
    {
        alert("Enter 10 digit number!!");
        return false;
    }
    else if(password1.value=="")
    {
        document.getElementById("pass1error").innerHTML= "*Password Required!!"
        return false;
    }
    else if(password2.value=="")
    {
        document.getElementById("pass2error").innerHTML= "*Password Required!!"
        return false;
    }
    else if(password1.value.length<8)
    {
        alert("password must be 8 char long!");
        return false;
    }
    else if(password2.value.length<8)
    {
        alert("password must be 8 char long!");
        return false;
    }
    else if(password1.value != password2.value)
    {
        alert("Paasword not matching!!");
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
        document.getElementById("emailerror").innerHTML= "*Enter Valid Email_Id";
        return false;
    }
}