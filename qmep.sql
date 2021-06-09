CREATE TABLE employee;
INSERT INTO employee(fname,mname,lname,ssn,Bdate,address,Sex,Salary,Super_ssn,Dno)
VALUES ('sharli','s','salokhe',123446489,'2000-07-03','kolhapur,Maharastra','F', 30000,3334556,1 );
INSERT INTO employee VALUES('shubhada','M', 'bhavasar', 129456782,'2001-2-2','dhule maharastra','F', 40000, 4455336,2);
INSERT INTO employee VALUES('ruchita','r', 'deshmukh', 123471782,'2001-1-2','jalna maharastra','F', 45000, 4425336,3);
INSERT INTO employee VALUES('rucha','b', 'patil', 12971782,'2004-1-2','pune maharastra','F', 45500, 4466336,4);
INSERT INTO employee VALUES('dev','h', 'jha', 123771782,'1995-1-2','patna bihar','M', 45060, 4478336,5);
INSERT INTO employee VALUES('sanchitaa','y', 'kumar', 123472782,'2001-8-2','jammu','F', 35000, 4425936,4);

SELECT * FROM company.employee;

select fname,ssn, (salary*2) from employee where (salary*2)> 80000;

select fname,ssn, (salary/2) from employee where (salary/2)< 20000;

select power(25,25);

select sqrt(9);

select abs(50);

select exp(5);

select concat(fname,' ',lname) as employee_name from employee;

select upper(fname) as upper_employee_name from employee;

select lower(fname) as lower_employee_name from employee;