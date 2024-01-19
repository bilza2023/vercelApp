<script>
//@ts-nocheck
import {NavBtn} from '$lib/cmp';


export let chapterLinks;
</script>

<div class="bg-gray-900 text-xs p-1 m-0 mb-0">
Useful Links / Apps:
</div>

<div class="flex justify-start text-lg  p-1 m-0 mb-0">

{#if chapterLinks.length > 0}
{#each chapterLinks as link}
<NavBtn title={link.title} icon ={link.icon} url={link.url}   />

{/each}
{/if}
</div>
