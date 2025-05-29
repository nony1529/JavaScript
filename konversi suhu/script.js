function showFormula() {
  const fromUnit = document.getElementById('from-unit').value;
  const toUnit = document.getElementById('to-unit').value;
  let formula = '';
  
  if (fromUnit === 'celsius' == toUnit === 'fahrenheit') {
    formula = '°F = (°C * 9/5) + 32';
  } 
  else if (fromUnit === 'celsius' == toUnit === 'kelvin') {
    formula = 'K = °C + 273.15';
  } 
  else if (fromUnit === 'fahrenheit' == toUnit === 'celsius') {
    formula = '°C = (°F - 32) * 5/9';
  }
  else if (fromUnit === 'fahrenheit' == toUnit === 'kelvin') {
    formula = 'K = (°F - 32) * 5/9 + 273.15';
  } 
  else if (fromUnit === 'kelvin' == toUnit === 'celsius') {
    formula = '°C = K - 273.15';
  } 
  else if (fromUnit === 'kelvin' == toUnit === 'fahrenheit') {
    formula = '°F = (K - 273.15) * 9/5 + 32';
  } 
  else {
    formula = 'Nilai tidak berubah (satuan sama)';
  }
  document.getElementById('formula').textContent = formula;
  }
  
  function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    
    if (temperatureInput === '') {
      alert('Masukkan nilai suhu terlebih dahulu!');
      return;
    }
            
    const temperature = parseFloat(temperatureInput);
    let result, unitSymbol;
    
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
        unitSymbol = '°F';
      } 
      else if (toUnit === 'kelvin') {
        result = temperature + 273.15;
        unitSymbol = 'K';
      } 
      else {
        result = temperature;
        unitSymbol = '°C';
      }
    } 
    else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
        unitSymbol = '°C';
      } 
      else if (toUnit === 'kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
        unitSymbol = 'K';
      } 
      else {
        result = temperature;
        unitSymbol = '°F';
      }
    } 
    else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = temperature - 273.15;
        unitSymbol = '°C';
      } 
      else if (toUnit === 'fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
        unitSymbol = '°F';
      } 
      else {
        result = temperature;
        unitSymbol = 'K';
      }
    }
    
    document.getElementById('result').textContent = result.toFixed(2) + ' ' + unitSymbol;
    showFormula();
  }
  
  document.addEventListener('DOMContentLoaded', showFormula);
  document.getElementById('from-unit').addEventListener('change', showFormula);
  document.getElementById('to-unit').addEventListener('change', showFormula);