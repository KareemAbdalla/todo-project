
var name = prompt("What is your name?")
var gender = prompt("Male or Female?")
var age = prompt("How old are you?")

if(age <= 0)
{alert("The Age Must Be More Than Zero")}

 var confirmMsg = confirm("Do You Want To Skip The Welcoming Message?")

    if(gender == 'M' || gender == 'm' && confirmMsg == true)
    {
        alert("Hello Mr." + name);
    }
    else if(gender == 'F' || gender == 'f' && confirmMsg == true)
    {
        alert("Hello Ms." + name);
    }
    else (confirmMsg == true)
    {
        alert("Hello " + name);
    }

