const names = ['Carol', 'James', 'Dante', 'Arianna', 'Sam', 'Eleanor', 'Jacob', 'Eva']
const occupations = ['Programmer', 'Nurse', 'Artist', 'Accountant', 'Payroll Specialist']
const freelancers = []

class Freelancer {
    constructor(name, occupation, price) {
        this.name = name
        this.occupation = occupation
        this.price = price
    }
    createRow () {
        const row = document.createElement('tr')
        const rowArr = []
        const name = document.createElement('td')
        const occupation = document.createElement('td')
        const price = document.createElement('td')

        name.textContent = this.name
        occupation.textContent = this.occupation
        price.textContent = this.price

        rowArr.push(name, occupation, price)
        row.replaceChildren(...rowArr)
        return row
    }
}

freelancers.push(new Freelancer('Alice', 'Writer', 30), new Freelancer('Bob', 'Teacher', 50))

const addIntervals = setInterval(addFreelancer, 3000)

render()

function render() {
    const tableBody = document.querySelector("tbody")
    
    const tableRows = freelancers.map(element => element.createRow())

    tableBody.replaceChildren(...tableRows)
    
    const tableCaption = document.querySelector("caption")
    const currentAvg = average(freelancers)
    tableCaption.textContent = `The average starting price is ${currentAvg}.`
}

function addFreelancer() {
    let name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = Math.round(Math.random() * 80) + 20

    while (freelancers.find((obj) => obj.name === name)) {
        name = names[Math.floor(Math.random() * names.length)]
    }
    
    freelancers.push(new Freelancer(name, occupation, price))

    render()

    if (freelancers.length >= names.length + 2) {
        clearInterval(addIntervals)
    }
}

function average(arr) {
    const sum = arr.reduce((acc, obj) => {
        acc += obj.price
        return acc
    }, 0)

    return Math.round(sum / arr.length)
}