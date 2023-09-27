> # Ödev 1,

- film tablosunda bulunan title ve description sütunlarındaki verileri sıralayınız.
- film tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük VE 75 ten küçük olma koşullarıyla sıralayınız.
- film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99 VE replacement_cost 12.99 VEYA 28.99 olma koşullarıyla sıralayınız.
- customer tablosunda bulunan first_name sütunundaki değeri 'Mary' olan müşterinin last_name sütunundaki değeri nedir?
- film tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.
  Kolay Gelsin.

---

> **select title, description from film;**
> -- select \* from film
> -- where length in (60, 75);
>
> -- select \* from film
> -- where rental_rate = 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);
>
> -- select last_name from customer
> -- where first_name = 'Mary';
>
> select \* from film
> where length <= 50 and (rental_rate = 2.99 or rental_rate = 4.99);

# ---------------------------------

# ---------------------------------

> # Ödev 2,

- film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)
- actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)
- film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)

---

> -- select \* from film
> -- where replacement_cost between 12.99 and 16.99;
>
> -- select first_name, last_name from actor
> -- where first_name in ('Penelope', 'Nick', 'Ed');
>
> -- select \* from film
> -- where rental_rate in (0.99, 2.99, 4.99)
> -- and replacement_cost in (12.99, 15.99, 28.99);

# ---------------------------------

# ---------------------------------

> # Ödev 3,

- country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
- country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
- film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
- film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.

---

> -- select country from country
> -- where country like 'A%a';
>
> -- select country from country
> -- where country like '**\_**%n'
>
> -- select title from film
> -- where title ilike '%t%t%t%t%'
>
> -- select title, length from film
> -- where title like 'C%' and length > 90

# ---------------------------------

# ---------------------------------

> # Ödev 4,

- film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
- film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
- film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
- country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
- city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

---

> -- select distinct replacement_cost from film;
>
> -- select count(distinct replacement_cost) from film;
>
> -- select count(\*) from film
> -- where title like 'T%' and rating = 'G';
>
> -- select count(\*) from country
> -- where country like '**\_**'
>
> -- select count(\*) from city
> -- where city ilike '%R'

# ---------------------------------

# ---------------------------------

> # Ödev 5,

- film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
- film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
- customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.

---

> -- select title, length from film
> -- where title like '%n'
> -- order by length DESC
> -- limit 5;
>
> -- select title, length from film
> -- where title like '%n'
> -- order by length ASC
> -- limit 5
> -- offset 5;
>
> -- select last_name, store_id from customer
> -- where store_id = 1
> -- order by last_name DESC
> -- limit 4

# ---------------------------------

# ---------------------------------

> # Ödev 6,

- film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
- film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
- film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
- film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?

---

> -- select avg(rental_rate) from film
>
> -- select count(\*) from film
> -- where title like 'C%'
>
> -- select max(length) from film
> -- where rental_rate = 0.99
>
> -- select count(distinct(replacement_cost)) from film
> -- where length > 150

# ---------------------------------

# ---------------------------------

> # Ödev 7,

- film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
- film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
- customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?
- city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

---

> -- select rating, count(rating) from film
> -- group by rating;
>
> -- select replacement_cost, count(length) from film
> -- group by replacement_cost
> -- having count(\*) > 50
>
> -- select store_id, count(\*) from customer
> -- group by store_id
>
> -- select country*id, count(*) from city
> -- group by country*id
> -- order by count(*) DESC
> -- limit 1

# ---------------------------------

# ---------------------------------

> # Ödev 8,

- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
- Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
- Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
- Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

---

> -- create table employee (
> -- id SERIAL primary key,
> -- name varchar(50),
> -- email varchar(100),
> -- birthdate date
> -- );
>
> -- insert into employee (name, email, birthdate) values ('Geno', > 'gsheed0@sciencedaily.com', '2010-06-07');
> -- insert into employee (name, email, birthdate) values ('Gabriel', > 'gcaccavella1@ftc.gov', '2003-04-28');
> -- insert into employee (name, email, birthdate) values ('Yalonda', > 'ycrouse2@slashdot.org', '1953-10-11');
> -- insert into employee (name, email, birthdate) values ('Abbi', > 'amantha3@w3.org', '1986-08-01');
> -- insert into employee (name, email, birthdate) values ('Alta', > 'adoni4@salon.com', '1993-08-30');
>
> -- update employee
> -- set name = 'XXXX', email = 'XXXX@email.com'
> -- where id < 6
> -- returning \*
>
> -- delete from employee
> -- where id > 45
> -- returning \*

# ---------------------------------

# ---------------------------------

> # Ödev 9,

- city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
- customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
- customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

---

> -- select country._, city._ from country
> -- inner join city on country.country_id = city.country_id
> -- order by country.country;
>
> -- select payment.payment_id, customer.first_name, > customer.last_name
> -- from payment
> -- inner join customer on payment.customer_id = customer.> customer_id;
>
> -- select rental.rental_id, customer.first_name, customer.> last_name
> -- from rental
> -- inner join customer on customer.customer_id = rental.customer_id;

# ---------------------------------

# ---------------------------------

> # Ödev 10,

- 1 - city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
- 2 - customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
- 3 - customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

---

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

# ---------------------------------

# ---------------------------------

> # Ödev 11,

- actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
- actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
- actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
- İlk 3 sorguyu tekrar eden veriler için de yapalım.

---

```sql
select first_name from actor
union all
select first_name from customer

select first_name from actor
intersect
select first_name from customer

select first_name from actor
except
select first_name from customer;

SELECT first_name FROM actor
UNION ALL
SELECT first_name FROM customer;
```

# ---------------------------------

# ---------------------------------

> # Ödev 12,

-
