//richiesta del template
var requestURL = "form.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

//parsing
request.onload = () => {
    let form = document.createElement("form")
    let json = request.response
    json.forEach(element => {
        let render = document.createElement(element["tag"]);
        if (Boolean(element.attr)) { //in caso ci siano attributi
            for (x in element.attr) {
                render.setAttribute(x, element.attr[x])
            }
        }
        if (Boolean(element.content)) { //in caso ci sia un contenuto testuale
            render.appendChild(document.createTextNode(element.content))
        }
        if (Boolean(element.options)) {
            element.options.forEach(x => {
                render.innerHTML += `<option value="${x.toLowerCase()}">${x}</option>`
            });
        }
        if (Boolean(element.label)) { //in caso ci sia una label
            if (element.label[0] === ">") { //per mettere la label a destra
                form.innerHTML += `<div>${render.outerHTML}<label for="${element.attr.name}">${element.label.slice(1)}</label></div>`
            }
            else { // la label viene mantenuta a sinistra
                form.innerHTML += `<div><label for="${element.attr.name}">${element.label}</label>${render.outerHTML}</div>`
            }
            return // interruzione in quanto l'aggiunta è già avvenuta
        }
        form.innerHTML += `<div>${render.outerHTML}</div>` //aggiunta in caso non ci siano label

    });
    document.body.innerHTML = form.outerHTML;//aggiunta all'index
}