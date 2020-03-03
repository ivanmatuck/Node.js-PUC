// const add = function(a, b){
//     return a + b
// }

// const add = (a, b) => {
//     return a + b
// }

// const add = (a, b) => a + b

// console.log(add(2,4))

const car = {
    name: 'Ferrari',
    items: ['expensive', 'fast', 'red'],
    start(){

        console.log('Starting ', this.name)

        this.items.forEach((item) => {
            console.log('My ', this.name, ' is ', item)
        })
    }
}

car.start()