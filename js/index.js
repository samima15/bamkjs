
/*
document.getElementById('p-1').innerText = "hello-1";
document.getElementById('p-2').innerText = "hello-1";
document.getElementById('p-3').innerText = "hello-1";
document.getElementById('p-4').innerText = "hello-1";
*/
document.getElementById('HIT').addEventListener('click',function(){
    setInnerText('p-1'),'BNG';
    setInnerText('p-2'),'RMG';
    setInnerText('p-3'),'VTHY';
    setInnerText('p-4'),'HTJ';
})
function setInnerText(id,value){
    document.getElementById(id).innerText= value;
}
function getInputValue(id){
    const value = document.getElementById(id).value;
    console.log(value);
}