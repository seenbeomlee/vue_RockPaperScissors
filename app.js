new Vue({
    el: '#app',
    data: {
        myChoice: null,
        comChoice: null,
        count: 3,
        winner : null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        logs: [],
        selects: [
            { name: 'scissor', value: 'scissor' },
            { name: 'rock', value: 'rock' },
            { name: 'paper', value: 'paper' },
        ]
    },
    computed: {
        myChoiceImg: function() {
            if(this.myChoice !== null) {
                return 'images/' + this.myChoice + '.jpg'
            } else {
                return 'images/question.jpg'
            }
            /* === return this.myChoice !== null ? `images/${this.myChoice}.jpg` : `images/question.jpg` */
        },
        comChoiceImg: function() {
            if(this.comChoice !== null) {
                return 'images/' + this.comChoice + '.jpg'
            } else {
                return 'images/question.jpg'
            }
        },
        leftLifeOfMe: function() {
            return 3 - this.lifeOfMe
        },
        leftLifeOfCom: function() {
            return 3 - this.lifeOfCom
        },
    },
    watch: {
        /* watch count variable */
        count: function (newVal) {
            if(newVal === 0) {
                
                // computer selects
                this.selectCom()

                // who is winner
                this.whoIsWin()

                // reser the game => can see btn
                this.isSelectable = true
                this.count = 3

                // update logs
                this.updateLogs()
            }
        },
        lifeOfMe: function(newVal) {
            if(newVal === 0) {
                //end game => you lose
                this.endGame('You lose!')
            }
        },
        lifeOfCom: function(newVal) {
            if(newVal === 0) {
                //end game => you win
                this.endGame('You Win!')
            }
        },
    },
    methods: {
        startGame: function () {
            if(this.myChoice == null) {
                alert('you should select one of rock - scissor - paper ')
            } else {
                // cant see btn
                this.isSelectable = false

                /* setInterval(function, micro sec) */
                let countDown = setInterval(() => {
                    this.count --
                    if(this.count === 0) {
                        clearInterval(countDown) /* break the Interval */
                    }
                }, 1000)
            }
        },
        selectCom: function () {
            // computer selects
            let number = Math.random()
             if(number < 0.33) {
                this.comChoice = 'rock'
            } else if (number < 0.66) {
                this.comChoice = 'scissor'
            } else {
                this.comChoice = 'paper'
            }
            // 0.33 0.66 alpha
        },
        whoIsWin: function() {
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
        },
        updateLogs: function() {
            // update log
            let log =  {
                message: `You: ${this.myChoice}, Computer: ${this.comChoice}`,
                winner: this.winner
            }
            /* this.logs.push(log) */
            this.logs.unshift(log)
        },
        endGame: function(msg) {
            setTimeout(() => {
                confirm(msg)
                this.lifeOfMe = 3
                this.lifeOfCom = 3
                this.myChoice = null
                this.comChoice = null
                this.winner = null
                this.logs = []
            }, 300)
        }
    }
})