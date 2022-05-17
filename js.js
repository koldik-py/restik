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

let navigations = (...arguments) => {
	arguments.forEach( i => {
		let btn = document.querySelectorAll(i),
				head = document.querySelector('.header'),
				history = document.querySelector('.history'),
				menuHTML = document.querySelector('.menu'),
				special = document.querySelector('.special');

		btn[0].addEventListener('click', () => head.scrollIntoView())
		btn[1].addEventListener('click', () => menuHTML.scrollIntoView())
		btn[2].addEventListener('click', () => history.scrollIntoView())
		btn[3].addEventListener('click', () => special.scrollIntoView())
	})
}

navigations('.navbar__li', '.middle__li')

let btn = document.querySelectorAll('.btn'),
		menuHTML = document.querySelector('.menu');

btn[2].addEventListener('click', () => menuHTML.scrollIntoView())


class Btn {
	constructor () {
		this.visible = false;
		this.mainHTML = document.querySelector('.order');
		this.btnCards = document.querySelectorAll('.slider__btn');
		this.btnAll = document.querySelectorAll('.btn');
		this.exit = document.querySelector('.order__exit');

		this.go()
	}
	go() {

		this.btnAll.forEach((i, index) => {
			index == 0 || index == 1 || index == 4 ?  this.btnAe(i) : null
		})
		this.btnCards.forEach(i => {
			this.btnAe(i)
		})

		this.btnAe(this.exit)
	}
	btnAe (btn) {

		btn.addEventListener('click', () => {
			
			!this.visible ? 
				this.mainHTML.style.display = 'flex'
										:
				this.mainHTML.style.display = 'none';

				this.visible = !this.visible 
		})
	}
}
y = new Btn()


class Slider2 {
	constructor(slideHTML) {
		this.mainHTML = document.querySelector(`${slideHTML}__slider`);
		this.panoHTML = document.querySelector(`${slideHTML}__slides`);
		this.cardHTML = document.querySelector(`${slideHTML}__slide`);
		this.visibleHTML = document.querySelector(`${slideHTML}__visible`);
		this.checkHTML = document.querySelectorAll(`${slideHTML}__info-el`);
		this.cardsHTML = document.querySelectorAll(`${slideHTML}__slide`);

		// this.visibleW = this.visibleHTML.offsetWidth,
		this.panoHeight()
		this.margin = 100;
		this.size =  this.cardHTML.offsetWidth;
		this.all = this.cardsHTML.length;
		this.num = Math.round(this.all / 2);

		this.step = this.margin + this.size
		this.now = -this.step

		this.direction = true
		
		this.panoHTML.style.transform = `translateX(${-(this.step)}px)`
		this.go()
		window.addEventListener('resize', (e) => this.panoHeight())
	}
	go() {
		this.check()
		setInterval(() => {
			this.manager()
			this.check()
		}, 5000)
	}
	manager() {
		switch (this.direction){
			case true:
				this.num < this.all ? this.next() : (this.down(), this.direction = !this.direction)

				break;
			case false:
				this.num > 1 ? this.down() : (this.next(), this.direction = !this.direction)
				break;
		}
	}
	check() {
		this.checkHTML.forEach((i, index) => {

			(index + 1) == this.num ?
			i.classList.add('comment__info-el--now')
			:
			i.classList.remove('comment__info-el--now')

		})
	}
	next(){
		this.now = this.now - this.step
		this.num += 1
		this.panoHTML.style.transform = `translateX(${(this.now)}px)`
	}
	down(){
		this.now = this.now + this.step
		this.num -= 1
		this.panoHTML.style.transform = `translateX(${(this.now)}px)`
	}
	panoHeight() {
		this.cardsHTML.forEach(i => i.style.width = this.visibleHTML.offsetWidth + 'px')
		this.visibleHTML.style.height = this.cardHTML.offsetHeight + 'px'
		
		this.margin = 100;
		this.size =  this.cardHTML.offsetWidth;
		this.all = this.cardsHTML.length;
		this.num = Math.round(this.all / 2);

		this.step = this.margin + this.size
		this.now = -this.step

		this.direction = true
		
		this.panoHTML.style.transform = `translateX(${-(this.step)}px)`
	}
	
}

j = new Slider2('.comment')