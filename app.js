new Vue({
    el: '#app',
    data: {
        myChoice: null,
        count: 3
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