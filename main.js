console.log("connected!! sorting-hat");

let students = [
    {
        name: 'Tammy01',
        house: 'green house',
        color: 'rr',
        imageUrl: '',
        id: 'Bamiran01',
    },
    {
        name: 'Sammy02',
        house: 'green house',
        color: 'rr',
        imageUrl: '',
        id: 'Kamiran02',
    },
    {
        name: 'Amy03',
        house: 'green house',
        color: 'rr',
        imageUrl: '',
        id: 'Aamiran03',
    },    
]

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


const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

let callMe = false;
//<img src="..." class="card-img-top" alt="...">
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
            studentsCollection[i].imageUrl = assignHouse[x].imageUrl;
        }
                       
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