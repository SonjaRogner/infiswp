INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'); 

insert into customers(CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('meci', 'Bob D.B.', 'Quadra 37, Conjunto Parque das Laranjeiras, 7 ', 'Rua Barão de Jaceguai', '69058-180', 'Brasilien' );


insert into customers(CustomerName, ContactName, Address, City, PostalCode, Country)
values ('hofer', 'Babsi Zalud', 'Spengergasse 666', 'Wien', '1050', 'Österreicht');
 
 insert into customers(CustomerName, ContactName, City, PostalCode, Country)
values ('Spar', 'William Shakes', 'Umeå ', '4567', 'Schweden');

insert into customers(ContactName, Address, City, Country)
values ('Harry P.', 'Privet Drive 4', 'little whinging', 'Großbrittanien');


INSERT INTO Customers (CustomerName, ContactName, Address, PostalCode, Country)
VALUES ('Bobs Shop', 'Bob B.O.B', 'Bobstraße 80', '8080', 'Bobland');

select * from customers where Address is null;

select CustomerName, ContactName from customers where City is null;


SELECT CustomerName, ContactName, Address from Customers where Address IS NOT NULL;

select City from customers where city is not null;