<script>
// @ts-nocheck
import {InputForm} from '$lib/cmp';
import deleteFn from './fn/deleteFn';
//==================================================
import {showDeleteStore} from './store';
$:showDelete = $showDeleteStore;

</script>

<!-- ********** The Hidden Dialogue box **************** -->

{#if showDelete }
<InputForm clk={ deleteFn } title='Delete Template' btnTitle='Delete' comment='Type in the title' />
{/if}

<!-- ********** The Hidden Dialogue Box Ends *********** -->