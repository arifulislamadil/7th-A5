//triangle
document.getElementById("triangle").addEventListener("click",function(){

    // get data from html using id 
    const triangleName = document.getElementById("triangle-name").innerText;
    const triangleBaseInput = document.getElementById("tri-base");
    const triangleBaseValue = triangleBaseInput.value;
    const triangleHeightInput = document.getElementById("tri-height");
    const triangleHeightValue = triangleHeightInput.value;
    const totalArea = triangleBaseValue * triangleHeightValue;

    // get parent container 
    const container = document.getElementById("table-container");
    // add to cart
    const tr=document.createElement("tr");
    tr.innerHTML = `
    <td>${1}</td>
    <td>${triangleName}</td>
    <td>${totalArea} cm <sup>2</sup></td>
    <button id="btn-cal">Convert to m <sup>2</sup></button>
    `;

    container.appendChild(tr)
    triangleBaseInput.value = "";
    triangleHeightInput.value = "";
});

