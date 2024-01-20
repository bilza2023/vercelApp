<script>
import {NavBtn,HdgWithIcon} from '$lib/cmp';
import {Icons} from '$lib/util';

</script>


<div class='bg-gray-800 px-4 py-6 text-white main text-xl'>

<div class='flex justify-center mb-4'>
<HdgWithIcon>Welcome to skillzaa.com</HdgWithIcon>
</div>

<div class='flex justify-start p-1 m-0 text-sm'>
<div class='w-3/12 bg-orange-800 hover:bg-green-800'>
    <NavBtn title="Jump To Courses"  icon ={Icons.RUN} url="/" />
</div>
</div>

    <header>
        
        <p>Skillzaa.com is one of its kind Education and learning plateform. It is your Gateway to Quality and Affordable Education in Pakistan</p>
    </header>

    <section>
        <h2>Empowering Every Student</h2>
        <p>At skillzaa.com, we're on a mission to bridge the educational gap in Pakistan, especially in Scientific subjects and STEM. Our platform provides top-quality lectures, presentations, and lessons to empower students with knowledge.</p>
    </section>

    <section>
        <h2>Why skillzaa.com?</h2>
        <ul>
            <li><strong>Non-Video Format:</strong> Overcoming slow internet and high data costs, our content is not video-based, ensuring accessibility for all.</li>
            <li><strong>Mobile-First Design:</strong> We understand the importance of your mobile device. Prepare for exams with everything you need in your pocket.</li>
            <li><strong>Flexible Learning:</strong> Study at your own pace, whether it's one question at a time or an entire exercise in an hour.</li>
            <li><strong>Accessible Education:</strong> An excellent alternative for those without access to expensive tuition or unable to travel to traditional institutes.</li>
        </ul>
    </section>

    <section>
        <h2>Your Learning Journey Starts Here</h2>
        <p>Embark on a personalized learning experience tailored to your needs. Our platform is optimized for mobile devices, ensuring a seamless educational journey, even in challenging conditions.</p>
    </section>

    <footer>
        <p>Join us in revolutionizing education in Pakistan. skillzaa.com - Where Learning Knows No Boundaries.</p>
    </footer>


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
