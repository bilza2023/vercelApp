<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons} from "$lib/util";
export let url;
export let name;
</script>


<Card
  icon = {Icons.BALANCE}
  title= "FBISE 9th Math"
  url = {url}
  >
  <p class="p-1 m-1 bg-gray-700 text-xs rounded-md">{name}</p>
  </Card>