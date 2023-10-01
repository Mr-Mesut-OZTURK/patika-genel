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

getCircleArea()