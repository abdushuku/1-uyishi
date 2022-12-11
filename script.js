class SCROLL{
    constructor(set){
        if (typeof set.element == 'string') {
            this.el = document.querySelector(set.element)
        }else if (set.element instanceof HTMLElement) {
            this.el = set.element
        }
        this.el.style.position = 'fixed';
        this.el.style.top = this.scroll();
        window.addEventListener('scroll', ()=> this.scroll())
        window.addEventListener('resize', ()=> this.scroll())
        
    }
    scroll(){
        if (window.innerHeight - this.el.clientHeight - window.scrollY > 0) {
            this.el.style.top = (window.innerHeight - this.el.clientHeight - window.scrollY)+ 'px'
        }else{
            this.el.style.top = 0
        }
    }
}
const scroll = new SCROLL ({
    element: '.header__nav'
})

class ScrollTop{
    constructor(obj){
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        }else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        window.addEventListener('scroll', ()=> this.scrollTop())
        this.el.addEventListener('click', function (e) {
            e.preventDefault()
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        })
    }
    scrollTop(){
        if (window.scrollY > window.innerHeight) {
            this.el.classList.add('active')
        }else if (window.scrollY < window.innerHeight) {
            this.el.classList.remove('active')
        }
    }
}

const scrollTop = new ScrollTop({
    el:'.scroll-top'
})


class Type{
    constructor(obj){
        if (typeof obj.el == 'string') {
            this.el = document.querySelector(obj.el)
        }else if (obj.el instanceof HTMLElement) {
            this.el = obj.el
        }
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        this.typing()
    }
    
    typing(i = 0){
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.typing(i)
            }, 100);
        }
    }
}

const typing = new Type({
    el:".header__content h1"
})

const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header__menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
})