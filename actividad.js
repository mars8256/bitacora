const url = 'http://localhost:8080/actividad'

const txtId = document.getElementById('txtId')
const txtDescripcion = document.getElementById('txtDescripcion')


function fetchActividades(){
    fetch(url)
    .then(response => response.json())
    .then(data => loadTableData(data))
  }

function fetchSaveActividades(){
    var data = txtDescripcion.value
    console.log(data)
    fetch(url, {
        method: "POST",
        body: JSON.stringify({"descripcion" : data }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

    txtDescripcion.value = ""
    fetchActividades()
    
}

//   fetch('http://localhost:8080/actividad')
//   .then(response => response.json())
//   .then(data => console.log(data));

//   fetch('http://localhost:8080/actividad')
//   .then(response => response.json())
//   .then(data => loadTableData(data));

  function loadTableData(items){
    const table = document.getElementById('testBody')
    table.innerHTML = ''
    for(item in items){
        let row = table.insertRow();
        let idActividad = row.insertCell(0)
        idActividad.innerHTML = items[item].idActividad
        let descripcion = row.insertCell(1)
        descripcion.innerHTML = items[item].descripcion
        
    }
    
}
