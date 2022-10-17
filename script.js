async function loadFile(file) {
  // Se carga el archivo
  let result = false;
  let text = await file.text();
  let lineas = text.replace(" ", "").split("\r\n"); //lineas[1] = una linea del txt
  if (lineas.length!=0) {
    result = true;
    cargarTabla(lineas);
  }
  return result;
}

function cargarTabla(lineas) {
  // Se separan las lineas en elementos
  let word = [];
  let clases = [];
  for (let index = 0; index < lineas.length; index++) {
    word.push(lineas[index].split(","));
    clases.push(word[index][word[index].length - 1]);
  }

  // Se obtienen las clases
  const claseLimpia = {};
  const unicos = clases.filter((indice) => {
    return claseLimpia.hasOwnProperty(indice)
      ? false
      : (claseLimpia[indice] = true);
  });

  addRow("tbody", word);
}

function addRow(tableID, elemn) {
  // Obtiene una referencia a la tabla
  var tableRef = document.getElementById(tableID);

  for (let index = 0; index < elemn.length; index++) {
    var newRow = tableRef.insertRow(index);

    for (let index2 = 0; index2 < elemn[index].length; index2++) {
      var newCell = newRow.insertCell(index2); // posicion de la CELDA

      if (index2 == 0) {
        var newNum = document.createTextNode(index); //#
        newCell.appendChild(newNum);
      } else if (index2 == 1) {
        var newPat = document.createTextNode(
          elemn[index].slice(0, elemn[index].length - 1)
        ); //Patron
        newCell.appendChild(newPat);
      } else if (index2 == 2) {
        var newCla = document.createTextNode(elemn[index][index2 + 2]); //Clase
        newCell.appendChild(newCla);
        break;
      }
    }
  }
}


