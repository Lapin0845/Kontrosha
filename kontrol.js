let but =document.getElementById('but1')
let form =document.getElementById('form1')


form.onsubmit = f1

function f1(){
    console.log(form.elements);
    console.log(form.elements.length);
    let stroka=''
    let elems = form.elements
    for (e in elems) {
        if (elems[e].type == 'checkbox' && elems[e].checked) {
            stroka += elems[e].name
            stroka += '--выбран' + '\n'
        }
        if (elems[e].type == 'radio' && elems[e].checked){
            stroka += elems[e].name
        stroka += '--' + elems[e].value + '\n'
        }
        if (e == form.elements.length - 1) {
            break
        }
        if (elems[e].name == '') {
            continue
        }
        if (elems[e].value == undefined) {
            continue
        }
        stroka += elems[e].name
        stroka += '--' + elems[e].value + '\n'
    }
    console.log(stroka)
    saveToPC(stroka)
    return false
}

function saveToPC(str){
let blob = new Blob([str], {type: "text/plain"});
let link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "123.txt");
link.click();
}