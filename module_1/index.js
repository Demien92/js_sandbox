///1
var matrixDiff = function matrixDiff(arr1, arr2) {
    var sum = 0;
    for (var i = 0; i < arr1.length; i += 1) {
        if (arr1[i].length !== arr2[i].length) {
            return NaN;
        }
        for (var j = 0; j < arr1[i].length; i += 1) {
            sum += Math.abs(arr1[i][j] - arr2[i][j]);
        }
    }
};

window.matrixDiff = matrixDiff;
///2

function strangeSearch(stringArr){
    let div = [];
    let input = [];
    let str;
    let num;
    let link = "https://www.youtube.com/results?search_query=";
    const form = document.createElement("form");
    document.body.append(form);
    form.method = "link";
    for(let i = 0; i < stringArr.length; i += 1){
        div[i] = document.createElement("div");
        form.append(div[i]);
        div[i].innerHTML = `${stringArr[i]}`;
        input[i] = document.createElement("input");
        form.append(input[i]);
        input[i].type = "number";
        input[i].value = 0;
    }
    const button = document.createElement("button");
    document.body.append(button);
    button.innerHTML = "Search";
    button.id = "go";
    button.type = "button";
    button.addEventListener("click", () => {
        for(let k = 0; k < stringArr.length - 1; k +=1){
            for(let j = 0; j < stringArr.length - 1; j += 1){
                if (input[j].value > input[j+1].value){
                    str = stringArr[j];
                    stringArr[j] = stringArr[j+1];
                    stringArr[j+1] = str;
                    num = input[j].value;
                    input[j].value = input[j+1].value;
                    input[j+1].value = num;
                }
            }
        }
        for (let m = 0; m < stringArr.length; m += 1){
            if(input[m].value != 0){
                link += stringArr[m] + "+";
            }
        }
        window.location.href = link;
    })
}
window.strangeSearch = strangeSearch;

///3

///4
function grab(e) {
    const img = document.querySelector('img');
    img.style.top = e.y + 'px';
    img.style.left = e.x + 'px';

    function stickyСat() {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.width = 50;
        img.height = 50;
        document.body.append(img);

        window.addEventListener('mousemove', grab);
    }

    function unstickTheСat() {
        const imgs = document.querySelectorAll('img');
        for (let val of imgs) {
            val.remove();
        }

        window.removeEventListener('mousemove', grab);
    }
}