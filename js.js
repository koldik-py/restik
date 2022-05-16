function menu() {
	let visible = false,
			menuHTML = document.querySelector('.navbar__img--midlle'),
			menuFly = document.querySelector('.middle__container');

	menuHTML.addEventListener('click', (e) => {

		visible ? 
		( menuHTML.classList.remove('navbar__img--rotate'),
			menuFly.classList.remove('middle__container--visible'),
			visible = !visible) 
						: 
		( menuHTML.classList.add('navbar__img--rotate'),
			menuFly.classList.add('middle__container--visible'),
			visible = !visible)

	})
}

menu()

class Slider {
	constructor(slideHTML) {
		this.mainHTML = document.querySelector(slideHTML),
		this.panoHTML = this.mainHTML.querySelector(`${slideHTML}__slides`),
		this.nextHTML = this.mainHTML.querySelector(`${slideHTML}__next`),
		this.downHTML = this.mainHTML.querySelector(`${slideHTML}__down`),
		this.cardHTML = this.mainHTML.querySelector(`${slideHTML}__slide`),
		this.visibleHTML = this.mainHTML.querySelector(`${slideHTML}__visible`),
		this.cardsHTML = this.mainHTML.querySelectorAll(`${slideHTML}__slide`),

		this.visibleW = this.visibleHTML.offsetWidth,
		this.cardW = this.cardHTML.offsetWidth,
		this.panoW = this.panoHTML.offsetWidth,

		this.slideVisible =  Math.floor(this.visibleW / this.cardW),
		this.marginSlide = ((this.visibleW % this.cardW)/(this.slideVisible - 1)),

		this.slideTX = this.cardW + this.marginSlide,


		this.go()
		window.addEventListener('resize', (e) => this.go())
	}
	downEvent = () => {
		if (this.slideTX > 1) {
			this.panoHTML.style.transform = `translateX(${-(this.slideTX - (this.cardW + this.marginSlide))}px)`
			this.slideTX = this.slideTX - (this.cardW + this.marginSlide)
		}

	}
	down() {
		this.downHTML.addEventListener('click', this.downEvent)
	}
	nextEvent = () => {
		if ((this.slideTX + this.cardW) < ((this.cardsHTML.length - this.slideVisible)* (this.cardW + this.marginSlide))) {
			this.panoHTML.style.transform = `translateX(${-(this.slideTX + (this.cardW + this.marginSlide))}px)`
			this.slideTX = this.slideTX + (this.cardW + this.marginSlide)
		}
	}
	next() {
		this.nextHTML.addEventListener('click', this.nextEvent)
	}
	clear() {
		this.downHTML.removeEventListener('click', this.downEvent)
		this.nextHTML.removeEventListener('click', this.nextEvent)
	}
	go() {
		this.resize()
		this.clear()
		this.down()
		this.next()
		switch(this.slideVisible){
			case 3: 
				this.cardsHTML.forEach(e => e.style.marginRight = `${this.marginSlide}px`)
				this.panoHTML.style.transform = `translateX(${-this.slideTX}px)`;
				break;
			case 2: 
				this.cardsHTML.forEach(e => e.style.marginRight = `${this.marginSlide}px`)
				this.panoHTML.style.transform = `translateX(${-this.slideTX}px)`;
				break;
			case 1: 
				this.cardsHTML.forEach(e => e.style.marginRight = `${this.marginSlide}px`)
				this.panoHTML.style.transform = `translateX(${-this.slideTX}px)`;
				break;
		}
	}

	resize() {
		this.visibleW = this.visibleHTML.offsetWidth,
		this.cardW = this.cardHTML.offsetWidth,
		this.panoW = this.panoHTML.offsetWidth;
		this.slideValue()
		this.margin()
	}
	slideValue () {
		if (this.visibleW == 1008) {
			this.slideVisible = 3
		} 
		else if (this.visibleW > 688) {
			this.slideVisible = 2
		} 
		else {
			this.slideVisible = 1
		} 
	}
	margin() {
		switch(this.slideVisible){
			case 3:
				this.marginSlide = Math.round(((this.visibleW % this.cardW)/(this.slideVisible - 1)))
				this.slideTX = this.cardW + this.marginSlide
				break;
			case 2: 
				this.marginSlide = Math.round(((this.visibleW -(this.cardW*this.slideVisible))/(this.slideVisible - 1)) / 2)
				this.slideTX = this.cardW + (this.marginSlide / 2)
				break;
			case 1: 
				this.marginSlide = Math.round(((this.visibleW - this.cardW)/ 2))
				this.slideTX = (this.cardW * Math.floor(this.cardsHTML.length/2)) + (this.marginSlide * (Math.floor(this.cardsHTML.length/2)-1))
				break;
		}
	}
}

x = new Slider('.slider')


