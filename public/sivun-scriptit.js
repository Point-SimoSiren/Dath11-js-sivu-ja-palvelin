// Teema
var teema = "vaalea"

// pvm näyttäminen
const pvm = new Date()
const pvmField = document.createElement("h4")
dd = pvm.getDate()
mm = pvm.getMonth() + 1
yyyy = pvm.getFullYear()
pvmField.innerText = "Tänään on " + dd + "." + mm + "." + yyyy
document.body.appendChild(pvmField)


function tumma() {
    localStorage.setItem("teema", "tumma")
    teema = "tumma"
    document.getElementById("sivu").style.background = "black"
    document.getElementById("pääOtsikko").style.color = "silver"
    document.getElementById("taulukko").style.color = "cyan"
    document.getElementById("postaukset").style.color = "white"
}

function vaalea() {
    localStorage.setItem("teema", "vaalea")
    teema = "vaalea"
    document.getElementById("sivu").style.background = "white"
    document.getElementById("pääOtsikko").style.color = "black"
    document.getElementById("taulukko").style.color = "black"
    document.getElementById("postaukset").style.color = "black"
}

// Toiminnot
function pääsivulle() {
    let x = "<h2>Pääsivu</h2>"
    document.getElementById("sisältö").innerHTML = x
}

function yhteystietoihin() {
    let x = `<h2>Yhteystiedot</h2>
            <table id="taulukko">
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Puhelin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Janne</td>
                        <td>049382928</td>
                    </tr>
                    <tr>
                        <td>Riina</td>
                        <td>049382934</td>
                    </tr>
                </tbody>
            </table>`
    document.getElementById("sisältö").innerHTML = x

    // väriteeman lukeminen päätason muuttujasta ja käyttäminen
    if (teema === "tumma") {
        tumma()
    }
    else {
        vaalea()
    }
}

function haePostaukset() {
var x = `<div id="postaukset">`
fetch("https://jsonplaceholder.typicode.com/posts")
.then(jsonData => jsonData.json())

.then(jsData => jsData.map(post =>
    x += `<h3 class="post"> ${post.title} </h3>
    <p class="post"> ${post.body} "</p>`
))

setTimeout(() => {
    x += `</div>`
    document.getElementById("sisältö").innerHTML = x
    if (teema === "tumma") 
    {
        tumma()
    }
    else {
        vaalea()
    }
}, 500)

}


pääsivulle()

let talletettuTeema = localStorage.getItem("teema")
if (talletettuTeema == "tumma") {
    tumma()
}
else {
    vaalea()
}