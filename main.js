console.log("connected!! sorting-hat");

let students = []
let vArmy = [];
//HarryPotter House
const assignHouse = [
    {
        house: 'Gryffindor',
        imageUrl: 'https://vignette.wikia.nocookie.net/harryalbuspotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20181022144149',
        number: 0,
        color: 'red'
    },
    {
        house: 'Hufflepuff',
        imageUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20161020182518',
        number: 1,
        color: 'yellow'
    },
    {
        house: 'Ravenclaw',
        imageUrl: 'https://i.pinimg.com/originals/c9/c2/fb/c9c2fbc62648340d3cbf206c4b159d17.jpg',
        number: 2,
        color: 'blue'
    },
    {
        house: 'Slytherin',
        imageUrl: 'https://i.pinimg.com/originals/35/38/05/353805a6f80434f1d227d7dc4250d1a5.jpg',
        number: 3,
        color: 'green'
    },                  
]

// voldemortsArmy
const vArmyImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLuvPYV_aoY-cdc3-5vJ4FZf_Gm20HU1TdkBJsOT1C5TkoB_Aa&usqp=CAU';

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}


//<img src="..." class="card-img-top" alt="...">
// Build Student Cards
const buildStudentCards = (studentsCollection) => {
    let domStr ='';
    let x = 0;    
    for (let i = 0; i < studentsCollection.length; i++) {
        //<div class = "col-3 col-sm-5">                      
        console.log(studentsCollection[i].house);       
        domStr +=`
        <div class = "col-md-auto myCardsCol">
          <div class="card text-center" style = "width: 18rem;border: 1px solid black;">
            <div class="card-body">
              <img src="${studentsCollection[i].imageUrl}" class="card-img-top" alt="${studentsCollection[i].house}">
              <h5 class="card-title">${studentsCollection[i].name}</h5>
              <p class="card-text houseName" style="background-color: ${studentsCollection[i].color};">${studentsCollection[i].house}</p>
              <a id = "${studentsCollection[i].name}" onClick= "deleteCard(this.id)" href="#" class="btn btn-primary">Expel</a>
            </div>
          </div>        
        </div>
        `;
    }
    printToDom('#student', domStr);          
}  


// Build vArmy Cards
const buildVArmyCards = (armyCollection) => {
    let domStr ='';
    let x = 0;    
    for (let i = 0; i < armyCollection.length; i++) {
        //<div class = "col-3 col-sm-5">                     
        console.log(armyCollection[i].house);       
        domStr +=`
        <div class = "col-md-auto myCardsCol">
          <div class="card text-center" style = "width: 18rem;border: 1px solid black;">
            <div class="card-body vArmy" style = "color = red;">
              <img src="${armyCollection[i].imageUrl}" class="card-img-top" alt="${armyCollection[i].house}">
              <h5 class="card-title">${armyCollection[i].name}</h5>
              <p class="card-text" style="background-color: black;">${armyCollection[i].house}</p>              
            </div>
          </div>        
        </div>
        `;
    }
    printToDom('#army', domStr);          
}  


console.log("before myTestFun");


// this to capitalize the first latter of the input ..
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// Adding and Sorting new student below:
const filterstudentsEvent = (event) => {
    //const buttonID = event.target.id;
    const inp = capitalizeFirstLetter(document.getElementById("fullName").value);

    //console.log(buttonID);
    let found = false;
    console.log("you call the event");
    console.log(inp);
    //console.log(buttonID);
    let index = students.length;
    let tempStudentCollection = [];
    for (let i = 0; i < students.length; i++){
        if (students[i].name === inp) {
            console.log("I found a duplicate");
            alert("Sorry!! The student already registered!");
            found = true;
        }
    }
    // making sure there is not empty name just more validation!
    if (inp === ''){
        alert("Please input a name!");
        found = true;
    }
    let x= 0;
    x= Math.floor(Math.random() * 4);
    if (!found) {
        students.push({name: inp, house: assignHouse[x].house, color: assignHouse[x].color, imageUrl: assignHouse[x].imageUrl, id: inp});
    }
    tempStudentCollection = students;

    students.sort((a, b) => (a.name > b.name) ? 1 : -1);
    buildStudentCards(tempStudentCollection);
    document.getElementById("myForm").reset();
    //console.log(tempStudentCollection);
}
    
function deleteCard (clicked) {
    const tempStudentCollection = [];
    for (let i = 0; i < students.length; i++) {
        //console.log(students.id);
        if (students[i].name !== clicked) {
            tempStudentCollection.push(students[i]);            
            //console.log("check statemenet ");
        }else {
            vArmy.push(students[i]);
            vArmy[vArmy.length-1].imageUrl = vArmyImageUrl;
            vArmy[vArmy.length-1].house = "voldemorts Army";
        }
    }
    //console.log("excute delete element");
    //print to console to see the new array result awfter delete
    console.log(tempStudentCollection);    
    buildStudentCards(tempStudentCollection);
    buildVArmyCards(vArmy);

    students = tempStudentCollection;
    console.log(students);    
}

const clickEvents = () => {
    document.querySelector('#sortbtn').addEventListener('click', filterstudentsEvent);
}
    
const init = () => {
    buildStudentCards(students);
    clickEvents();  
}
  
init();
