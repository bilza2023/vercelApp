<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,P,Centre,Card,CardBtn,InputForm,ShowIfTrue,Loading} from '$lib/cmp';
import {Agent , Icons, onMount,toast} from '$lib/util';


</script>


<PageWrapper>
  <br/>
  <div class='flex justify-center '>
  <HdgWithIcon icon ={Icons.BOOKS} bgColor='bg-green-800'>Skillzaa.com Help</HdgWithIcon>
  </div>

<P>Skillzaa.com is an exam automation tool for online and offline educational instutions.</P>

<P>The main features of this App are:</P>
<P>1: Creating Students.</P>
<P>2: Creating Classes.</P>
<P>3: Creating Temapltes.</P>
<P>4: Creating Tests.</P>
<P>5: Running Tests.</P>
<P>6: Analytics / Result.</P>


<P>Lets explain the difference between Template , Test and Running Test.</P>

<P><b>Template</b> : A template is a collection / set of questions and answers. We need to seperate questions answers sets from Tests since once a test is attempted by students we can not (must not) change its questions and answers or it will un-validate the results submitted by students.</P>

<P>We can create as many tests from a template as we want.</P>

<P><b>Test</b> : The main purpose of this App is to have a Test that can collect student results. Once a test is created we can "Run" it many times with different class and timings. The results of a Test are saved in the Test and not in the "Run".</P>

<P><b>Test</b> : Once we have created a Test we can Run it many times. Each time we run it we need to give it Timings (start / publish time and stop /unpublish time) and a class which will take this test. So a "Run" is a copy of a Test for a specific Class at a specif time.</P>

<P>Once a Run (Test run) has been unpublished (compelted its time) we can delete it since the student results are stored in the Test and not in its copy (the Test run).</P>









<br/>
<br/>
<br/>
<br/>
</PageWrapper>