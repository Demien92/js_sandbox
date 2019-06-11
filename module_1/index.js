///1
const matrixDiff = (arr, arr1) => {
    let res = 0;
    for (let i = 0; i < arr.length && arr1.length; i+=1) {
        for (let j = 0; j < arr[i].length && arr1[i].length; j+=1) {
            const a = arr[i][j];
            const b = arr1[i][j];

            if (a - b === 0) {
                continue;
            } else {
                res += Math.abs(a - b);
            }
        }
    }
    return res;
};
//2
function strangeSearch(arr) {
    if(!Array.isArray(arr)) return;
    arr.forEach(function (elem) {
        var label = document.createElement('label');
        var div = document.createElement('div');
        var input = document.createElement('input');
        input.type = 'number';
        input.value = '0';
        input.name = elem;
        div.innerHTML = elem;
        label.appendChild(div);
        label.appendChild(input);
        document.body.appendChild(label);
    });
    var button = document.createElement("button");
    button.id = 'go';
    button.innerHTML = 'Search';
    button.addEventListener("click", changeLocation);
    document.body.appendChild(button);
    
}
function changeLocation() {
    var url = 'https://www.youtube.com/results?search_quert=';
    var inputs = document.getElementsByTagName('input');
    inputs = Array.prototype.slice.call(input);
    var newArr = inputs.sort{function (a, b) {
        if (a.value > b.value){
            return 1;
        }
        if ( a.value < b.value){
            return -1;
        }
        return 0;
    }}
    for (var index = 0; index, newArr.length; ++index){
        if(newArr [index].value !== '0'){
            if(index!==0) url += '+';
            url += newArr[index].name
        }
    }
    window.location.href=url;
}

/////4
/function grab(e) {
const img = document.querySelector('img');
img.style.top = e.y + 'px';
img.style.left = e.x + 'px';
}

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