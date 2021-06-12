var users =[]
document.querySelector('#btn').onclick= function(){

    var ism = document.querySelector('#ism').value,
        yosh = document.querySelector('#yosh').value,
        kasb = document.querySelector('#kasb').value,


        user = {
            name:ism,
            age:yosh,
            job:kasb
        }
document.querySelector('#tbody').innerHTML+='<tr><td>'+ism+'</td><td>'+yosh+'</td><td>'+kasb+'</td></tr>'

document.querySelector('#ism').value='';
document.querySelector('#yosh').value=null;
document.querySelector('#kasb').value='';
users.push(user);
console.log(user);
}
