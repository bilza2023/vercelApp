<script>
// @ts-nocheck
import {PageWrapper,HdgWithIcon,Centre,DDDivs} from '$lib/cmp';
import SettingsMain from '$lib/appComp/SettingsMain.svelte';
import Toolbar from './Toolbar.svelte'
import QuestionsROM from './QuestionsROM.svelte';
import PublishTimings from './PublishTimings.svelte';
import UnPublishTimings from './UnPublishTimings.svelte';
import {onMount,toast,get} from '$lib/util';

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
        <HdgWithIcon icon='📜'>Edit Test</HdgWithIcon>
        </Centre>
        <br/>
            
        <!-- ********** Main Settings  *********** -->
        <div class='px-8'>
        <SettingsMain {item} />
        </div>
       
        <!-- PublishTimings -->
        <br/>
        <div class='px-8'>
        <PublishTimings {item} />
        </div>
        
        <!-- UnPublishTimings -->
        <br/>
        <div class='px-8'>
        <UnPublishTimings {item} />
        </div>
       
        <!-- THE Question -->
        <br/>
        <div class='px-8'>
        <QuestionsROM questions= {item.questions} title={'Questions (Read Only)'} />
        </div>
<br/>
<br/>
</PageWrapper>
