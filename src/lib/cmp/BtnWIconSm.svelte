<script>
export let icon=""; 
export let bgColor ="bg-blue-800"; 
export let title="Button"; 
export let fn= ()=>{}; 

</script>



<button
class= {`bg-blue-800 p-2 m-2 rounded-md px-8 `}
on:click={fn} >
{icon}&nbsp;{title}
</button>