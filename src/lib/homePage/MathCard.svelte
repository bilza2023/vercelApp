<script>
//@ts-nocheck
import {Anchor,PageWrapper,HdgWithIcon,Centre,Card} from '$lib/cmp';
import {Icons} from "$lib/util";
export let id;
export let details;
// export let board;
// export let className;
</script>


<Card
  icon = {Icons.BALANCE}
  title= "FBISE 9th Math"
  url = {`/player?tcode=fbise9math&id=${id}`}
  >
  <p class="p-1 m-1 bg-gray-700 text-xs rounded-md">{details}</p>
  </Card>