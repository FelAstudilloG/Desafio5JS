const listaTareas = document.querySelector(".tareas");
const botonnuevo = document.querySelector(".agregar");
const total = document.querySelector("#total");
const listo = document.querySelector("#listo");
const valor = document.querySelector(".nuevoimput");
let tareas = [
  { id: 1, name: "Aprender sobre JS.", completed: false },
  { id: 2, name: "Aprender sobre Certificados SSL.", completed: false },
  { id: 3, name: "Aprender sobre ReactJS", completed: false },
];
botonnuevo.addEventListener("click", () => {
  if(tareas.value === ""){
    alert('Agrega un nombre para la tarea');
    return;
  }
  if(tareas.length != 0) {
    const idMapping = tareas[tareas.length-1].id;
    const nuevaTarea = { id: idMapping+1, name: valor.value, completed: false }
    tareas.push(nuevaTarea);
  } else {
    const nuevaTarea = { id: 1, name: valor.value, completed: false }
    tareas.push(nuevaTarea);
  }
  valor.value = "";
  hacertareas();
});

/*const taskList = document.querySelector(".tasks");
const addButton = document.querySelector(".add");
const total = document.querySelector("#total");
const done = document.querySelector("#done");
const addValue = document.querySelector(".addInput");*/

borrarTarea = (id) => {
  const idtarea = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(idtarea, 1);
  hacertareas();
}

 cambioestadotarea = (id) => {  
  const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
  if(tareas[tareaIndex].completed == false) {
    const newObject = { id: tareas[tareaIndex].id, name: tareas[tareaIndex].name, completed: true };
    tareas.splice(tareaIndex, 1, newObject);
  } else {
    const newObject = { id: tareas[tareaIndex].id, name: tareas[tareaIndex].name, completed: false };
    tareas.splice(tareaIndex, 1, newObject);
  }
  hacertareas();
}

const hacertareas = () => {
  let html = "";
  let inputCheck ="";
  let cuentaterminado= [];
  for (const tarea of tareas) {
    inputCheck = tarea.completed ? 
    `<input class="checkbox" type="checkbox" onclick="cambioestadotarea(${tarea.id})" checked="true">`
    : `<input class="checkbox" type="checkbox" onclick="cambioestadotarea(${tarea.id})" >`;
    html += `
      <tr>
        <td>${tarea.id}</td>
        <td class="name">${tarea.name}</td>
        <td><button class="delete" onclick="borrarTarea(${tarea.id})"> x </button></td>
        <td>${inputCheck}</td>
      </tr> 
    `;
    if(tarea.completed === true) {
      cuentaterminado.push(tarea);
    }
  }
  listaTareas.innerHTML = html;
  total.innerHTML = tareas.length;
  listo.innerHTML = cuentaterminado.length;
}

hacertareas();

