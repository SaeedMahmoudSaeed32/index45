function start()
{
    var x=prompt("Welcome!!!\nWhat is your age ?? to regigst now");

        if(x>=18)
        {
            return true;
        }
        if (x==0||x==null)
        {
            alert("Sorry,you cannot regist without your age");
            document.body.style.display='none';
        }
        else
        {
        alert("Sorry , you cannot regigst now ,your age must be 18 or  greater than 18");
        document.body.style.display='none';
       }
}
start();

function validation()
{
    var fname=document.getElementById("fname"),
        lname=document.getElementById("lname"),
        number=document.getElementById("number"),
        adresse=document.getElementById("adresse"),
        select=document.getElementById("select"),
        email=document.getElementById("email"),
        pass=document.getElementById("pass");

    if(fname.value ==0||fname.value==null)
    {
        alert("please,enter your first name");
        return false;
    }

    if(lname.value==0||lname.value==null)
    {
        alert("please,enter your last name");
        return false;
    }

    if(number.value==0||number.value==null)
    {
        alert("please,enter your phone number");
        return false;
    }

    if(isNaN(number.value))
    {
        alert("This is invalid phone number");
        return false;
    }

    if((number.value.legnth)>11||(number.value.legnth)<11)
    {
        alert("please,enter valid phone number");
        return false;
    }

    if(adresse.value==0||adresse.value==null)
    {
        alert("please,enter your adresse");
        return false;
    }

    if(select.value=="")
    {
        alert("please, choose your gender");
        return false;
    }

    if(email.value==0||email.value==null)
    {
        alert("please, enter your email");
        return false;
    }

    if(pass.value==0||pass.value==null)
    {
        alert("please, enter your pssoword");
        return false;
    }
    else
    {
     return true;
    }
}
