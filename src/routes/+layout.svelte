<script>
 import { SvelteToast } from '@zerodevx/svelte-toast'
 import MainNav from '$lib/appComp/MainNav.svelte';
  import "../app.postcss";
  const options = {}
</script>
<SvelteToast {options} />

<MainNav/>
<slot />
