console.log("connected!! sorting-hat");

let students = [
    {
        name: 'Bamiran01',
        house: 'green house',
        color: 'rr',
        id: 'Bamiran01',
    },
    {
        name: 'Kamiran02',
        house: 'green house',
        color: 'rr',
        id: 'Kamiran02',
    },
    {
        name: 'Aamiran03',
        house: 'green house',
        color: 'rr',
        id: 'Aamiran03',
    },    
]
//HarryPotter House
//https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145529
//https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145653
//https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145945
//https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729150848
//https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/zoom-crop/width/90/height/55?cb=20190222162949
//https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest/zoom-crop/width/90/height/55?cb=20161020182518
//https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest/zoom-crop/width/90/height/55?cb=20161020182442
//https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/zoom-crop/width/90/height/55?cb=20161020182557
const assignHouse = [
    {
        house: 'Gryffindor',
        imegUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/e/ee/Gryffindor_Crest-0.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145529',
        number: 0,
        color: 'red'
    },
    {
        house: 'Hufflepuff',
        imegUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/6/62/Download_%289%29.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145653',
        number: 1,
        color: 'yellow'
    },
    {
        house: 'Ravenclaw',
        imegUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/2/28/Download_%284%29.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729145945',
        number: 2,
        color: 'blue'
    },
    {
        house: 'Slytherin',
        imegUrl: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/72/Ccd53034-c798-452a-8032-f28e06250d8f.jpg/revision/latest/zoom-crop/width/90/height/55?cb=20160729150848',
        number: 3,
        color: 'green'
    },                  
]


const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

let callMe = false;

const buildStudentCards = (studentsCollection) => {
    let domStr ='';
    //const myCat = getEleme
    let x = 0;    
    for (let i = 0; i < studentsCollection.length; i++) {
        //<div class = "col-3 col-sm-5"> 
        //x = Math.floor((Math.random() * 4) + 1);
        if (!callMe) {
            x= Math.floor(Math.random() * 4);
            studentsCollection[i].house = assignHouse[x].house;
            studentsCollection[i].color = assignHouse[x].color;
        }
                       
        console.log(studentsCollection[i].house);       
        domStr +=`
        <div class = "col-md-auto myCardsCol">
        <div class="card text-center" style = "width: 18rem;border: 1px solid black;">
        <div class="card-body">
          <h5 class="card-title" style = "background-color: ${studentsCollection[i].color};color: white; text-shadow: 0 0 3px #333333, 0 0 5px #000000;">${studentsCollection[i].name}</h5>
          <p class="card-text">${studentsCollection[i].house}</p>
          <a id = "${studentsCollection[i].name}" onClick= "deleteCard(this.id)" href="#" class="btn btn-primary">Expel</a>
        </div>
      </div>        
      </div>
        `;
    }
    printToDom('#student', domStr);          
}  
  
console.log("before myTestFun");

// Adding and Sorting new student below:
const filterstudentsEvent = (event) => {
    //const buttonID = event.target.id;
    const inp = document.getElementById("fullName").value;
    //console.log(buttonID);
    let found = false;
    console.log("you call the event");
    console.log(inp);
    //console.log(buttonID);
    callMe = true;
    let index = students.length;
    let tempStudentCollection = [];
    for (let i = 0; i < students.length; i++){
        if (students[i].name === inp) {
            console.log("I found a duplicate");
            alert("Sorry!! The student already registered!");
            found = true;
        }
    }
    let x= 0;
    x= Math.floor(Math.random() * 4);
    if (!found) {
        students.push({name: inp, house: assignHouse[x].house, color: assignHouse[x].color, id: inp});
    }
    tempStudentCollection = students;

    students.sort((a, b) => (a.name > b.name) ? 1 : -1);
    buildStudentCards(tempStudentCollection);
    document.getElementById("myForm").reset();
    //console.log(tempStudentCollection);
}


    
function deleteCard (clicked) {
    const tempStudentCollection = [];
    // alert for if there is no more stuident to delete!
    /*
    // this line for add alert for no more student to delete!!
    */
    for (let i = 0; i < students.length; i++) {
        //console.log(students.id);
        if (students[i].name !== clicked) {
            tempStudentCollection.push(students[i]);            
            //console.log("check statemenet ");
        }
    }
    //console.log("excute delete element");
    //print to console to see the new array result awfter delete
    console.log(tempStudentCollection);    
    buildStudentCards(tempStudentCollection);
    students = tempStudentCollection;
    console.log(students);    
}

const clickEvents = () => {
    //document.querySelector('#fullName').addEventListener('click', filterstudentsEvent);
    document.querySelector('#sortbtn').addEventListener('click', filterstudentsEvent);
    //document.querySelector('#id01').addEventListener('click', deleteStudentsEvent);
}
    
const init = () => {
    buildStudentCards(students);
    clickEvents();  
}
  
init();


/* // this was for delete I will keep it for my notes!!
function reply_click(clicked_id) {
    //document.querySelector(reply_click(clicked_id)).addEventListener('click', deleteStudentsEvent);
    //alert(clicked_id);
    for (let i = 0; i < students.length; i++) {
        //console.log(students.id);
        if (students[i].id === clicked_id) {
            //students.splice(i,1);
            students.slice(0, 1).concat(students.slice(1 + 1, students.length));
            console.log("if statement true: "+ students);
        }
    }
    console.log("excute delete element");
    console.log(students);
    buildStudentCards(students);
    //return(clicked_id);
}
*/


/*
const filterstudentsEvent = (event) => {
    const buttonID = event.target.id;
    const inp = document.getElementById("fullName").value;
    console.log(buttonID);

    console.log("you call the event");
    console.log(inp);
    console.log(buttonID);
    let index = students.length;
    let tempStudentCollection = [];
    tempStudentCollection = students;
    students.push({name: inp, house: "This is house of " + inp});
    console.log(students);
    //tempStudentCollection[index].name = inp;
    //tempStudentCollection[index].house = "This is the same house";
    //tempStudentCollection[house].push("this is a house");
    console.log(tempStudentCollection);
    //sortObject(students);
    students.sort((a, b) => (a.name > b.name) ? 1 : -1)

    buildStudentCards(students);
    //tempStudentCollection[0].name = inp;
    //tempStudentCollection[0].house = "Nice house";
    console.log(tempStudentCollection);
}
*/

/* // I start this I keep for notes!!! ...
const deleteStudentsEvent = (event) => {
    console.log("you call the event");
    const buttonID = event.target.id;
    const inp = document.getElementById("fullName").value;
    console.log(buttonID);
    let x = document.getElementsByName(buttonID(event.target.name));
    console.log(x);
    console.log(inp);
    let index = students.length;
    let tempStudentCollection = [];
    for (let i = 0; i < students.length; i++){
        //tempStudentCollection
    }
}


*/