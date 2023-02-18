let serial = 0;

//Random Color Generate
function randomColor(random){
    document.getElementById(random).addEventListener("mouseenter", function(){
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor=randomColor;
    })
}
    randomColor("random-color-one")
    randomColor("random-color-two");
    randomColor("random-color-three");
    randomColor("random-color-four");
    randomColor("random-color-five");
    randomColor("random-color-six");

    
// common function for triangle and rectangle
function triangleRectangle(number, title, base, height) {
 
  // get data from html using id
  const nameText = document.getElementById(title).innerText;
  const inputBase = document.getElementById(base);
  const baseValue = inputBase.value;
  const inputHeight = document.getElementById(height);
  const heightValue = inputHeight.value;
  const totalArea = number * parseInt(baseValue) * parseInt(heightValue);

  if (inputBase.value < 0 || inputHeight.value < 0 || inputBase.value.length == 0 || inputHeight.value.length == 0 ) {
    alert("Please input a positive number and not less then zero");
  }
   else {
    serial += 1;
    // get parent container
    const container = document.getElementById("table-container");
    // add to cart
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameText}</td>
    <td>${totalArea} cm <sup>2</sup></td>
    <button id="btn-cal">Convert to m <sup>2</sup></button>
    `;

    container.appendChild(tr);
  }
  inputBase.value = "";
  inputHeight.value = "";
}

//triangle
document.getElementById("triangle").addEventListener("click", function () {
  triangleRectangle(0.5, "triangle-name", "tri-base", "tri-height");
});

//rectangle
document.getElementById("rectangle").addEventListener("click", function () {
  triangleRectangle(1, "rectangle-name", "rec-width", "rec-height");
});

// common function for parallelogram, Rhombus ,Pentagon, Ellipse
function commonFunc(number, title, base, height) {
  serial += 1;
  const nameText = document.getElementById(title).innerText;
  const parBase = document.getElementById(base).innerText;
  const parHeight = document.getElementById(height).innerText;
  const area = number * parBase * parHeight;
  console.log(1 * parBase * parHeight);

  // get parent container
  const container = document.getElementById("table-container");
  // add to cart
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameText}</td>
    <td>${area.toFixed(2)} cm <sup>2</sup></td>
    <button id="btn-cal">Convert to m <sup>2</sup></button>
    `;

  container.appendChild(tr);
}

// parallelogram
document.getElementById("parallelogram").addEventListener("click", function () {
  commonFunc(1, "para-text", "par-base", "par-height");
});
//Rhombus
document.getElementById("rhombus").addEventListener("click", function () {
  commonFunc(0.5, "rhombus-text", "rhom-d1", "rhom-d2");
});
//Pentagon
document.getElementById("pentagon").addEventListener("click", function () {
  commonFunc(0.5, "pen-text", "pen-p", "pen-b");
});

//Ellipse
document.getElementById("ellipse").addEventListener("click", function () {
  commonFunc(3.14, "ellip-text", "elli-a", "elli-b");
});
