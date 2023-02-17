// let serial = 0;

// // First Card ---------------------------------
// document.getElementById('btn-first-card').addEventListener('click',function(){
//   serial +=1;
//     const titleName = getInnerText('title-first-card');
//     const baseValue = getFieldValue('first-input');
//     const heightValue = getFieldValue('Second-input');
//     const area = 0.5*baseValue*heightValue;

//     displayData(titleName,area);
// });

// // // Second Card ---------------------------------
// document.getElementById('btn-second-card').addEventListener('click',function(){
//   serial +=1;
//     const titleName = getInnerText('title-second-card');
//     const widthValue = getFieldValue('first-input-second-card');
//     const lengthValue = getFieldValue('Second-input-second-card');
//     const area = widthValue*lengthValue;

//     displayData(titleName,area);
// }) 

// // // Third Card --------------------------------------
// document.getElementById('btn-third-card').addEventListener('click',function(){
//     serial +=1;
//     const titleName = getInnerText('title-third-card')
//     const baseValue = getInnerText('base-innerText-parallelogram');
//     const heightValue = getInnerText('height-Text-parallelogram');

//     console.log(baseValue, heightValue)
//     const area = parseInt(baseValue)* parseInt(heightValue);

//     displayData(baseValue,area);


// });

// // Common functions---------------------------------

// // function for getting inner text. 
// function getInnerText(id){
//     const name = document.getElementById(id).innerText;
//     return name;
// }

// // function for getting input field value. 
// function getFieldValue(id){
//     const value = document.getElementById(id).value;
//     return value;
// } 

// // function for display data.
// function displayData(nameOfShape, calculation){
//     const container = document.getElementById('table-container');
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${serial}</td>
//     <td>${nameOfShape}</td>
//     <td>${calculation}</td>
//     <td>
//     <button class="btn btn-sm btn-cyan-700" >Covert to m <sup>2</sup></button>
//     </td>
//     `;
//     container.appendChild(tr);
//     // document.getElementById().innerText = serial
// }


let serial = 0;

// First Card ---------------------------------
document.getElementById('btn-first-card').addEventListener('click', function() {
  serial += 1;
  const titleName = getInnerText('title-first-card');
  const baseValue = getFieldValue('first-input');
  const heightValue = getFieldValue('Second-input');
  const area = 0.5 * baseValue * heightValue;

  displayData(titleName, area);
});

// Second Card ---------------------------------
document.getElementById('btn-second-card').addEventListener('click', function() {
  serial += 1;
  const titleName = getInnerText('title-second-card');
  const widthValue = getFieldValue('first-input-second-card');
  const lengthValue = getFieldValue('Second-input-second-card');
  const area = widthValue * lengthValue;

  displayData(titleName, area);
});

//Third Card --------------------------------------
document.getElementById('btn-third-card').addEventListener('click',function(){
    serial +=1;
    const titleName = getInnerText('title-third-card')
    const baseValue = getInnerText('base-innerText-parallelogram');
    const heightValue = getInnerText('height-Text-parallelogram');
    const area = parseInt(baseValue)* parseInt(heightValue);

    displayData(titleName,area);
});

//Fourth Card --------------------------------------
document.getElementById('btn-fourth-card').addEventListener('click',function(){
    serial +=1;
    const titleName = getInnerText('title-fourth-card')
    const baseValue = getInnerText('base-innerText-rhombus');
    const heightValue = getInnerText('height-innerText-rhombus');
    const area = 0.5* parseInt(baseValue)* parseInt(heightValue);

    displayData(titleName,area);
});



// Common functions---------------------------------

// function for getting inner text. 
function getInnerText(id) {
  const name = document.getElementById(id).innerText;
  return name;
}

// function for getting input field value. 
function getFieldValue(id) {
  const value = document.getElementById(id).value;
  return value;
} 

// function for display data.
function displayData(nameOfShape, calculation) {
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfShape}</td>
    <td>${calculation + 'cm'}</td>
    <td>
    <button class="btn btn-sm btn-cyan-700" >Covert to m <sup>2</sup></button>
    </td>
  `;
  container.appendChild(tr);
}
