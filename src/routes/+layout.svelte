<script>
  import { SvelteToast } from '@zerodevx/svelte-toast'
  import "../app.css";
   const options = {}
  export const prerender = true;
</script>

<SvelteToast {options} />
<slot />