<h1 style="font-size:50px;text-align:center;margin-bottom:30px;">··· Patika SQL Tasks ···</h1>

> <br/>
>
> # Ödev 1
>
> <ol>
> <li>film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.</li>
> <li>film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.</li>
> <li>film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.</li>
> <li>customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?</li>
> <li>film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select title, description from film;

-- 2 --
select * from film
where length in (60, 75);

-- 3 --
select * from film
where rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);

-- 4 --
select last_name from customer
where first_name = 'Mary';

-- 5 --
select * from film
where length <= 50 and (rental_rate = 2.99 or rental_rate = 4.99);

```

<br/>

> <br/>

> # Ödev 2
>
> <ol>
> <li>film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)</li>
> <li>actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)</li>
> <li>film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select \* from film
where replacement_cost between 12.99 and 16.99;

-- 2 --
select first_name, last_name from actor
where first_name in ('Penelope', 'Nick', 'Ed');

-- 3 --
select \* from film
where rental_rate in (0.99, 2.99, 4.99)
and replacement_cost in (12.99, 15.99, 28.99);

```

<br/>

> <br/>

> # Ödev 3
>
> <ol>
> <li>country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.</li>
> <li>country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.</li>
> <li>film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.</li>
> <li>film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select country from country
where country like 'A%a';

-- 2 --
select country from country
where country like '**\_**%n'

-- 3 --
select title from film
where title ilike '%t%t%t%t%'

-- 4 --
select title, length from film
where title like 'C%' and length > 90

```

<br/>

> <br/>

> # Ödev 4
>
> <ol>
> <li>film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.</li>
> <li>film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?</li>
> <li>film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?</li>
> <li>country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?</li>
> <li>city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?</li>
> </ol>

<br/>

```sql
-- 1 --
select distinct replacement_cost from film;

-- 2 --
select count(distinct replacement_cost) from film;

-- 3 --
select count(\*) from film
where title like 'T%' and rating = 'G';

-- 4 --
select count(*) from country
where country like '**_**'

-- 5 --
select count(*) from city
where city ilike '%R'

```

<br/>

> <br/>

> # Ödev 5
>
> <ol>
> <li>film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.</li>
> <li>film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.</li>
> <li>customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select title, length from film
where title like '%n'
order by length DESC
limit 5;

-- 2 --
select title, length from film
where title like '%n'
order by length ASC
limit 5
offset 5;

-- 3 --
select last_name, store_id from customer
where store_id = 1
order by last_name DESC
limit 4

```

<br/>

> <br/>

> # Ödev 6
>
> <ol>
> <li>film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?</li>
> <li>film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?</li>
> <li>film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?</li>
> <li>film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select avg(rental_rate) from film

-- 2 --
select count(*) from film
where title like 'C%'

-- 3 --
select max(length) from film
where rental_rate = 0.99

-- 4 --
select count(distinct(replacement_cost)) from film
where length > 150

```

<br/>

> <br/>

> # Ödev 7
>
> <ol>
> <li>film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.</li>
> <li>film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.</li>
> <li>customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?</li>
> <li>city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select rating, count(rating) from film
group by rating;

-- 2 --
select replacement_cost, count(length) from film
group by replacement_cost
having count(\*) > 50

-- 3 --
select store_id, count(\*) from customer
group by store_id

-- 4 --
select country*id, count(*) from city
group by country*id
order by count(*) DESC
limit 1

```

<br/>

> <br/>

> # Ödev 8
>
> <ol>
> <li>test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.</li>
> <li>Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.</li>
> <li>Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.</li>
> <li>Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
create table employee (
id SERIAL primary key,
name varchar(50),
email varchar(100),
birthdate date
);

-- 2 --
insert into employee (name, email, birthdate) values ('Geno', > 'gsheed0@sciencedaily.com', '2010-06-07');
insert into employee (name, email, birthdate) values ('Gabriel', > 'gcaccavella1@ftc.gov', '2003-04-28');
insert into employee (name, email, birthdate) values ('Yalonda', > 'ycrouse2@slashdot.org', '1953-10-11');
insert into employee (name, email, birthdate) values ('Abbi', > 'amantha3@w3.org', '1986-08-01');
insert into employee (name, email, birthdate) values ('Alta', > 'adoni4@salon.com', '1993-08-30');

-- 3 --
update employee
set name = 'XXXX', email = 'XXXX@email.com'
where id < 6
returning *

-- 4 --
delete from employee
where id > 45
returning *

```

<br/>

> <br/>

> # Ödev 9
>
> <ol>
> <li>city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.</li>
> <li>customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.</li>
> <li>customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select country._, city._ from country
inner join city on country.country_id = city.country_id
order by country.country;

-- 2 --
select payment.payment_id, customer.first_name, > customer.last_name
from payment
inner join customer on payment.customer_id = customer.> customer_id;

-- 3 --
select rental.rental_id, customer.first_name, customer.> last_name
from rental
inner join customer on customer.customer_id = rental.customer_id;

```

<br/>

> <br/>

> # Ödev 10,
>
> <ol>
> <li>city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.</li>
> <li>customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.</li>
> <li>customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.</li>
> </ol>
> <br/>

<br/>

```sql

-- 1 --
select city.city, country.country from country
left join city on city.country_id = country.country_id;

-- 2 --
select payment.payment_id, customer.first_name, > customer.last_name
from payment
right join customer on payment.customer_id = customer.> customer_id

-- 3 --
select rental.rental_id, customer.first_name, customer.> last_name
from customer
full join rental on rental.customer_id = customer.customer_id;

```

<br/>

> <br/>

> # Ödev 11
>
> <ol>
> <li>actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.</li>
> <li>actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.</li>
> <li>actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.</li>
> <li>İlk 3 sorguyu tekrar eden veriler için de yapalım.</li>
> </ol>
> <br/>

<br/>

```sql
-- 1 --
select first_name from actor
union all
select first_name from customer

-- 2 --
select first_name from actor
intersect
select first_name from customer

-- 3 --
select first_name from actor
except
select first_name from customer;

-- 4 --
SELECT first_name FROM actor
UNION ALL
SELECT first_name FROM customer;

```

<br/>

> <br/>

> # Ödev 12
>
> <ol>
> <li>film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?</li>
> <li>film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?</li>
> <li>film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.</li>
> <li>payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.</li>
> </ol>
> <br/>

<br/>

```sql

-- 1 --
SELECT COUNT(*)
FROM film
WHERE length > (
  SELECT AVG(length)
  FROM film
);

-- 2 --
SELECT COUNT(*)
FROM film
WHERE rental_rate = (
  SELECT MAX(rental_rate)
  FROM film
);

-- 3 --
SELECT * FROM film
WHERE rental_rate = (
  SELECT MIN(rental_rate)
  FROM film
)
AND replacement_cost = (
  SELECT MIN(replacement_cost)
  FROM film
);

-- 4 --
SELECT customer_id, COUNT(*) AS transaction_count
FROM payment
GROUP BY customer_id
ORDER BY transaction_count DESC;

```
