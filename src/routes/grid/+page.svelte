<svelt:head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn" crossorigin="anonymous">
</svelt:head>
<script>
import getTableData from "./demo.js";
import {PageWrapper} from '$lib/cmp';
import {BASE_URL,onMount,toast} from '$lib/util';
import MainNav from '$lib/appComp/MainNav.svelte';
import Grid from './Grid.svelte';
import SidePanel from './SidePanel.svelte';
import Sticky from "./Sticky.svelte";

let rows;
let global = {bgColor: "#111827", fontSize: 1, padding: 4,margin:1,cellBorderColor:"#e52222" ,cellFontColor : "white",showGrid : true,gridColor: "#384556" }

// onMount(async () => {
//   const tableData = await getTableData();
//   rows = tableData.rows;
// });
onMount(async () => {
  try {
  // debugger;
  let  id = new URLSearchParams(location.search).get("id"); 
  const token = localStorage.getItem("token");
  const resp = await fetch( `${BASE_URL}/fe/get_question` ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( {id} )
  });
  
    if (resp.ok) {
      
        const data = await resp.json();
      
        const question  = data.question //===> important
        rows = question.grid.rows;
        if(question.grid.global !== undefined && question.grid.global !== null){
          // global = question.grid.global;
        }
        // eqs = eqs.map( (eq)=>{eq.isf = false;return eq;});
        soundFile = await getSoundFile(question.filename);
    questionDetails = question.filename;;


//////////////////////////////////////////
    } else {
        const data = await resp.json();
        toast.push(data.message);
    }
  } catch (error) {
    toast.push('Unknown Error');
    // console.error(error);
  }
});

</script>




<PageWrapper>
<MainNav/>

<Sticky />

<div class="flex justify-center w-full">
{#if rows}
 
    <Grid   {rows} {global}/>
  
    <SidePanel   />
{/if}    
</div>


<br>
<br>
<br>
<br>
<br>
</PageWrapper>


