import { circleArea, circleCircumference, uid } from './mylib.js';
import * as fs from 'fs';
import http from 'http';
import Koa from 'koa';

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
    const values = process.argv.slice(2);
    const area = Math.PI * (values[0] * 1) ** 2;
    console.log(`Yarıçapı ${values[0]} olan dairenin alanı: ${area}`);
    return `Yarıçapı ${values[0]} olan dairenin alanı: ${area}`;
};

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
];
const getPosts = () => {
    posts.forEach((item) => {
        console.log(`${item.name} kitabının yazarı : ${item.author}`);
    });
};
const addPost = (newItem) => {
    const id = uid();
    posts.push({ id, name: `book ${id}`, author: `author ${id}}` });
    getPosts();
};

/*
Ödev 3
Daire Modüler Dosyası
 - Daire alan : circleArea ve daire çevre : 
   circleCircumference fonksiyonları içeren ve 
   consola sonuçları yazdıran circle.js dosyası oluşturunuz.

 - module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
  
 - require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
*/
const findCircleAreaAndCircumference = (r) => {
    return console.log(
        `area: ${circleArea(r)}, circumference : ${circleCircumference(r)}`
    );
};

/*
Ödev 4
FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine 
{"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/

const task4 = () => {
    fs.writeFile(
        'employees.json',
        `{ "name": "Employee 1 Name", "salary": 2000 }`,
        function (err, data) {
            if (err) throw err;
            console.log('Saved!', data);
        }
    );

    fs.readFile('employees.json', function (err, data) {
        if (err) throw err;
        console.log({ data: JSON.parse(data) });
    });

    fs.writeFile(
        'employees.json',
        `{ "name": "Employee 2 Name", "salary": 3000 }`,
        function (err, data) {
            if (err) throw err;
            console.log('Saved!', data);
        }
    );

    fs.unlink('employees.json', function (err, data) {
        if (err) throw err;
        console.log({ data });
    });
};

/*
Ödev 5
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/
const createMyServer = () => {
    //create a server object:
    http.createServer(function (req, res) {
        const url = req.url;

        console.log('request alındı.', url);

        if (url === '/') {
            res.write('<h2>Home page!</h2>');
        } else if (url === '/about') {
            res.write('<h2>About page!</h2>');
        } else if (url === '/contact') {
            res.write('<h2>Contack page!</h2>');
        } else {
            res.write('<h2>Page Not Found!</h2>');
        }

        res.end(); //end the response
    }).listen(8080, () => {
        console.log(`server started at localhost`);
    });
};

/*
Ödev 6
Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum 
ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım 
yeni bir teknolojiye başlama cesareti oluşturmak 
ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
 */
const createKoaServer = () => {
    const app = new Koa();

    // response
    app.use((ctx) => {
        const url = ctx.request.url;
        if (url === '/') {
            ctx.body = '<h2>Home page!</h2>';
        } else if (url === '/about') {
            ctx.body = '<h2>About page!</h2>';
        } else if (url === '/contact') {
            ctx.body = '<h2>Contack page!</h2>';
        } else {
            ctx.body = '<h2>Page Not Found!</h2>';
        }
    });

    app.listen(3000);
};

const main = () => {
    // getCircleArea()
    // addPost()
    // findCircleAreaAndCircumference(5)
    // task4()
    // createMyServer()
    // createKoaServer()
};
main();
