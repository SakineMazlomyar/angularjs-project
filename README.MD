
### Uppgift
Kategorierna hämtas i en trädstruktur, med noder och undernoder, där noder kan vara
antingen en ny kategori eller en produkt. För att skilja en kategori från en produkt kan
vi i detta fall kolla om id:t börjar med ett litet ”s”.
Uppgiften blir att skapa en sida där vi visar upp alla produkter i en lista som går att
sortera och filtrera.
1. Ska kunna sorteras på:
a. Namn
b. Id
c. Pris (finns i extra.PRI på produkten)
2. Ska kunna filtreras på:
a. Om den finns i lager (fältet LGA i extra-objektet är > 0).
b. Volym (finns i extra.VOL) i ett intervall(från - till).
c. Om produkten ingår i en viss kategori, d.v.s. om den är undernod till
given kategori.
Vi förutsätter att uppgiften löses med Angular 1.x, samt Bootstrap för lite enklare css
styling.




