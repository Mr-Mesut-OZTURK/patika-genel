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

-
