var vetMail = 
{
    "giulia.f@gmail.com": "Giulia",
    "andrea.g@gmail.com": "Andrea",
    "elisa.b@gmail.com": "Elisa",
    "federico.v@gmail.com": "Federico"
};

var libri = 
{
    "Libro1":
    {
        titolo: "Titolo1",
        genere: "Fantasy",
        data: new Date("2024-05-15")
    },
    "Libro2":
    {
        titolo: "Titolo2",
        genere: "Commedia",
        data: new Date("2024-06-21")
    },
    "Libro3":
    {
        titolo: "Titolo3",
        genere: "Drammatico",
        data: new Date("2024-04-18")
    }
}

function init()
{
    let btnLogin = document.createElement("button");
    let main = document.querySelector("main");
    btnLogin.setAttribute("id","btnLogin");
    main.appendChild(btnLogin);
    btnLogin.innerHTML = "LOGIN";
    btnLogin.onclick = login;

    let menu = document.createElement("select");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    menu.appendChild(option1);
    menu.appendChild(option2);

    option1.innerHTML = "Inserisci un libro";
    option2.innerHTML = "Prendi in prestito un libro";

    let section1 = document.createElement("section");
    section1.setAttribute("id","section1");
    main.appendChild(section1);
    let section2 = document.createElement("section");
    section2.setAttribute("id","section2");
    main.appendChild(section2);

    section1.style.height = "400px";
    section1.style.width = "600px";

    section2.style.height = "400px";
    section2.style.width = "600px";

    section1.style.display = "none";
    section2.style.display = "none";

    main.appendChild(menu);

    menu.selectedIndex = -1;

    function cambioSection()
    {
        if(menu.selectedIndex === 0)
            {
                inserisciLibro();
            }
        if(menu.selectedIndex === 1)
            {
                prendiInPrestitoLibro();
            }
    }

    menu.addEventListener("change",cambioSection);
}
function login()
{
    let dati = prompt("Inserisci la tua mail -->");
    let btnLogin = document.getElementById("btnLogin");

    if(dati in vetMail)
        {
            let nome = vetMail[dati];
            alert("Ciao " + nome);
            btnLogin.innerHTML = "Ciao " + nome;   
        }
    else
        alert("Email non esistente");
}

function inserisciLibro()
{
    let section2 = document.getElementById("section2");
    section2.style.display = "none";
    let section1 = document.getElementById("section1");
    section1.style.display = "block";
    section1.innerHTML = "";
    section1.innerHTML = "Inserisci un libro da cercare --> ";
    let input = document.createElement("input");
    input.type = "text";
    section1.appendChild(input);

    let btnCerca = document.createElement("button");
    btnCerca.innerHTML = "Cerca";
    btnCerca.style.backgroundColor = "Red";
    section1.appendChild(btnCerca);

    function gestisciBtnCerca()
    {
        if(input.value in libri)
            {
                let art = document.createElement("article");
                section1.appendChild(art);
                art.innerHTML = libri[input.value].titolo + " / " + libri[input.value].genere + " / " + libri[input.value].data;
                art.style.backgroundColor = "blue";
            }
        else
            alert("Libro cercato non corretto");
    }

    btnCerca.addEventListener("click",gestisciBtnCerca);


}
function prendiInPrestitoLibro()
{
    let section1 = document.getElementById("section1");
    section1.style.display = "none";
    let section2 = document.getElementById("section2");
    section2.style.display = "block";
    section2.innerHTML = "";

    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");

    btn1.style.backgroundColor = "green";
    btn2.style.backgroundColor = "green";
    btn3.style.backgroundColor = "green";

    btn1.innerHTML = "Per data";
    btn2.innerHTML = "Alfabetico";
    btn3.innerHTML = "Per genere";

    section2.appendChild(btn1);
    section2.appendChild(btn2);
    section2.appendChild(btn3);

    let art = document.createElement("article");
    art.style.backgroundColor = "light-blue";
    section2.appendChild(art);

    let p1 = document.createElement("p");
    art.appendChild(p1);
    p1.innerHTML = libri["Libro1"].titolo + "/" + libri["Libro1"].genere + "/" + libri["Libro1"].data;

    let p2 = document.createElement("p");
    art.appendChild(p2);
    p2.innerHTML = libri["Libro2"].titolo + "/" + libri["Libro2"].genere + "/" + libri["Libro2"].data;

    let p3 = document.createElement("p");
    art.appendChild(p3);
    p3.innerHTML = libri["Libro3"].titolo + "/" + libri["Libro3"].genere + "/" + libri["Libro3"].data;


    function perData()
    {
        let d1 = p1.textContent.substring(16,84);
        let d2 = p2.textContent.substring(17,89);
        let d3 = p3.textContent.substring(19,90);

        let data1 = new Date(d1);
        let data2 = new Date(d2);
        let data3 = new Date(d3);

        if(data1 > data2)
            {
                let aus = p1.value;
                p1.value = p2.value;
                p2.value = aus;
            }
        if(data2 > data3)
            {
                let aus = p2.value;
                p2.value = p3.value;
                p3.value = aus;
            }
    }

    btn1.addEventListener("click",perData);

}


