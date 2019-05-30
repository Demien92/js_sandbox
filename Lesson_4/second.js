

////// Part 2
function print(num) {
    let result = '\n';


    for (let i = 0; i < num - 1; i += 1){
        result += ' '.repeat(i);
        result += '*';
        result += ' '.repeat(num * 2 - i * 2 - 3);
        result += '*\n';
    }
    result += ' '.repeat(num);
    result += '*\n';

    return result;
}
// console.log(print(55));

///Part 3
// function print(num) {
//     let result = '\n';
//
//
//     for (let i = 0; i < num - 1; i += 1){
//         result += ' '.repeat(i);
//         result += '*';
//         result += ' '.repeat(num * 2 - i * 2 - 3);
//         result += '*\n';
//     }
//     result += ' '.repeat(num);
//     result += '*\n';
//
//     return result;
// }


////Part 3
// function getArgValue( name) {
//     while(true){
//         const answer = parseFloat(prompt('enter argument value for ${name}'));
//         if ( answer === 'exit'){
//             return result
//         }
//         if( !isNaN(answer)){
//             return answer;
//         }
//     }
// }
//
// function calculate() {
//     const  result={
//         historu :[],
//         formula:'',
//         args:{},
//     };
//     const answer = prompt('which formula?');
//
//     if (answer === 'exit'){
//         return result;
//     }
//     if (answer === '1'){
//         result.formula = ' y = kx + b';
//         const  k = getArgValue('k');
//         if(k === false){
//             return  result;
//         }else {
//             result.args.k = k;
//         }
//
//         getArgValue('k');
//         getArgValue('x');
//         getArgValue('b');
//     }
//     if(answer === '2'){
//         result.formula = 'y = x^2';
//         getArgValue('x');
//     }
//     return result
// }

