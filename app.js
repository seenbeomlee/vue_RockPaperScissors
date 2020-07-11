new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winner : null,
        lifeOfMe: 3,
        lifeOfCom: 3,

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
                
                // who is winner
                if(this.myChoice === this.comChoice) this.winnet == 'no one'
                else if(this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
                else if(this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
                else if(this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
                else if(this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
                else if(this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
                else if(this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
                else this.winner = 'error'

                // decrease life
                if(this.winner === 'me') {
                    this.lifeOfCom --
                } else if (this.winner === 'com') {
                    this.lifeOfMe --
                }
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