const select=document.querySelector('#select');
const option=document.querySelector('option');
const drop=document.querySelector('.drop');
const contain=document.querySelector('.container');
const input=document.querySelector('#input');
const msg1=document.querySelector('#msg1');
const button=document.querySelector('.button');


function to_do(e){
    console.log('hii');
    if(select.value==='celsius'){
        celsius=input.value;
        let farhenhit=(1.8*celsius)+32;
        let kelvin=(celsius*1)+273.15;
        newhtml=`<h3 style="transform: translate(100px,190px);">Temp in Farhenhit:${farhenhit}
        <h3 style="transform: translate(100px,190px);">Temp in Kelvin:${kelvin}`
        msg1.innerHTML=newhtml;
    }
    console.log(select.value)
    if(select.value==='farhenhit'){
        farhenhit=input.value;
        let celsius=(((farhenhit*1)-32)/1.8).toFixed(2);
        let kelvin=(((farhenhit*1)+459.67)/1.8).toFixed(2);
        newhtml=`<h3 style="transform: translate(100px,190px);">Temp in Celsius:${celsius}
        <h3 style="transform: translate(100px,190px);">Temp in Kelvin:${kelvin}`
        msg1.innerHTML=newhtml;
    }
    if(select.value==='kelvin'){
        kelvin=input.value;
        let celsius=(kelvin*1)-273.15;
        let farhenhit=((kelvin*1.8)-459.67).toFixed(2);
        newhtml=`<h3 style="transform: translate(100px,190px);">Temp in Celsius:${celsius}
        <h3 style="transform: translate(100px,190px);">Temp in Kelvin:${farhenhit}`
        msg1.innerHTML=newhtml;
    }
}
    
    // console.log(e.target.value);
    // console.log((select.value));
    
    

button.addEventListener('click',to_do)
