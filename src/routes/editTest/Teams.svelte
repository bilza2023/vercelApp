<script>
  //@ts-nocheck
  import { SectionHead, DDDivs, FormRow, Comment } from "$lib/cmp";
  import { Icons, onMount, toast } from '$lib/util';
  import { Agent } from '$lib/ajax';
  import Centre from "$lib/cmp/Centre.svelte";

  export let item;
  let classes;
  onMount(async () => {
    try {
      const resp = await Agent.read('class');
      if (resp.ok) {
        const data = await resp.json();
        classes = data.items;
      } else {
        toast.push('failed to load');
      }
    } catch (e) {
      toast.push('failed to load');
    }
  });

  function update(event) {
  debugger;
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = classes[selectedIndex];
    item.classId = selectedOption._id 
    // console.log(selectedOption._id);
  }
</script>

<SectionHead title={"Select Class"} icon={Icons.MANAGER}>
  <br />
  <Centre>
    <select class='bg-gray-700 text-white w-10/12' on:change={update}>
      {#each classes as classObj}
        <option class='text-center w-full mx-4'>
          {classObj.name}
        </option>
      {/each}
    </select>
  </Centre>
  <br />
</SectionHead>
