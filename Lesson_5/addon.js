function print(n) {
    var i, j;
    for (i = 1; i <= n; i++) {

        for (j = 1; j < i; j++) {
            document.write('&nbsp;');
        }

        for (j = 1; j <= (n * 2 - (2 * i - 1)); j++) {

            console.log(n * 2 - (2 * i - 1))

            if (j == 1 || j== (n * 2 - (2 * i - 1))) {
                console.log(j== (n * 2 - (2 * i - 1)))
                document.write('*')
            } else {
                document.write('&nbsp;');
            }
        }

        document.write("<br/>");
    }
}

function print2(n) {
    var i, j, space, k = 0;

    for (i = 1; i <= n; i++) {

        for (j = 1; j <= n - i; j++) {
            document.write("&nbsp;");
        }

        while (k != (2 * i - 1)) {
            if (k == 0 || k == 2 * i - 2)
                document.write("*");
            else
                document.write("&nbsp;");
            k++;
        }
        k = 0;

        document.write("<br/>");
    }
    n--;

    for (i = n; i >= 1; i--) {

        for (j = 0; j <= n - i; j++) {
            document.write("&nbsp;");
        }

        k = 0;
        while (k != (2 * i - 1)) {
            if (k == 0 || k == 2 * i - 2)
                document.write("*");
            else
                document.write("&nbsp;");
            k++;
        }
        document.write("<br/>");
    }
}
function doublePrint(print2, print2){
    console.log(print2, print2);
}