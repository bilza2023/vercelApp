<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,InputForm} from '$lib/cmp';

import Questions from './questions/Questions.svelte'
import SettingsMain from '$lib/appComp/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte'
import {onMount,toast,get} from '$lib/util';
import {showTestStore,showCloneStore,showDeleteStore} from './store';
import AddQuestionBar from './AddQuestionBar.svelte';

$: showTest = $showTestStore;
$: showClone = $showCloneStore;
$: showDelete = $showDeleteStore;

//--Fake Data ::keep it here
const item = {
  "title": "The Demo Quiz",
  "userId": "64202224fd8518cb214bd138",
  "saveResponse": false,
  "showIntro": true,
  "introText": "Welcome to your first quiz",
  "showResult": true,
  "showfarewellText": true,
  "farewellText": "Goodbye",
  "members": [],
  "marks": 10,
  "questions": [
    {
      "id": "0b3b5e45-44a1-4870-94ce-aeb18755a895",
      "required": false,
      "content": "Question Statement",
      "explanation": "",
      "marks": 0,
      "questionType": "SurveyMCQ",
      "tags": [],
      "multiSelect": false,
      "selectedOptions": [],
      "correctOptions": [
        "806faa26-be97-4aa4-b4f6-7d5a576e3a82"
      ],
      "displayOptions": "bars",
      "options": [
        {
          "id": "806faa26-be97-4aa4-b4f6-7d5a576e3a82",
          "content": "Option One",
        },
        {
          "id": "ad3cec9d-7bd8-4108-ac48-90001ede75f3",
          "content": "Option Two",
        }
      ]
    }
  ],
  "publishObj": {
    "publishTechnique": "now",
    "unpublishTechnique": "never",
    "publishDate": null,
    "hour": 9,
    "min": 30,
    "unpublishHour": 1,
    "unpublishMin": 0,
    "runStartTime": null,
    "_id": {
      "$oid": "64b04f4f822f95fb8771e5c0"
    }
  },
  "tags": [],
  "createdAt": {
    "$date": "2023-07-13T19:23:59.431Z"
  }
}

onMount(async ()=>{
  try {
//   toast.push("ok");
  } catch (e) {
  
  }   
});

</script>

<!-- ************** -->
<PageWrapper>

<!-- ************** -->
<Toolbar />

        <!-- ************** -->
        <!-- THE MAIN CODE ENDS -->
        <Centre>
        <HdgWithIcon icon='📜'>Edit Tempalte</HdgWithIcon>
        </Centre>

        <!-- ********** The dialogue box **************** -->
          {#if showTest }
            <InputForm clk={() => showTestStore.set(false)  } title='Create New Test' btnTitle='Create'/>
          {/if}

          {#if showClone }
            <InputForm clk={() => showCloneStore.set(false)  } title='Clone Template' btnTitle='Clone' btnColor='bg-orange-800'/>
          {/if}
          
          {#if showDelete }
            <InputForm clk={() => showDeleteStore.set(false)  } title='Delete Template' btnTitle='Delete'/>
          {/if}
        <!-- ********** The dialogue box Ends *********** -->

        <!-- ********** Main Settings  *********** -->

        <div class='px-8'>
        <br/>
          <SettingsMain {item} />
        </div>
        <!-- THE MAIN CODE ENDS -->
        <!-- THE Question -->
        <br/>
        
        <div class='px-8'>
        <Questions questions={item.questions} />
        </div>
<br/>
<AddQuestionBar/>
<br/>
</PageWrapper>
