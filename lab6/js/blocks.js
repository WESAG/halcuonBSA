function creation() {
    class Cards {
        constructor(image, head, text) {
            this.image = image
            this.head = head
            this.text = text
        }
    }
    let blocks = document.getElementById('cards')
    const sourse_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies nulla non metus pulvinar imperdiet. Praesent non adipiscing libero"

    let cards_arr = [
        new Cards("./img/mind.png", "CREATIVE MINDS", sourse_text),
        new Cards("./img/think.png", "THINK ALIVE", sourse_text),
        new Cards("./img/dog.png", "PIXEL PERFECTION", sourse_text)
    ]

    cards_arr.forEach((pic) => {
        let html = `
    <div class="card-box">
        <img class="card-image" src="${pic.image}" alt="">
    </div>
    <div class="card-title">${pic.head}</div>
    <div class="line"></div>
    <div class="card-text">${pic.text}</div>`
        let gghf = document.createElement('div')
        gghf.className = "card"
        gghf.innerHTML = html
        blocks.appendChild(gghf)
    })
}
creation()