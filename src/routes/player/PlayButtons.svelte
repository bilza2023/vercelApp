<script>
  //@ts-nocheck
  import { ThemeDD } from '$lib/Presentation';

  export let start;
  export let stop;
  export let pause;
  export let callback;
  export let isPlaying;
  export let isPaused;
</script>

<div class="flex items-center space-x-2">
    &nbsp;&nbsp;  

    {#if isPlaying}
        {#if isPaused}
        <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
        on:click={pause} style='background-color:gray'> || Pause</button>
      {:else}
        <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
        on:click={pause} style='background-color:#00A6ED'> || Pause</button>
      {/if}
   {:else}
   <button class="p-1 rounded-sm bg-green-700 text-white text-sm" 
    on:click={start} style='background-color:#00A6ED'>▶ Start</button>
    {/if}

    <button class="p-1 rounded-sm bg-red-800 text-white text-sm" 
    on:click={stop}>■ Stop</button>
 

    <ThemeDD {callback}/>

</div>


