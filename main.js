let main = document.querySelector('.grid')
let url = "http://localhost:8080/"


function getData() {
    fetch(url + "users")
        .then(res => res.json())
        .then(res => reload(res, main))
}

getData()


function reload(arr, place) {
    place.textContent = ""

    for (let item of arr) {
        let elem = document.createElement('div')
        let h3 = document.createElement('h3')
        let comp = document.createElement('p')
        let web = document.createElement('p')
        let phone = document.createElement('p')
        let a = document.createElement('a')
        let btn = document.createElement('button')


        elem.classList.add('elem')
        h3.classList.add('h3')
        comp.classList.add('p')
        web.classList.add('p')
        phone.classList.add('p')
        
        btn.classList.add('button')



        a.href = './user.html?id=' + item.id
        h3.textContent = item.name
        comp.textContent = item.username
        phone.textContent = item.phone
        btn.textContent = 'Подробнее'

        place.append(elem)
        elem.append(h3, comp, web, phone,a)
        a.append(btn)
    }
}
