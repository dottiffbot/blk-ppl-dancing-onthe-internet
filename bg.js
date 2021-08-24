const videobg = document.querySelector('#video-bg')
const iconCont = document.querySelector('.icon')

const currentDate = new Date()
const hours = currentDate.getHours()

const dayVideo = "./assets/SkyAndCloudsh264.mp4"
const nightVideo = "https://cdn.glitch.com/039decf5-b783-4bb1-8c23-f6aa9c13e1b2%2Fstars.mp4?v=1628287039466"

const dayIcon = "./assets/sun-icon.png"
const nightIcon = "./assets/moon-icon.png"

const sunIcon = document.createElement('img')
sunIcon.src = dayIcon

const moonIcon = document.createElement('img')
moonIcon.src = nightIcon

const sunny = document.createElement('video')

	    sunny.src = dayVideo
		sunny.autoplay = true
		sunny.loop = true

const starry = document.createElement('video')
		starry.src = nightVideo
		starry.autoplay = true
		starry.loop = true





const changeBg = function(){
	if (7 <= hours && hours < 20){
	
	videobg.appendChild(sunny)
	document.body.classList.add('day')
	
	} else {

		videobg.appendChild(starry)
		document.body.classList.add('night')
	
	
	}
}


setInterval(function(){
	changeBg()
	
}, 1000)