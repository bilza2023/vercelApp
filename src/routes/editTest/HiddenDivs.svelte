<script>
// @ts-nocheck

import { InputForm } from '$lib/cmp';
import RunDiv from './RunDiv.svelte';

  
export let item;
import {showCloneStore,showDeleteStore,showRunDlgStore} from './store';
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore
$: showRunDlg = $showRunDlgStore


import deleteFn from './fn/deleteFn';
import cloneFn from './fn/cloneFn';



</script>

  <!-- ********** The Hidden Dialogue box **************** -->


{#if showClone }
<InputForm clk={ cloneFn  } title='Clone Template' btnTitle='Clone' btnColor='bg-orange-800'/>
{/if}

{#if showRunDlg }
<RunDiv {item} />
{/if}


{#if showDelete }
<InputForm clk={ deleteFn  } title='Delete Test' btnTitle='Delete' comment='Type in the title'/>
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->