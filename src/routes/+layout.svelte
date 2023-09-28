<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import "../app.css";
   const options = {}
</script>

<SvelteToast {options} />
<slot />