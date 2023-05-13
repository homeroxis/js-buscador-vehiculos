const appDiv = document.querySelector('#app');
const marca = document.querySelector('#marca');
const anio = document.querySelector('#anio');
const minPrice = document.querySelector('#min');
const maxPrice = document.querySelector('#max');
const color = document.querySelector('#color');

const cars = [
  {
    marca: 'Toyota',
    color: 'Rojo',
    precio: 25000,
    año: 2015,
  },
  {
    marca: 'Toyota',
    color: 'Azul',
    precio: 18000,
    año: 2016,
  },
  {
    marca: 'Honda',
    color: 'Plateado',
    precio: 30000,
    año: 2019,
  },
  {
    marca: 'BMW',
    color: 'Negro',
    precio: 22000,
    año: 2017,
  },
  {
    marca: 'Volkswagen',
    color: 'Blanco',
    precio: 15000,
    año: 2015,
  },
  {
    marca: 'BMW',
    color: 'Gris',
    precio: 40000,
    año: 2020,
  },
  {
    marca: 'Mercedes-Benz',
    color: 'Negro',
    precio: 35000,
    año: 2021,
  },
  {
    marca: 'Audi',
    color: 'Rojo',
    precio: 38000,
    año: 2022,
  },
  {
    marca: 'Hyundai',
    color: 'Azul',
    precio: 20000,
    año: 2014,
  },
  {
    marca: 'Hyundai',
    color: 'Plateado',
    precio: 23000,
    año: 2017,
  },
  {
    marca: 'Nissan',
    color: 'Blanco',
    precio: 21000,
    año: 2016,
  },
  {
    marca: 'Subaru',
    color: 'Negro',
    precio: 26000,
    año: 2013,
  },
  {
    marca: 'Mazda',
    color: 'Gris',
    precio: 19000,
    año: 2015,
  },
  {
    marca: 'Hyundai',
    color: 'Verde',
    precio: 32000,
    año: 2020,
  },
  {
    marca: 'Subaru',
    color: 'Plateado',
    precio: 28000,
    año: 2018,
  },
  {
    marca: 'Mercedes-Benz',
    color: 'Negro',
    precio: 42000,
    año: 2023,
  },
  {
    marca: 'Subaru',
    color: 'Rojo',
    precio: 150000,
    año: 2021,
  },
  {
    marca: 'Mercedes-Benz',
    color: 'Blanco',
    precio: 100000,
    año: 2022,
  },
  {
    marca: 'Mercedes-Benz',
    color: 'Gris',
    precio: 60000,
    año: 2020,
  },
];
const max = new Date().getFullYear();
const min = max - 10;

const formData = {
  marca: '',
  anio: '',
  min: '',
  max: '',
  color: '',
};

const onMarca = marca.addEventListener('change', (e) => {
  formData.marca = e.target.value;
  filterCars(cars);
});
const onAnio = anio.addEventListener('change', (e) => {
  formData.anio = parseInt(e.target.value);
  filterCars(cars);
});
const onMin = minPrice.addEventListener('change', (e) => {
  formData.min = e.target.value;
  filterCars(cars);
});
const onMax = maxPrice.addEventListener('change', (e) => {
  formData.max = e.target.value;
  filterCars(cars);
});
const onColor = color.addEventListener('change', (e) => {
  formData.color = e.target.value;
  filterCars(cars);
});

const showVehicles = (cars) => {
  clearHtml();
  const ul = document.createElement('ul');
  ul.classList.add('list-group');

  cars.forEach((car) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = `<b>Marca:</b> ${car.marca} - <b>Año:</b> ${car.año} - <b>Precio:</b> ${car.precio} - <b>Color:</b> ${car.color}`;
    ul.appendChild(li);
  });

  appDiv.appendChild(ul);
};

// Itera las marcas y devuelve SIN REPETIR
const carBrands = new Set();

cars.forEach((car) => {
  carBrands.add(car.marca);
});

carBrands.forEach((brand) => {
  const options = document.createElement('option');
  options.value = brand;
  options.textContent = brand;
  marca.appendChild(options);
});

const getOpsYears = () => {
  for (let i = max; i >= min; i--) {
    const options = document.createElement('option');
    options.value = i;
    options.textContent = i;
    anio.appendChild(options);
  }
};

const clearHtml = () => {
  if (appDiv.firstChild) {
    appDiv.removeChild(appDiv.firstChild);
  }
};

const filterCars = (cars) => {
  const result = cars
    .filter(filterMarca)
    .filter(filterAnio)
    .filter(filterMin)
    .filter(filterMax)
    .filter(filterColor);
  showVehicles(result);
  console.log(result.length);
  if (result.length === 0) {
    noResult();
  }
};

const filterMarca = (car) => {
  if (formData.marca) {
    return car.marca === formData.marca;
  }
  return car;
};

const filterAnio = (car) => {
  if (formData.anio) {
    return car.año === formData.anio;
  }
  return car;
};

const filterMin = (car) => {
  if (formData.min) {
    return car.precio >= formData.min;
  }
  return car;
};

const filterMax = (car) => {
  if (formData.max) {
    return car.precio <= formData.max;
  }
  return car;
};

const filterColor = (car) => {
  if (formData.color) {
    return car.color === formData.color;
  }
  return car;
};

const noResult = () => {
  clearHtml();
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-danger');
  alert.textContent = 'No hay resultados. Intente con otro filtro!';
  console.log(alert);
  appDiv.appendChild(alert);
};

getOpsYears();
showVehicles(cars);
