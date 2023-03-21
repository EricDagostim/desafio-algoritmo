window.addEventListener('load', function() {
    // Seu código aqui
    fetch('original.txt')
    .then(response => response.text())
      .then(text => {
        const rows = text.trim().split('\n');
        const matriz = [];
        for (let i = 0; i < rows.length; i++) {
          const cols = rows[i].split(' ');
          matriz.push(cols);
        }
        const container = document.getElementById('matriz');
        for (let i = 0; i < matriz.length; i++) {
          const row = document.createElement('div');
            row.classList.add('row');
          for (let j = 0; j < matriz[i].length; j++) {
            const cell = document.createElement('div');
            cell.innerHTML = matriz[i][j];
            if (matriz[i][j] == 0) {
              cell.classList.add('zero');
            } else if (matriz[i][j] == 1) {
              cell.classList.add('one');
            } else if (matriz[i][j] == 3) {
              cell.classList.add('three');
            } else if (matriz[i][j] == 4) {
              cell.classList.add('four');
            }
            cell.classList.add('element-number');
            row.appendChild(cell);
          }
          container.appendChild(row);
        }
      });
  });
