const videobg = document.querySelector('#video-bg')

const currentDate = new Date()
const hours = currentDate.getHours()

const daySrc = './assets/SkyAndCloudsh264.mp4'
const nightSrc = './assets/stars.mp4'

const changeBg = function(){
	if (7 <= hours && hours < 20){
		videobg.appendChild(daySrc)
	} else {
		videobg.appendChild(nightSrc)
	}
}

setInterval(function(){
	changeBg()
}, 6000)