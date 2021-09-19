
const openPops = document.querySelectorAll("[data-open]")
const closePops = document.querySelectorAll("[data-close]")
const body = document.querySelector("body")
const entry = document.querySelectorAll(".entry-container")

for (const pop of openPops){
  pop.addEventListener('click', togglePop, bodyScrollLock.disableBodyScroll(entry))
}

for (const close of closePops){
  close.addEventListener('click', closePop, bodyScrollLock.enableBodyScroll(entry))
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




