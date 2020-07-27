let send = document.getElementById('send')
let parent = document.getElementById('content-items')

send.addEventListener('click', function() {
    // console.log(1111)
    let li = document.createElement('li')
    li.setAttribute('class', 'content-item')

    let divPic = document.createElement('div')
    divPic.setAttribute('class', 'pic')
    li.appendChild(divPic)

    let img = document.createElement('img')
    img.setAttribute('src', './images/user.jpg')
    divPic.appendChild(img)

    let message = document.createElement('div')
    message.setAttribute('class', 'message')
    li.appendChild(message)

    let name = document.createElement('p')
    let text = document.createTextNode('秋多班')
    name.setAttribute('class', 'name')
    message.appendChild(name)
    name.appendChild(text)

    let detail = document.createElement('div')
    let text1 = document.createTextNode('皮皮拍了拍自己的屁股')
    detail.setAttribute('class', 'detail')
    message.appendChild(detail)
    detail.appendChild(text1)


    parent.appendChild(li)
})