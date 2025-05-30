let table = 
  "<table><tr><th>Sudut</th><th>sin</th><th>cos</th><th>tan</th></tr>";
  
for(let angle = 0; angle <= 360; angle += 30) {
  const rad = angle * Math.PI / 180;
  const sin = Math.sin(rad).toFixed(1);
  const cos = Math.cos(rad).toFixed(1);
  const tan = (angle % 180 === 90) ? "∞" : Math.tan(rad).toFixed(4);
  table += `<tr>
    <td>${angle}°</td>
    <td>${sin}</td>
    <td>${cos}</td>
    <td>${tan}</td>
    </tr>`;
  }
  
  table += "</table>";
  document.getElementById("table").innerHTML = table;