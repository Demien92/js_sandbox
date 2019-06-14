///1
// const matrixDiff = (arr1, arr2) => {
//     let sum = 0;
//     for (let i = 0; i < arr1.length; i += 1) {
//         if (arr1[i].length !== arr2[i].length) {
//             return NaN
//         }
//         for (let j = 0; j < arr1[i].length; i += 1) {
//             sum += Math.abs(arr1[i][j] - arr2[i][j]);
//         }
//     }
// };
// window.matrixDiff = matrixDiff;

///2
// function onSearch() {
//     const inputs = document.getElementsByTagName('input');
//     for(let i = 0; i < inputs.length; i +=1){
//         if(inputs[i].value !== "0"){
//             words.push({word: inputs[i].id, value : +inputs[i].value})
//         }
//     }
//     words.sort((a,b) => a.value - b.value);
//     const str = words.map( o => o.word).join('+');
//     window.location.href = 'https://www.youtube.com/results?search_query=${str}';
// }
// function strangeSearch( words) {
//     for (let i = 0; i < words.length; i +=1) {
//         const div = document.createElement('div');
//         div.innerHTML = words[i];
//         document.appendChild(div);
//         input.type = 'number';
//         input.value = 0;
//         input.id = words[i];
//         document.body.appendChild(div);
//         document.body.appendChild(input);
//     }
//     const  button = document.createElement('button');
//     button.id = 'go';
//     button.innerHTML = 'Search';
//     button.addEventListener("click", onSearch);
//     document.body.appendChild(button);
//
// }
// strangeSearch(['bill', 'kill', 'song']);

///3





// /////4
//     /function grab(e) {
//     const img = document.querySelector('img');
//     img.style.top = e.y + 'px';
//     img.style.left = e.x + 'px';
// }
//
// function stickyСat() {
//     const img = document.createElement('img');
//     img.src = imgSrc;
//     img.width = 50;
//     img.height = 50;
//     document.body.append(img);
//
//     window.addEventListener('mousemove', grab);
// }
//
// function unstickTheСat() {
//     const imgs = document.querySelectorAll('img');
//     for (let val of imgs) {
//         val.remove();
//     }
//
//     window.removeEventListener('mousemove', grab);
// }