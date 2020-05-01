console.log("connected!! sorting-hat");

const students = [
    {
        name: 'Kamiran01',
        house: 'green house',
    },
    {
        name: 'Kamiran02',
        house: 'green house',
    },
    {
        name: 'Kamiran03',
        house: 'green house',
    },    
]

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}
  
const buildStudentCards = (studentsCollection) => {
    let domStr ='';
    //const myCat = getEleme
    for (let i = 0; i < studentsCollection.length; i++) {
        domStr +=`
        <div class="card text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${studentsCollection[i].name}</h5>
          <p class="card-text">${studentsCollection[i].house}</p>
          <a id = "deleteMe${i}" href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>        
        `;
    }
    printToDom('#student', domStr);          
}  
  
  console.log("before myTestFun");
  
  
  
const filterstudentsEvent = (event) => {
    const buttonID = event.target.id;
    const inp = document.getElementById("fullName").value;

    console.log("you call the event");
    console.log(inp);
    let index = students.length;
    let tempStudentCollection = [];
    //for (let i = 0; i < students.length; i++){
    //    tempStudentCollection
    // }
    tempStudentCollection = students;
    tempStudentCollection.push(students[index-1]);
    console.log(studentCollection);
    tempStudentCollection[index].name = inp;
    tempStudentCollection[index].house = "This is the same house";
    //tempStudentCollection[house].push("this is a house");
    console.log(tempStudentCollection);
    buildStudentCards(tempStudentCollection);
    //tempStudentCollection[0].name = inp;
    //tempStudentCollection[0].house = "Nice house";
    console.log(tempStudentCollection);

    //tempStudentCollection[1].name = 'MeMo';
    //tempStudentCollection[1].house = "Nice house";    

  
    //if (buttonID === 'all') {
    //  buildStudentsCards(students);
    //  return;
    //}
  
    //for (let i = 0; i < students.length; i++) {
    //  if (pets[i].type === buttonID) {
    //    tempPetCollection.push(students[i]);
    //  }
    //}
    //tempStudentCollection.push("");
}
  
const deleteStudentsEvent = (event) => {
    const buttonID = event.target.id;
    const inp = document.getElementById("fullName").value;

    console.log("you call the event");
    console.log(inp);
    let index = students.length;
    let tempStudentCollection = [];
    for (let i = 0; i < students.length; i++){
        tempStudentCollection
    }
    tempStudentCollection = students;
    tempStudentCollection.push(students[index-1]);
    tempStudentCollection[index].name = inp;
    tempStudentCollection[index].house = "This is the same house";
    //tempStudentCollection[house].push("this is a house");
    console.log(tempStudentCollection);
    tempStudentCollection
    buildStudentCards(tempStudentCollection);
    //tempStudentCollection[0].name = inp;
    //tempStudentCollection[0].house = "Nice house";
    console.log(tempStudentCollection);

    //tempStudentCollection[1].name = 'MeMo';
    //tempStudentCollection[1].house = "Nice house";    

  
    //if (buttonID === 'all') {
    //  buildStudentsCards(students);
    //  return;
    //}
  
    //for (let i = 0; i < students.length; i++) {
    //  if (pets[i].type === buttonID) {
    //    tempPetCollection.push(students[i]);
    //  }
    //}
    //tempStudentCollection.push("");
}

  const clickEvents = () => {
    //document.querySelector('#fullName').addEventListener('click', filterstudentsEvent);
    document.querySelector('#sortbtn').addEventListener('click', filterstudentsEvent);
    document.querySelector('#deleteMe0').addEventListener('click', deleteStudentsEvent);
    document.querySelector('#deleteMe1').addEventListener('click', deleteStudentsEvent);
    document.querySelector('#deleteMe2').addEventListener('click', deleteStudentsEvent);
    //document.querySelector('#dino').addEventListener('click', filterPetsEvent);
    //document.querySelector('#all').addEventListener('click', filterPetsEvent);
  }
  
  
  const init = () => {
    buildStudentCards(students);
    clickEvents();  
    //myTestFun(pets);
  }
  
  init();