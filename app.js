// https://www.omnicalculator.com/health/corrected-mg

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const correctedmagnesiumRadio = document.getElementById('correctedmagnesiumRadio');
const patientsmagnesiumRadio = document.getElementById('patientsmagnesiumRadio');
const patientsalbuminRadio = document.getElementById('patientsalbuminRadio');

let correctedmagnesium;
let patientsmagnesium = v1;
let patientsalbumin = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

correctedmagnesiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Patient\'s magnesium';
  variable2.textContent = 'Patient\'s albumin';
  patientsmagnesium = v1;
  patientsalbumin = v2;
  result.textContent = '';
});

patientsmagnesiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Corrected magnesium';
  variable2.textContent = 'Patient\'s albumin';
  correctedmagnesium = v1;
  patientsalbumin = v2;
  result.textContent = '';
});

patientsalbuminRadio.addEventListener('click', function() {
  variable1.textContent = 'Corrected magnesium';
  variable2.textContent = 'Patient\'s magnesium';
  correctedmagnesium = v1;
  patientsmagnesium = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(correctedmagnesiumRadio.checked)
    result.textContent = `Corrected magnesium = ${computecorrectedmagnesium().toFixed(2)}`;

  else if(patientsmagnesiumRadio.checked)
    result.textContent = `Patient's magnesium = ${computepatientsmagnesium().toFixed(2)}`;

  else if(patientsalbuminRadio.checked)
    result.textContent = `Patient's albumin = ${computepatientsalbumin().toFixed(2)}`;
})

// calculation

// correctedmagnesium = patientsmagnesium + 0.005 * (40 - patientsalbumin)

function computecorrectedmagnesium() {
  return Number(patientsmagnesium.value) + 0.005 * (40 - Number(patientsalbumin.value));
}

function computepatientsmagnesium() {
  return Number(correctedmagnesium.value) - 0.005 * (40 - Number(patientsalbumin.value));
}

function computepatientsalbumin() {
  return 40 - ((Number(correctedmagnesium.value) - Number(patientsmagnesium.value)) / 0.005);
}