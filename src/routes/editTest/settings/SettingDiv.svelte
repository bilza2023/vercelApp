<script>
// @ts-nocheck
import { SectionHead, FormRow, Tf } from '$lib/cmp';
export let item;
</script>



  <SectionHead title={item.title}>
    <FormRow title="Quiz Title">
      <input
        type="text"
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.title}
      />
    </FormRow>

    <FormRow title="Intro Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.introText}
      ></textarea>
    </FormRow>

    <FormRow title="Farewell Text">
      <textarea
        class="w-full bg-gray-700 color-white p-2 m-1 rounded-md"
        bind:value={item.farewellText}
      />
    </FormRow>

    <!-- Additional FormRows for 'saveResponse', 'showIntro', 'showResult' properties -->

  </SectionHead>
