<!-- Component.svelte -->
<script>
  // @ts-nocheck
import {SectionHead } from '$lib/cmp';
import {Icons} from '$lib/util';
import SettingDiv from './SettingDiv.svelte';  
import PublishTimings from './PublishTimings.svelte';  
import UnPublishTimings from './UnPublishTimings.svelte';  
import ClassesDd from "$lib/appComp/ClassesDD.svelte";
export let item;

</script>

<br/>
<SettingDiv {item} />
<br/>
        <SectionHead title={"Select Class"} icon={Icons.MANAGER}>
            <br />
              <ClassesDd {item}/>
            <br />
        </SectionHead>
<br/>
<PublishTimings {item} />
<br/>
<UnPublishTimings {item} />
<br/>