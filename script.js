
const items = document.querySelectorAll('.video-item')

items.forEach(item =>{
	

	randomSize = (Math.floor(Math.random() * 2) + 2 ) * 100

	item.style.width = randomSize + "px"

		 console.log(randomSize)
})

const list = document.querySelector('ul')

for (let i = list.children.length;
	i >= 0 ; i --){
	list.appendChild(list.children[Math.random() * i | 0])
}




