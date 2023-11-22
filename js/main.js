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
    document.getElementById("diesel").innerHTML=convertArrayOfObjectsToString(arrayDiesel);
    document.getElementById("gas").innerHTML=convertArrayOfObjectsToString(arrayGas);
    document.getElementById("other_cars").innerHTML=convertArrayOfObjectsToString(arrayOther);

}


function addCar(event){
    event.preventDefault();

    let newMarca = document.getElementById("marca").value;
    let newModello = document.getElementById("modello").value;
    let newAlimentazione = document.getElementById("alimentazione").value;

    let newCar = {
        marca: newMarca,
        modello: newModello,
        alimentazione: newAlimentazione,
    };

    cars.push(newCar);
    arrayDiesel=divideCarsDiesel(cars);
    arrayGas=divideCarsGas(cars);
    arrayOther=divideCarsOther(cars);
        
    printInHTML(cars);

}