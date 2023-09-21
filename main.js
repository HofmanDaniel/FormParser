/*text, select, checkbox radiobutton e textarea */


//richiesta del template
var requestURL = "form.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

//parsing
request.onload=()=>{
    ris=document.createElement("form")
    let json=request.response
    json.forEach(e => {
        console.log(e)
        if(e.label){
            ris.appendChild(document.createElement("label").appendChild(document.createTextNode(e.label)))
        }
        if(e.type=="area"){
            
        }
    });
    console.log(ris)
}