const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function passLimit()
{
    let limit = document.getElementById("input").value;
    display(limit);
}
function display(a)
{
    if(a==="")
    {
        let limit=15;
        randomNumber(limit);
    }
    else
    {
        let limit=a;
        randomNumber(limit);
    }
}
function randomNumber(a){
    let pass1=[];
    let pass2=[];
    let finalPass1="";
    let finalPass2="";
    for(let i=0; i<a; i++)
    {
        let random = Math.floor(Math.random()*91)+1;
        pass1.push(characters[random]);
    }
    for(i=0; i<a; i++)
    {
        let random = Math.floor(Math.random()*91)+1;
        pass2.push(characters[random]);
    }
    for(i=0; i<pass1.length; i++)
    {
        finalPass1+= pass1[i];
    }
    for(i=0; i<pass2.length; i++)
    {
        finalPass2+= pass2[i];
    }
    document.getElementById("pass-1").innerHTML=finalPass1;
    document.getElementById("pass-2").innerHTML=finalPass2;
}

