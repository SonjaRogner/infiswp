- Aus wie vielen verschiedenen Ländern gibt es Kunden?

SELECT COUNT(DISTINCT Country) FROM Customers;
21




- Wie viele Kunden gibt es aus London?

select count (distinct CustomerName) from customers where City = 'London';
6




- Aus welchen Städten kommen die Kunden aus Deutschland? 

select distinct City from customers where Country = 'Germany';
Berlin
Mannheim
Aachen
München
Brandenburg
Frankfurt a.M.
Leipzig
Köln
Cunewalde
Münster
Stuttgart




- Wie heißen die Kunden die in México D.F. leben?

select distinct CustomerName from customers where City = 'México D.F.';
Ana Trujillo Emparedados y helados
Antonio Moreno Taquería
Centro comercial Moctezuma
Pericles Comidas clásicas
Tortuga Restaurante




Wie viele Kunden gibt es die eine Customer ID haben die größer als 60 ist?

SELECT COUNT(DISTINCT CustomerID) FROM Customers where CustomerID > 60;
31