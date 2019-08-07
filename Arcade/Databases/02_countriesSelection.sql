CREATE PROCEDURE countriesSelection()
BEGIN
	select name, continent, population from countries where continent = "Africa";
END