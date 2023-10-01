import { uid } from "./mylib.js"

/*
Ödev 1
Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere 
Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini 
konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: 
Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/


const getCircleArea = () => {
    const values = process.argv.slice(2)
    const area = Math.PI * (values[0] * 1) ** 2
    console.log(`Yarıçapı ${values[0]} olan dairenin alanı: ${area}`)
    return `Yarıçapı ${values[0]} olan dairenin alanı: ${area}`
}



/* 
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında 
postlarımızı sıralayalım, sonrasında yeni bir post 
oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const posts = [
    { id: 1, name: 'book 1', author: 'author 1' },
    { id: 2, name: 'book 2', author: 'author 2' },
    { id: 3, name: 'book 3', author: 'author 3' },
    { id: 4, name: 'book 4', author: 'author 4' },
]

const getPosts = () => {
    posts.forEach(item => {
        console.log(`${item.name} kitabının yazarı : ${item.author}`)
    })
}

const addPost = (newItem) => {
    const id = uid()
    posts.push({ id, name: `book ${id}`, author: `author ${id}}` })
    getPosts()
}


const main = () => {
    // getCircleArea()
    addPost()
}
main()