const characters=[

"Aden",
"Albert",
"Andre",
"Bailey",
"Bannon",
"Bannons dad",
"Benowee",
"Car",
"Chris",
"Chuck",
"Cole",
"DanTDM",
"Edwin",
"Emery",
"Ethan",
"Garn47",
"Garret",
"Greg",
"Harold",
"Heavy",
"Jacob",
"Jayden O",
"Jayden",
"Jean Luc",
"Jeffowee",
"Kip",
"Labron James",
"LARRY",
"Mario",
"Mat",
"Max",
"Mclovin",
"Omelette man",
"Papa Mario",
"Paul",
"Sawyer",
"Sega2003",
"Seymore",
"Stanley",
"Stef"

];

const grid=document.getElementById("grid");

const chosen=document.getElementById("chosen");

let random=Math.floor(Math.random()*characters.length);

chosen.src="Images/" + characters[random] + ".PNG";

for(let name of characters){

    let div=document.createElement("div");

    div.className="card";

    let img=document.createElement("img");

    img.src="Images/"+name+".PNG";

    img.onclick=function(){

        img.classList.toggle("greyed");

    }

    div.appendChild(img);

    grid.appendChild(div);

}