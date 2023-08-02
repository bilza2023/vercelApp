i am working on a Test/Exam automation app in which students solve test and their results are saved in mongodb database.

i have following collections

1. Classes : collection of students
2. Students : one enrolled student
3. Tests : once created can not be deleted unless all the results are delted. Each test has questions which when solved by student their marks and details is saved in results.
4. Results : the result of a test solved by a student. it has testId , studentId (it also has classId but i am not sure if this should be here)

Requirements :

I want to create a Results Page for Class as well as a Result  Page for each individual student.

Help me in creating a Class Result Page and Student Result Page both.

- What all data should i display for each class / student.
- how many charts  / pic charts  / graphs etc can i have for each class and student. 



keep in mind that students can be moved from one class to another.
