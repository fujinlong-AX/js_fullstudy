//ajax
const bannerEle = document.querySelector('#banner')
fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
.then(data => data.json())
.then(data => {
  // console.log(data)
  if(data.code == 200){   //   状态码
    const banners = data.banners;
    // console.log(banners, '+++++++')
    const html = banners.map((banner) => {
      // console.log(banner)
      return `
        <img src="${banner.imageUrl}">
      `
    })
    console.log(html)
    bannerEle.innerHTML = html.join('')
    for(let banner of banners){
      bannerEle.innerHTML += `<img src="${banner.imageUrl}">`
    }


    // bannerEle.innerHTML = banners.map()
  }else {
    console.log('请求失败')
  }
})