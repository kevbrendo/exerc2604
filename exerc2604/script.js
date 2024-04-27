async function fetchCargos() {
  const response = await fetch('https://kev123.free.beeceptor.com/cargo');
  const cargos = await response.json();

  const cargoSelect = document.getElementById('cargo');

  cargos.forEach(cargo => {
    const option = document.createElement('option');
    option.value = cargo.cargo;
    option.text = cargo.cargo;
    cargoSelect.appendChild(option);
  });

  cargoSelect.addEventListener('change', function() {
    const selectedCargo = this.value;
    const selectedCargoData = cargos.find(cargo => cargo.cargo === selectedCargo);

    if (selectedCargoData) {
      document.getElementById('cargoSalario').value = selectedCargoData.salario;
      document.getElementById('setorSigla').value = selectedCargoData.setorSigla;
      document.getElementById('setorNome').value = selectedCargoData.setorNome;
      document.getElementById('convenio').value = "";  // Clear convenio selection initially
      // ... Update other fields based on selectedCargoData
    } else {
      console.error('Cargo data not found:', selectedCargo);
      // Handle case where cargo data is missing (optional)
    }
  });
}

fetchCargos();