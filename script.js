
const quote = document.getElementById('quote'); 
const button = document.getElementById('btn1'); 












const apiurl = "https://api.quotable.io/random"

async function famous(){
     const response = await fetch(apiurl); 
     var data = await response.json(); 
     console.log(data); 

    
        quote.innerHTML = data['content'];
      

     

}


button.addEventListener('click',()=>{
    changeColor();
    famous(); 
})

function getrandomcolor() {
    // Generate random values for R, G, and B channels
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Convert to hex format and concatenate
    var hexColor = "#" + r.toString(16).padStart(2, '0') +
                           g.toString(16).padStart(2, '0') +
                           b.toString(16).padStart(2, '0');

    return hexColor;
  }

  function changeColor() {
    
    var randomColor = getrandomcolor();
    button.style.backgroundColor = randomColor;
    quote.style.backgroundColor = randomColor;
  }



