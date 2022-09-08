let pokeId = 0;


nextPoke();
function nextPoke(){
    pokeId++;
    chamadas(pokeId);
}
function backPoke(){
    if(pokeId > 1){
        pokeId--;
    }
    chamadas(pokeId);
}
function upPoke(){
    chamadas(pokeId);
}
function bottomPoke(){

    pokeId = Math.floor(Math.random() * (649 - 1) + 1);
    chamadas(pokeId);
}

async function chamadas(PokeId){
    let url = "https://pokeapi.co/api/v2/pokemon/" + PokeId;
    let response = await fetch(url);
    let pokemon = await response.json();
    let srcImg;

    if(pokeId <= 649){
        srcImg = pokemon["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    }
    else{
        srcImg = pokemon["sprites"]["versions"]["generation-vii"]["ultra-sun-ultra-moon"]["front_default"];
    }
    
    let textConte = pokemon["name"];
    let typesText = pokemon["types"];
    let weight = pokemon["weight"];
    let height = pokemon["height"];


    let pokeImg = document.getElementsByClassName("placepoke")[0].src = srcImg;
    let pokeName = document.getElementsByClassName("pokeName")[0].textContent = textConte.toUpperCase();
    let types = document.getElementsByClassName("text");
    let typesback = document.getElementsByClassName("type");
    for(let i = 0; i < 2; i++){
        if(typesText.length < 2){
            types[0].textContent = typesText[0]["type"]["name"].toUpperCase();
            typesback[0].classList.remove(typesback[0].classList[typesback[0].classList.length -1]);
            typesback[0].classList.add(typesText[0]["type"]["name"]);
            types[1].textContent = " ";
            typesback[1].classList.remove(typesback[1].classList[typesback[1].classList.length -1]);
            typesback[1].classList.add("blank");
        }
        else{
            types[i].textContent = typesText[i]["type"]["name"].toUpperCase();
            typesback[i].classList.remove(typesback[i].classList[typesback[i].classList.length -1]);
            typesback[i].classList.add(typesText[i]["type"]["name"]);
        }    
    }
    document.getElementsByClassName("PokeId")[0].textContent = "PokeId:" + PokeId;
    if(weight>=100){
        document.getElementsByClassName("weight")[0].textContent = "Weight:" + weight/10 + "Kg";
    }
    else{
        document.getElementsByClassName("weight")[0].textContent = "Weight:" + weight + "g";
    }
    document.getElementsByClassName("height")[0].textContent = "Height:" +(height * 10);
    
}  
