
// const name = 'jonh';
//
// console.log('hello, my name is' + name + '.' + 'a' + 'b');
// console.log(`hello, my name ${name}`);

////////////////////////////////////////

// function makeSum() {
//     let sum = 0;
//     console.log(arguments);
//
//     for (let i =0; i < arguments.length; i +=1){
//         sum += arguments[i]
//     }
//     return sum;
// }
// const date = [1, 2, 3, 4,];
//
// /////////////////////////
//
// function makeSum2(...args) {
//     let sum = 0;
//     console.log(args);
//
//     for (let i =0; i < args.length; i +=1){
//         sum += args[i]
//     }
//     return sum;
// }
// const date = [1, 2, 3, 4,];
//
// ////////////////////////
//
// const obj = { a:1, b:2};
// const newObject = {...obj};
//
// console.log(newObject);

///////////////////

// const div = document.createElement('div');
// const link = document.createElement('a');
//
// document.body.append(div);
// div.append(link);
//
// link.innerHTML= 'click me';
// link.href = 'https:google.com';
//
// console.dir(div);
//
//
//
// ///////////////////////
// // document.body.children[0].children[0].children[0].append(link);///// не юзать но работет
//
//
// // const div = document.querySelectorAll('.wrapper > div:first-children');
// const div = document.getElementsByTagName('div');
// const link = document.getElementById('a');
//
//
// console.log(div);
//
// div[0].append(link);
//
// link.innerHTML= 'click me';
// link.href = 'https:google.com';
// link.setAttribute('date-id', 'sdfsdfsf');
// link.getAttribute('date-id',);
// link.removeAttribute('date-id');
// link.className('tyu');
// link.classList.add('tyu');
// link.classList.toggle('tyu');
// link.classList.remove('tyu');
//
//
// console.log(link.parentElement);
//
//
// for (let i = 0; i < div.length; i +=1){
//     const  img = document.createElement('img');
//
//     img.src ='https://www.google.com/search?q=img&rlz=1C1CHBD_ruUA848UA848&source=lnms&tbm=isch&sa=X&ved=0ahUKEwilt9GcjqPiAhWClIsKHfhCC4IQ_AUIDigB&biw=1522&bih=706#imgrc=LSENIUrryc6iJM:';
//
//     div[i].append(img);
// }
//
//
//
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
// const btn3 = document.createElement('button');
//
// btn1.innerHTML = '1';
// btn2.innerHTML = '2';
// btn3.innerHTML = '3';
//
//
// document.body.append(btn1);
// document.body.append(btn2);
// document.body.append(btn3);
//
// document.body.append(btn1,btn2,btn3)
//
// // btn1.onclick = () => console.log('click1');
// // btn1.onclick = () => console.log('click2');
//
// btn1.addEventListener('click', () => console.log('click1'));
// btn1.addEventListener('click', () => console.log('click2'));
//
//
// const onClick1 = () =>  console.log('click1');
// const onClick2 = () =>  console.log('clickq');
//
// function reset() {
//     btn1.removeEventListener('click', () => onClick1);
//     btn1.removeEventListener('click', () => onClick2);
// }
//
//
// window.addEventListener('mousemove', () => console.log('move'));
// btn1.addEventListener('mousemove', () => console.log('button move'));
//
//
// window.addEventListener('mousemove', ( event) => console.log('move', event, block));
// btn1.addEventListener('mousemove', () => console.log('button move'));
//

////////////////////////////////////////////////////////
// const block= document.querySelector('div');
//
//
// window.addEventListener('mousemove', event =>{
//         block.style.top = event.offsetY + 'px';
//         block.style.left = event.offsetX + 'px';
// });


