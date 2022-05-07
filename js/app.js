
let name = prompt("What is your name?")
let gender = prompt("Male or Female?")
let age = prompt("How old are you?")

// yes or no questions 
let job = prompt("Do You Have A Job?")
let mStatus = prompt("Are You Married?")
let usage = prompt("Are You Using Your Phone To Enter This Website?")



if(job == ""){
    job = "invalid"
 //   console.log("job is " + job)
}

if(mStatus == ""){
    mStatus = "invalid"
 //   console.log("mstatus is " + mstatus)
}


if(usage == ""){
    usage = "invalid"
 //   console.log("usage is" + usage)
}

const answers = [name, gender, age, job, mStatus, usage];
console.log(answers)


if(minAge <= 0)
{alert("The Age Must Be More Than Zero")}


 var confirmMsg = confirm("Click On Cancel To Skip The Welcoming Message?")

    if(gender == 'M' || gender == 'm' && confirmMsg == true)
    {
        alert("Hello Mr." + name);
    }
    else if(gender == 'F' || gender == 'f' && confirmMsg == true)
    {
        alert("Hello Ms." + name);
    }
    else if (gender != 'm' || gender != 'M' || gender != 'F' || gender != 'f' && confirmMsg == true)
    {
        alert("Hello " + name);
    }

