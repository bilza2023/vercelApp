<script>
// @ts-nocheck
import { InputForm } from '$lib/cmp';
import RunDiv from './RunDiv.svelte';
  
export let quizObj;

import {visibleDialogStore} from './store';
$: visibleDialog = $visibleDialogStore;

</script>

  <!-- ********** The Hidden Dialogue box **************** -->

{#if quizObj}
{#if visibleDialog=='cloneDlg' }
<InputForm clk={ quizObj.clone  } title='Clone Test' btnTitle='Clone' btnColor='bg-green-800'/>
{/if}

{#if visibleDialog=='runDlg' }
<RunDiv {quizObj}/>
{/if}


{#if visibleDialog=='deleteDlg' }
<InputForm clk={ quizObj.delete  } title='Delete Test' btnTitle='Delete' comment='Type in the title' btnColor='bg-red-800'/>
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->
{/if}