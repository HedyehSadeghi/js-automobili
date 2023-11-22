let cars=[
    {
        marca: "fiat",
        modello: "booh",
        alimentazione: "benzina"
    },
    {
        marca: "Mercedes",
        modello: "booh",
        alimentazione: "diesel"
    },
    {
        marca: "Toyota",
        modello: "booh",
        alimentazione: "elettrica"
    },
    {
        marca: "Audi",
        modello: "booh",
        alimentazione: "ibrida"
    },
    {
        marca: "Volkswagen",
        modello: "booh",
        alimentazione: "gpl"
    },
    {
        marca: "Tesla",
        modello: "booh",
        alimentazione: "gpl"
    },
    {
        marca: "BMW",
        modello: "booh",
        alimentazione: "diesel"
    },
    {
        marca: "Honda",
        modello: "booh",
        alimentazione: "benzina"
    },
    {
        marca: "Ford",
        modello: "booh",
        alimentazione: "elettrica"
    },
    {
        marca: "Ferrari",
        modello: "booh",
        alimentazione: "benzina"
    },

];


divideCarsBasedOnFuel(cars);



function divideCarsBasedOnFuel(arrayOfObjects){
    let arrayDiesel= [];
    let arrayGas=[];
    let arrayOtherCars=[];

    arrayOfObjects.forEach(function (car, index){
        if (car["alimentazione"]=="benzina"){
            arrayGas.push(car);
        }
        else if (car["alimentazione"]=="diesel"){
            arrayDiesel.push(car);
        }
        else {
            arrayOtherCars.push(car);
        }
    });

    return console.log(arrayDiesel, arrayGas, arrayOtherCars);
}




//--------BONUS---------


let arrayDiesel=divideCarsDiesel(cars);
let arrayGas=divideCarsGas(cars);
let arrayOther=divideCarsOther(cars);



printInHTML(cars);




function divideCarsDiesel(arrayOfObjects){
    let arrayDiesel=[];
    arrayOfObjects.forEach(function (car, index){
        if (car["alimentazione"]=="diesel"){
            arrayDiesel.push(car);
        }
    });

    return arrayDiesel;
}


function divideCarsGas(arrayOfObjects){
    let arrayGas= [];
    arrayOfObjects.forEach(function (car, index){
        if (car["alimentazione"]=="benzina"){
            arrayGas.push(car);
        }
    });

    return arrayGas;
}

function divideCarsOther(arrayOfObjects){
    let arrayOther= [];
    arrayOfObjects.forEach(function (car, index){
        if ((car["alimentazione"]!="benzina")&&(car["alimentazione"]!="diesel")){
            arrayOther.push(car);
        }
    });

    return arrayOther;
}

function convertArrayOfObjectsToString(array){
    let string="";
    array.forEach(function(object){
        for (let key in object){
            string += object[key]  + "  ";
        }
        string += "<br>"

    });
    return string;
}

console.log(convertArrayOfObjectsToString(arrayDiesel));

/*
function convertArrayOfObjectsToString(array){
    
    let string="";
    array.forEach(function(element){
        string += JSON.stringify(element);
    });
    return string;
}
*/



function printInHTML(array){

    
    let container= document.createElement("div");
    container.classList.add("container", "bg-light");

    container.innerHTML= `
        <nav id="navbar-example2" class="navbar bg-secondary px-3 mb-3">
            <a class="navbar-brand" href="#">CARS</a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading1">Diesel</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#scrollspyHeading2">Gas</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#scrollspyHeading3">Other</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
            <h4 id="scrollspyHeading1">Diesel cars</h4>
            <p id="diesel"> ${convertArrayOfObjectsToString(arrayDiesel)}</p>
            <h4 id="scrollspyHeading2">Gas cars</h4>
            <p id="gas">${convertArrayOfObjectsToString(arrayGas)} </p>
            <h4 id="scrollspyHeading3">Other cars</h4>
            <p id="other_cars"> ${convertArrayOfObjectsToString(arrayOther)}</p>
        </div>
    `

    document.body.appendChild(container);
}
