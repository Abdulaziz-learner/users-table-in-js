// var a = setInterval(function(){
//     console.log('HELLO WORLD');
// },2000);

// document.querySelector('#btn').onclick=function(){
//     clearInterval(a);
// }

// var d = setTimeout(function(){
//     console.log('HELLO WORLD');
// },2000);

// document.querySelector('#btn').oninput= function(){
//     clearTimeout(d);
// }



// var arr =[111,3,'dfdfd,b,' ,23,'rer',454]
// arr1=[];
// len=arr.length;
// for(vari=0;i<len;i++){
//     if(typeof(arr[i])=='number'){
//         arr1.push(arr[i]);
//         delete arr[i];
//     }
// }
// console.log(arr);
// console.log(arr1);
var arr = [112,'number,', 33,false,222,'done',223,true,'write','boolean',334,'wear',false,777,'string',true,999,'learn']
arr1=[];
arr2=[];
arr3=[];
len = arr.length;
for(var i = 0;i<len;i++){
if (typeof(arr[i])=='number'){
    arr1.push(arr[i]);

}else if(typeof(arr[i])=='string'){
    arr2.push(arr[i]);
}else if(typeof(arr[i])=='boolean'){
    arr3.push(arr[i]);
}delete arr[i];
}console.log(arr1,arr2,arr3);