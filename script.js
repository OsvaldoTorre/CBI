async function loadFile(file) {
  // Se carga el archivo
  let result = false;
  let text = await file.text();
  let lineas = text.replace(" ", "").split("\r\n"); //lineas[1] = una linea del txt
  if (lineas.length != 0) {
    result = true;
    cargarTabla(lineas);
  }
  return result;
}

let word = [];
let clases = [];

function cargarTabla(lineas) {
  // Se separan las lineas en elementos
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

function inicio() {
  media(word);
}

function fDensidad(media, varianza) {
  res = (1 / (varianza * (Math.sqrt(2 * Math.PI)))) * Math.exp((-(1 / 2)) * (Math.pow(((X - media) / varianza), 2)));
}

function media(patrones) {
  cds0= 0, cds1= 0, cds2= 0, cds3 = 0;
  cdc0= 0, cdc1= 0, cdc2= 0, cdc3 = 0;
  cdv0= 0, cdv1= 0, cdv2= 0, cdv3 = 0;

  for (let fila = 0; fila < patrones.length; fila++) {

    for (let celda = 0; celda < patrones[fila].length; celda++) {
      if (fila <= 49) {
        num = parseFloat(patrones[fila][celda]);
        //setosa
        if (celda == 0) {
          cds0 = cds0 + num;

        } else if (celda == 1) {
          cds1 = cds1 + num;

        } else if (celda == 2) {
          cds2 = cds2 + num;

        } else if (celda == 3) {
          cds3 = cds3 + num;

        }

      } else if (fila > 49 && fila <= 99) {
        //color
        if (celda == 0) {
          cdc0 = cdc0 + num;

        } else if (celda == 1) {
          cdc1 = cdc1 + num;

        } else if (celda == 2) {
          cdc2 = cdc2 + num;

        } else if (celda == 3) {
          cdc3 = cdc3 + num;

        }

      } else if (fila >= 99 && fila <= 149) {
        //virginica
        if (celda == 0) {
          cdv0 = cdv0 + num;

        } else if (celda == 1) {
          cdv1 = cdv1 + num;

        } else if (celda == 2) {
          cdv2 = cdv2 + num;

        } else if (celda == 3) {
          cdv3 = cdv3 + num;

        }

      }
    }

  }

  mediaC0S = cds0 / 50
  mediaC1S = cds1 / 50
  mediaC2S = cds2 / 50
  mediaC3S = cds3 / 50

  mediaC0C = cds0 / 50
  mediaC1C = cds1 / 50
  mediaC2C = cds2 / 50
  mediaC3C = cds3 / 50

  mediaC0V = cds0 / 50
  mediaC1V = cds1 / 50
  mediaC2V = cds2 / 50
  mediaC3V = cds3 / 50

  localStorage.setItem('ms1',mediaC0S);
  localStorage.setItem('ms2',mediaC1S);
  localStorage.setItem('ms3',mediaC2S);
  localStorage.setItem('ms4',mediaC3S);

  localStorage.setItem('mc1',mediaC0C);
  localStorage.setItem('mc2',mediaC1C);
  localStorage.setItem('mc3',mediaC2C);
  localStorage.setItem('mc4',mediaC3C);

  localStorage.setItem('mv1',mediaC0V);
  localStorage.setItem('mv2',mediaC1V);
  localStorage.setItem('mv3',mediaC2V);
  localStorage.setItem('mv4',mediaC3V);

}

function varianza(media) {
  for (let fila = 0; fila < patrones.length; fila++) {

    for (let celda = 0; celda < patrones[fila].length; celda++) {

      if (fila <= 49) {
        num = parseFloat(patrones[fila][celda]);
        //setosa
        if (celda == 0) {
          c1s = Math.pow((num-media),2);

        } else if (celda == 1) {
          c2s = Math.pow((num-media),2);

        } else if (celda == 2) {
          c3s = Math.pow((num-media),2);

        } else if (celda == 3) {
          c4s = Math.pow((num-media),2);
        }

        //Varianza Setosa
        localStorage.setItem('vs1',c1s);
        localStorage.setItem('vs2',c2s);
        localStorage.setItem('vs3',c3s);
        localStorage.setItem('vs4',c4s);

 1     } else if (fila > 49 && fila <= 99) {
        //color
        if (celda == 0) {
          c1c = Math.pow((num-media),2);

        } else if (celda == 1) {
          c2c = Math.pow((num-media),2);

        } else if (celda == 2) {
          c3c = Math.pow((num-media),2);

        } else if (celda == 3) {
          c4c = Math.pow((num-media),2);
        }

        localStorage.setItem('vc1',c1c);
        localStorage.setItem('vc2',c2c);
        localStorage.setItem('vc3',c3c);
        localStorage.setItem('vc4',c4c);

      } else if (fila >= 99 && fila <= 149) {
        //virginica
        if (celda == 0) {
          c1v = Math.pow((num-media),2);

        } else if (celda == 1) {
          c2v = Math.pow((num-media),2);

        } else if (celda == 2) {
          c3v = Math.pow((num-media),2);

        } else if (celda == 3) {
          c4v = Math.pow((num-media),2);
        }

        localStorage.setItem('vv1',c1v);
        localStorage.setItem('vv2',c2v);
        localStorage.setItem('vv3',c3v);
        localStorage.setItem('vv4',c4v);

      }
    }

  }
}
