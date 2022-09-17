const container = document.querySelector('.container')
function createStar() {
    let i = 0
    while (i < 600) {
        let top = Math.random() * window.innerHeight
        let left = Math.random() * window.innerWidth
        let size = Math.random() * 2
        let duration = Math.random() * 10
        let star = document.createElement('i')
        star.style = `top: ${top}px; left: ${left}px; width: ${1 + size}px; height: ${1 + size}px; animation-duration: ${5 + duration}s; animation-delay: ${duration}s;`
        container.appendChild(star)
        i++
    }
}
function createMeteor(n) {
    let i = 0
    while (i < n) {
        let left = Math.random() * window.innerWidth
        let duration = Math.random() * 10
        let meteor = document.createElement('div')
        meteor.style = `left: ${left}px; animation-duration: ${duration % 1 + 1}s; animation-delay: ${duration}s;`
        meteor.classList.add('meteor')
        container.appendChild(meteor)
        i++
    }
}
createStar()
createMeteor(8)