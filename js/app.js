// Triangle
function triangle() {
  const base = document.getElementById("base");
  const baseValue = base.value;

  const height = document.getElementById("height");
  const heightValue = height.value;

  const area = 0.5 * baseValue * heightValue;

  const calculateDisplay = (document.getElementById(
    "triangle"
  ).innerHTML = `Triangle ${area}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);
  base.value = "";
  height.value = "";
}

// Rectangle 
function rectangle(){
    const recWidth = document.getElementById("rec-width");
    const recWidthValue = recWidth.value;

    const recHeight = document.getElementById("rec-height");
    const recHeightValue = recHeight.value;

const area = recWidthValue * recHeightValue;
    const calculateDisplay = (document.getElementById(
        "rectangle"
      ).innerHTML = `Rectangle ${area}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);
    recWidth.value="";
    recHeight.value="";
}

// parallelogram
function parallelogram(){
    const parBase = document.getElementById("par-base").innerText;
    const parHeight = document.getElementById("par-height").innerText;
    const area = parBase * parHeight;
    const calculateDisplay = (document.getElementById(
        "parallelogram"
      ).innerHTML = `paralle ${area}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);
    
}

//Rhombus
function rhombus(){
    const rhomP1= document.getElementById("rhom-d1").innerText;
    const rhom2= document.getElementById(("rhom-d2")).innerText;
    const area = 0.5 * rhomP1 * rhom2;
    const calculateDisplay = (document.getElementById(
        "rhombus"
      ).innerHTML = `Rhombus ${area}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);
}

//Pentagon
function pentagon(){
    const penP= document.getElementById("pen-p").innerText;
    const penb= document.getElementById("pen-b").innerText;
    const area = 0.5 * penP * penb;
    const calculateDisplay = (document.getElementById(
        "pentagon"
      ).innerHTML = `Pentagon ${area}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);
}

//Ellipse
function ellipse(){
    const elliA= document.getElementById("elli-a").innerText;
    const elliB = document.getElementById("elli-b").innerText;
    const area = 3.14 * elliA * elliB;
    const areaToFiexd = area.toFixed(2)

    const calculateDisplay = (document.getElementById(
        "ellipse"
      ).innerHTML = `Ellipse ${areaToFiexd}cm <sup>2</sup> <button id="btn-cal">Convert to m <sup>2</sup></button>`);

}