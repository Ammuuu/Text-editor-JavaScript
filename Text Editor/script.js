let inputText = () => document.getElementById("text-input").value;

let outputText = () => document.getElementById("text-output").innerText = inputText();

let formatting = (element, format) => {
    element.classList.toggle('active');
    let formattedText = document.getElementById("text-output");
    formattedText.classList.contains(format)? formattedText.classList.remove(format) : formattedText.classList.add(format);
}


let alignment = (element, alignType) => {
    document.getElementById('text-output').style.textAlign = alignType;

    let buttons = document.getElementsByClassName('align');
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    element.classList.add('active');
}