<script>
//@ts-nocheck
import { FormRow } from '$lib/cmp';
import DivDsiplay from './DivDsiplay.svelte';
import { itemsStore } from './store';
$: item = $itemsStore[index];

export let index;

let show = false;

// Accessing the item from the store

// Function to update the store
function updateItem(property, value) {
  debugger;
  // Update the item's property within the store
  $itemsStore.update(store => {
    store[index][property] = value;
    return store;
  });
}
</script>

<DivDsiplay {index}/>

<div>
  <button on:click={() => show = !show} class='text-2xl'>...</button>
</div>

{#if show }
<div class='flex flex-col justify-center bg-stone-600'>
  <div class="overflow-y-auto pb-4" style="max-height: 300px;">
    <FormRow title="Content">
      <input type="text" class="w-full bg-gray-700 color-white p-2 m-1 rounded-md" bind:value={item.content} on:input={e => updateItem('content', e.target.value)} />
    </FormRow>
    <!-- Rest of your FormRow elements with similar update pattern -->
  </div>
</div>
{/if}
