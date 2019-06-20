const select_converter_1=document.getElementById('select_converter_1');
const select_converter_2=document.getElementById('select_converter_2');
const btn_calc=document.getElementById('calc');
const input=document.getElementById('input_res');
const error=document.getElementById('error');


const btn_result2=document.getElementById('result2');
const start=document.getElementById('start');
const end=document.getElementById('end');

const show_result2=document.getElementById('show_result2');

select_converter_1.selectedIndex=0;
select_converter_2.selectedIndex=1;

btn_calc.addEventListener('click',(event)=>{
    if(select_converter_1.selectedIndex==0){
        if(select_converter_2.selectedIndex==0){
            error.innerHTML="Выбирайте разные валюты";
            input_res.value="";
        }else
        if(select_converter_2.selectedIndex==1){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=GBP",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.USD);
        }else
        if(select_converter_2.selectedIndex==2){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=GBP",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.EUR);
        }
    }else

    if(select_converter_1.selectedIndex==1){
        if(select_converter_2.selectedIndex==0){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=USD",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.GBP);
        }else
        if(select_converter_2.selectedIndex==1){
            error.innerHTML="Выбирайте разные валюты";
            input_res.value="";
        }else
        if(select_converter_2.selectedIndex==2){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=USD",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.EUR);
        }
    }else

    if(select_converter_1.selectedIndex==2){
        if(select_converter_2.selectedIndex==0){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=EUR",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.GBP);
        }else
        if(select_converter_2.selectedIndex==1){
            error.innerHTML="";
            fetch("https://api.exchangeratesapi.io/latest?base=EUR",{method: 'GET'})
                .then(res=>res.json())
                .then(res=>input_res.value=res.rates.USD);
        }else
        if(select_converter_2.selectedIndex==2){
            error.innerHTML="Выбирайте разные валюты";
            input_res.value="";
        }
    }
});


//fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP')
//.then(res=>input_res1.value=res);