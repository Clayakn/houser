CREATE TABLE Houses (
id SERIAL PRIMARY KEY, 
name TEXT,
address VARCHAR(100),
city VARCHAR(100),
state VARCHAR(2),
zip INTEGER
);

INSERT INTO Houses 
(name, address, city, state, zip)
VALUES 
('Andy', '425 S Street', 'Nowhere', 'UT', 65342)