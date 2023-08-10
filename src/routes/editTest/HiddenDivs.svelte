<script>
// @ts-nocheck

import { InputForm } from '$lib/cmp';

  
export let showTest;
export let showClone;
export let showDelete;
export let clone;
export let deleteItem;

async function makeTest (newTitle ){
  debugger;
  await makeTestFn(newTitle,get(itemStore) );
}

</script>

  <!-- ********** The Hidden Dialogue box **************** -->

{#if showTest }
<InputForm clk={ makeTest  } title='Create New Test' btnTitle='Create'/>
{/if}


{#if showClone }
<InputForm clk={ clone  } title='Clone Template' btnTitle='Clone' btnColor='bg-orange-800'/>
{/if}


{#if showDelete }
<InputForm clk={ deleteItem  } title='Delete Template' btnTitle='Delete' comment='Type in the title'/>
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->