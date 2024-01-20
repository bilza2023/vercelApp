<script>
import {NavBtn,HdgWithIcon} from '$lib/cmp';
import {Icons} from '$lib/util';

</script>


<div class='bg-gray-800 px-4 py-6 text-white main text-xl'>

<div class='flex justify-center mb-4'>
<HdgWithIcon>Welcome To Matrices Course</HdgWithIcon>
</div>

<div class='flex justify-start p-1 m-0 text-sm'>
<div class='w-3/12 bg-orange-800 hover:bg-green-800'>
    <NavBtn title="Jump To Course"  icon ={Icons.RUN} url="/syllabus?tcode=matrices" />
</div>
</div>

    <p>Welcome to the Matrix Mathematics Course! In this engaging and comprehensive course designed for grade 8/9 students, we will delve into the fascinating world of matrices. Matrices, a fundamental concept in mathematics, play a crucial role in various fields, from computer graphics to solving complex systems of equations. This course aims to equip you with a solid understanding of matrices, covering essential topics and practical applications. Get ready to explore, learn, and apply matrix operations in a way that sparks your curiosity and enhances your problem-solving skills.</p>

<HdgWithIcon icon={Icons.Template}>Course Outline:</HdgWithIcon>

        <h2>1. Matrix Introduction:</h2>
        <ul>
            <li>Basic definition and representation</li>
            <li>Elements, rows, and columns</li>
        </ul>

        <h2>2. Matrix Order:</h2>
        <ul>
            <li>Understanding the order of matrices</li>
            <li>Size and dimensions</li>
        </ul>

        <h2>3. Types of Matrices:</h2>
        <ul>
            <li>Row matrix, column matrix, and square matrix</li>
            <li>Identity matrix and zero matrix</li>
        </ul>

        <h2>4. Matrix Operations with Numbers:</h2>
        <ul>
            <li>Addition, subtraction, multiplication, and division</li>
            <li>Scalar multiplication</li>
        </ul>

        <h2>5. Matrix Operations with Other Matrices:</h2>
        <ul>
            <li>Element-wise operations</li>
            <li>Hadamard product</li>
        </ul>

        <h2>6. Matrix Multiplication:</h2>
        <ul>
            <li>Rules and properties</li>
            <li>Applications in real-world scenarios</li>
        </ul>

        <h2>7. Transpose of Matrix:</h2>
        <ul>
            <li>Definition and properties</li>
            <li>Symmetric and skew-symmetric matrices</li>
        </ul>

        <h2>8. Determinant of a Matrix:</h2>
        <ul>
            <li>Calculation methods</li>
            <li>Importance in solving systems of equations</li>
        </ul>

        <h2>9. Adjoint:</h2>
        <ul>
            <li>Finding the adjoint of a matrix</li>
            <li>Applications in inverse calculation</li>
        </ul>

        <h2>10. Matrix Inverse Method:</h2>
        <ul>
            <li>Understanding the concept of inverse matrices</li>
            <li>Calculating the inverse using various methods</li>
        </ul>

        <h2>11. Cramer's Rule:</h2>
        <ul>
            <li>Solving systems of linear equations using Cramer's Rule</li>
            <li>Practical applications</li>
        </ul>

        <h2>12. Applications of Matrices:</h2>
        <ul>
            <li>Real-world examples in computer graphics</li>
            <li>Applications in solving practical problems</li>
        </ul>

        <h2>13. Matrix Properties:</h2>
        <ul>
            <li>Symmetric matrices and their characteristics</li>
            <li>Skew-symmetric and idempotent matrices</li>
        </ul>

        <h2>14. Solving Systems of Equations:</h2>
        <ul>
            <li>Applying matrices to solve systems of linear equations</li>
            <li>Understanding the connection between matrices and simultaneous equations</li>
        </ul>
    
<h2>Conclusion</h2>
    <p>This course promises an exciting journey into the world of matrices, providing you with valuable knowledge and skills that extend beyond the classroom. Let's embark on this learning adventure together!</p>

<br>
<br>
<br>
<br>
</div>

<style>
.main {line-height: 1.9em;}
h2 {padding-left: 8px; background-color:#28323f; color:yellow}
li {
    padding-left: 12px;
    text-decoration: dotted;
}

li::before {
    content: "►";  /* You can replace this with any character or Unicode symbol you like */
    padding-right: 5px;  /* Adjust as needed */
}

</style>
