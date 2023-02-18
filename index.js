// common function for triangle and rectangle
function triangleRectangle(title,base,height){
    // get data from html using id 
    const nameText = document.getElementById(title).innerText;
    const inputBase = document.getElementById(base);
    const baseValue = inputBase.value;
    const inputHeight = document.getElementById(height);
    const heightValue = inputHeight.value;
    const totalArea = baseValue * heightValue;

    // get parent container 
    const container = document.getElementById("table-container");
    // add to cart
    const tr=document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${nameText}</td>
    <td>${totalArea} cm <sup>2</sup></td>
    <button id="btn-cal">Convert to m <sup>2</sup></button>
    `;

    container.appendChild(tr)
    inputBase.value = "";
    inputHeight.value = "";
}


//triangle
document.getElementById("triangle").addEventListener("click",function(){
    triangleRectangle("triangle-name","tri-base","tri-height")
    
});

//rectangle
document.getElementById("rectangle").addEventListener("click",function(){
    triangleRectangle("rectangle-name","rec-width","rec-height")
    
});

// common function for parallelogram, Rhombus ,Pentagon, Ellipse 
function commonFunc(number,title,base,height){
    const nameText=document.getElementById(title).innerText;
    const parBase = document.getElementById(base).innerText;
    const parHeight = document.getElementById(height).innerText;
    const area = number* parBase * parHeight;
    console.log(1*parBase * parHeight);

    // get parent container 
    const container = document.getElementById("table-container");
    // add to cart
    const tr=document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${nameText}</td>
    <td>${area.toFixed(2)} cm <sup>2</sup></td>
    <button id="btn-cal">Convert to m <sup>2</sup></button>
    `;

    container.appendChild(tr)
    
}

// parallelogram
document.getElementById("parallelogram").addEventListener("click",function(){
    commonFunc(1,"para-text","par-base","par-height");
})
//Rhombus
document.getElementById("rhombus").addEventListener("click",function(){
    commonFunc(0.5,"rhombus-text","rhom-d1","rhom-d2");
})
//Pentagon
document.getElementById("pentagon").addEventListener("click",function(){
    commonFunc(0.5,"pen-text","pen-p","pen-b");
})

//Ellipse
document.getElementById("ellipse").addEventListener("click",function(){
    commonFunc(3.14,"ellip-text","elli-a","elli-b");
})




