
const openPops = document.querySelectorAll("[data-open]")
const closePops = document.querySelectorAll("[data-close]")
const body = document.querySelector("body")

for (const pop of openPops){
  pop.addEventListener('click', togglePop)
}

for (const close of closePops){
  close.addEventListener('click', closePop)
}


function togglePop(){
  const popId = this.dataset.open
  document.getElementById(popId).classList.toggle("open")
  body.classList.add('noscroll')
  window.scrollTo(0,0)

  
}

function closePop(){
  const popId = this.dataset.close
  document.getElementById(popId).classList.toggle("open")
  body.classList.remove('noscroll')
}



// if the popup 