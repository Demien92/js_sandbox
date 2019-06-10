///1
function removeKeys(obj, strArr)
{
    if(typeof obj !== "object") return undefined;
    if(!strArr || !Array.isArray(strArr)) return obj;
    strArr.forEach(el => {
        if(el in obj){
            delete obj[el];
        }
    });
    return obj;
}
///2
function clearNumbers(arr)
{
    if(!arr || !Array.isArray(arr)  ) return undefined;
    arr = arr.map(el =>
    {
        if(Array.isArray(el))
        {
            el = el.map(number =>
            {
                if(typeof number === "number")
                {
                    return number;
                }else return null;
            });
        } else return undefined;

        return el.filter(num => num!= null);
    });
    arr = arr.filter(el => el != undefined);
    return arr;
}
///3
function reverse(num)
{
    if(arguments.length == 0) return undefined;

    for(var i = 0; i < arguments.length; i+=1)
    {
        if(!arguments[i] ) return undefined;
    }

    var arr = new Array();
    for(var i = 0; i < arguments.length; i+=1)
    {
        if(typeof arguments[i] != "string")
        {
            continue;
        }
        arr[i] = arguments[i].split('');
        arr[i] = arr[i].reverse();
        arr[i] = arr[i].join('');

    }
    arr = arr.reverse();
    return arr;
}
///4
function join(arg)
{
    var objArr = new Array();
    var k = 0;
    for (const iterator of arguments)
    {
        if(typeof iterator == "object" && !Array.isArray(iterator))
        {
            objArr[k] = iterator;
            k++;
        }
    }
    var obj = objArr[0];
    for(var i = 1; i < objArr.length; i+=1)
    {
        for (const key in objArr[i])
        {
            if(key in obj)
            {
                if(Array.isArray(obj[key]) )
                {
                    for (const iterator of objArr[i][key])
                    {
                        obj[key].push(iterator);
                    }

                }else if(typeof obj[key] == "number" || typeof obj[key] == "string")
                {
                    obj[key]+=objArr[i][key];
                }
                if(typeof obj[key] != typeof objArr[i][key])
                {
                    obj[key] = objArr[i][key];
                }

            }else{
                obj[key] = objArr[i][key];
            }
        }
    }

    return obj;
}