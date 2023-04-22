# selection sort

> [22,27,16,2,18,6] -> Insertion Sort
> Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
> Big-O gösterimini yazınız.
> Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız
> 1.Average case: Aradığımız sayının ortada olması
> 2.Worst case: Aradığımız sayının sonda olması
> 3.Best case: Aradığımız sayının dizinin en başında olması.
> [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.
> 
> ### Cevaplar
> **1.Sorunun Cevabı:**<br/>
> [22,27,16,2,18,6] bu diziden en küçük sayı seçilir ve en baştaki sayı ile yer değiştirilir. Ardından diğer sayılar içinde yer değiştirmeli sıralama işlemi yapılır.<br/>
> [22,27,16,2,18,6] (n)<br/>
> [2,27,16,22,18,6] (n-1) 2 ile 22 yer değiştirdi.<br/>
> [2,6,16,22,18,27] (n-2) 6 ile 27 yer değiştirdi.<br/>
> [2,6,16,18,22,27] (n-3) 22 ile 18 yer değiştirdi.<br/>
> [2,6,16,18,22,27] 1 son hali bu olur.<br/>
> **2.Sorunun Cevabı:** n+(n-1)+(n-2)+(n-3)+...+1 = n.(n+1)/2 = n üssü 2 +n/2. Baskın ifade n² dir. Big-O =(n²)<br/>
> **3.Sorunun Cevabı:** Sıralama işleminin sonunda 18 sayısı ortada olduğu için cevap Average case'dir.<br/>
> **4.Sorunun Cevabı:** <br/>
> 1.Adım: [7,3,5,8,2,9,4,15,6] <br/>
> 2.Adım: [2,3,5,8,7,9,4,15,6] 2 ile 7 yer değiştirdi. <br/>
> 3.Adım: [2,3,4,8,7,9,5,15,6] 4 ile 5 yer değiştirdi. <br/>
> 4.Adım: [2,3,4,5,7,9,8,15,6] 5 ile 8 yer değiştirdi. <br/>

-----------------------------------------------------------------------------------------

# merge sort

> [16,21,11,8,12,22] -> Merge Sort <br/>
> Yukarıdaki dizinin sort türüne göre aşamalarını yazınız. Big-O gösterimini yazınız. <br/>
> 
> ### Cevaplar
> 1.Sorunun Cevabı:  <br/>
> 1.Adım: [16,21,11,8,12,22] ortadan iki gruba ayır. <br/>
> 2.Adım: [16,21,11]-[8,12,22] tekrar 2 ye ayır. <br/>
> 3.Adım: [16,21]-[11]-[8,12]-[22] tekrar 2 ye ayır. <br/>
> 4.Adım: [16]-[21]-[11]-[8]-[12]-[22] bütün elemanlar tek kaldığı için şimdi küçükten büyüğe doğru sıralayıp tekrar birleştiriyoruz. <br/>
> 5.Adım:[11,16,21] ve [8,12,22] sol ve sağ taraftaki kutuların ilk elemanları karşlılaştırılır. Sonra sırasıyla hangi kutudaki numara daha küçükse ona göre dizilir. <br/>
> 6.Adım: [8,11,12,16,21,22] son hali <br/>
> 
> 2.Sorunun Cevabı: <br/>
> Big-O=O(nlogn) <br/>

# binary search

> [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.
> 
> ### Cevaplar
> Root'u 5 alalım.<br>
```
                    5
                   / \
                  3   6 
                /   \   \ 
               2     4   8 
              /         /  \ 
             1         7    9
            /
           0
 ```
