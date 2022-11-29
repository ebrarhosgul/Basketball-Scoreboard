const homeScore = document.getElementById('home-score')
const guestScore = document.getElementById('guest-score')
const homeOne = document.getElementById('h-1')
const homeTwo = document.getElementById('h-2')
const homeThree = document.getElementById('h-3')
const guestOne = document.getElementById('g-1')
const guestTwo = document.getElementById('g-2')
const guestThree = document.getElementById('g-3')

let homeCount = 0
let guestCount = 0

function points(num) {
    for (let i = 1; i <= 3; i++) {
        if (num == 'h-' + i) {
            homeCount += i
            homeScore.textContent = homeCount
        }
        else if (num == 'g-' + i) {
            guestCount += i
            guestScore.textContent = guestCount
        }
    }
}
homeOne.addEventListener('click', () => points(homeOne.id))
homeTwo.addEventListener('click', () => points(homeTwo.id))
homeThree.addEventListener('click', () => points(homeThree.id))
guestOne.addEventListener('click', () => points(guestOne.id))
guestTwo.addEventListener('click', () => points(guestTwo.id))
guestThree.addEventListener('click', () => points(guestThree.id))