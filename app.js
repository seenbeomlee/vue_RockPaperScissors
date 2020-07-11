new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3
    },
    watch: {
        /* watch count variable */
        count: function (newVal) {
            if(newVal === 0) {
                let number = Math.random()
                if(number < 0.33) {
                    this.comChoice = 'rock'
                } else if (number < 0.66) {
                    this.comChoice = 'scissor'
                } else {
                    this.comChoice = 'paper'
                }
                // 0.33 0.66 alpha
            }
        }
    },
    methods: {
        startGame: function () {
            if(this.myChoice == null) {
                alert('you should select one of rock - scissor - paper ')
            } else {
                /* setInterval(function, micro sec) */
                let countDown = setInterval(() => {
                    this.count --
                    if(this.count === 0) {
                        clearInterval(countDown) /* break the Interval */
                    }
                }, 1000)
            }
        }
    }
})