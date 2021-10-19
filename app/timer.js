
class Timer {
    constructor() {
        this.value = 60 
        this.dom = document.querySelector('.time') 
    }

    reset() {
        this.value = 60
    }

    up(increment) {
        this.value = this.value - increment
        this.timer = this.value - increment
    }

    get() {
        return this.value
    }

    set timer(val) {
        this.dom.innerHTML = this.value + ' s'
    }
}

let timer = new Timer

export default timer