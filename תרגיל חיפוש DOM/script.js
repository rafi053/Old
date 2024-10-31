const cars = [
    {
      type: "Lamborghini Diabolo VT 6.0",
      price: "1000000$",
      color: "Red",
    },
    {
      type: "Mercedes",
      price: "100000$",
      color: "Red",
    },
    {
      type: "Honda",
      price: "20000$",
      color: "black",
    },
    {
      type: "Honda",
      price: "21000$",
      color: "blue",
    },
  ]


const input = document.querySelector("input")
input.addEventListener("input",(e)=>{
    const 
})



  function searchCars(){
    const div = document.createElement("div");
    div.innerText = cars.type;
    document.body.appendChild(div);
    console.log(div);
    
  }

  
  function myInput() {
    document.getElementById("input").innerText = cars.filter(searchCars);
  }