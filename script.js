// script.js
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');

  // Set canvas size to match its display size
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  // Cover the canvas with a gold texture
  const goldTexture = new Image();
  goldTexture.src = 'gold.jpg'; //image I saved in the folder
    //adding image as an overlay
  goldTexture.onload = () =>{
    ctx.drawImage(goldTexture, 0, 0, canvas.width, canvas.height);
  };
  
  let isDrawing = false;

  //changing the scratch effect for image
  canvas.addEventListener('mousedown', () =>{
    isDrawing = true;
  });

  canvas.addEventListener('mouseup', ()=> {
    isDrawing = false;
    ctx.beginpath();
  });
  canvas.addEventListener('mousemove', scratch);
  function scratch(event){
    if(!isDrawing) return;
  }
  canvas.addEventListener('touchstart', () =>{
    isDrawing = true;
  });
  canvas.addEventListener('touchend', () =>{
    isDrawing = false;
    ctx.beginpath();
  });
  canvas.addEventListener('touchmove', scratch)
function scratch(event) {
  if (!isDrawing) return;

  // Calculate position within the canvas
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX || event.touches[0].clientX) - rect.left;
  const y = (event.clientY || event.touches[0].clientY) - rect.top;

  // Erase a circle of the scratch color where the user interacts
  ctx.globalCompositeOperation = 'destination-out';
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();

  // Reset the composite operation to default
  ctx.globalCompositeOperation = 'source-over';
}

