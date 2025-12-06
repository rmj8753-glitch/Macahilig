function insert(input) {
    document.form1.inputvalue.value += input;
}

function equal() {
    let total = document.form1.inputvalue.value;

    if (total) {
        document.form1.inputvalue.value = eval(total);
    }
}

function backspace() {
    let inputvalue = document.form1.inputvalue.value;
    document.form1.inputvalue.value = inputvalue.slice(0, -1);
}