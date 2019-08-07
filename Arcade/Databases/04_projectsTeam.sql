CREATE PROCEDURE projectsTeam()
BEGIN
	select distinct name from projectLog order by name;
END