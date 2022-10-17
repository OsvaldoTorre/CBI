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

function fDensidad(media,varianza) {
  res=(1/(varianza*(Math.sqrt(2*Math.PI))))*Math.exp((-(1/2))*(Math.pow(((X-media)/varianza),2)));
}

function media(patrones) {
  cds0,cds1,cds2,cds3=0;
  cdc0,cdc1,cdc2,cdc3=0;
  cdv0,cdv1,cdv2,cdv3=0;

  for (let fila = 0; fila < patrones.length; fila++) {

    for (let celda = 0; celda < patrones[fila].length; celda++) {
        if (fila<=49) {
          //setosa
          if (celda==0) {
            cds0=cds0+patrones[fila][celda];
  
          }else if (celda==1) {
            cds1=cds1+patrones[fila][celda];
  
          }else if (celda==2) {
            cds2=cds2+patrones[fila][celda];
  
          }else if (celda==3) {
            cds3=cds3+patrones[fila][celda];
  
          }

        } else if (fila>49&&fila<=99) {
          //color
          if (celda==0) {
            cdc0=cdc0+patrones[fila][celda];
  
          }else if (celda==1) {
            cdc1=cdc1+patrones[fila][celda];
  
          }else if (celda==2) {
            cdc2=cdc2+patrones[fila][celda];
  
          }else if (celda==3) {
            cdc3=cdc3+patrones[fila][celda];
  
          }

        } else if (fila >= 99&& fila<=149) {
          //virginica
          if (celda==0) {
            cdv0=cdv0+patrones[fila][celda];
  
          }else if (celda==1) {
            cdv1=cdv1+patrones[fila][celda];
  
          }else if (celda==2) {
            cdv2=cdv2+patrones[fila][celda];
  
          }else if (celda==3) {
            cdv3=cdv3+patrones[fila][celda];
  
          }

        }
    }
    
  }

  mediaC0S = cds0/50
  mediaC1S = cds1/50
  mediaC2S = cds2/50
  mediaC3S = cds3/50

  mediaC0C = cds0/50
  mediaC1C = cds1/50
  mediaC2C = cds2/50
  mediaC3C = cds3/50

  mediaC0V = cds0/50
  mediaC1V = cds1/50
  mediaC2V = cds2/50
  mediaC3V = cds3/50

}
