<script>
  // @ts-nocheck
  import { PageNav, PageNavBtn } from '$lib/cmp';
  import { Icons } from '$lib/util';


</script>

<PageNav>
  <PageNavBtn
    icon={Icons.SAVE}
    title="Save"
    tf={true}
    trueColor={"text-white"}
    clk={() =>console.log('ok')}
  />

  <PageNavBtn
    icon={Icons.RUN}
    title="Run"
    tf={true}
    trueColor={"text-white"}
    clk={() =>console.log('ok')}
  />

  <PageNavBtn
    icon={"🐑"}
    title="Clone"
    tf={false}
    trueColor={"text-white"}
    falseColor={"text-gray-600"}
    clk={() =>console.log('ok')}
  />

  <PageNavBtn
    icon={"🗑️"}
    title="Delete"
    tf={false}
    trueColor={"text-white"}
    falseColor={"text-gray-600"}
    clk={() =>console.log('ok')}
  />
</PageNav>
