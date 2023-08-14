<script>
// @ts-nocheck
import { InputForm } from '$lib/cmp';
import RunDiv from './RunDiv.svelte';
  
export let item;
import {visibleDialogStore} from './store';
$: visibleDialog = $visibleDialogStore;

import deleteFn from './fn/deleteFn';
import cloneFn from './fn/cloneFn';

</script>

  <!-- ********** The Hidden Dialogue box **************** -->


{#if visibleDialog=='cloneDlg' }
<InputForm clk={ cloneFn  } title='Clone Test' btnTitle='Clone' btnColor='bg-green-800'/>
{/if}

{#if visibleDialog=='runDlg' }
<RunDiv {item} />
{/if}


{#if visibleDialog=='deleteDlg' }
<InputForm clk={ deleteFn  } title='Delete Test' btnTitle='Delete' comment='Type in the title' btnColor='bg-red-800'/>
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->