import QuestionContentEditor from "../../routes/editTest/QuestionContentEditor/QuestionContentEditor.svelte";
import Editor from "./Editor.svelte";
import Display from "./Display.svelte";

// Div Component
import DivEditor from "./div/DivEditor.svelte";
import DivDisplay from "./list/ListDisplay.svelte";
import divData from "./div/divData.js";

// List  Component
import ListEditor from "./list/ListEditor.svelte";
import ListDisplay from "./list/ListDisplay.svelte";
import listData from "./list/listData.js";

// Table  Component
import TableEditor from "./table/TableEditor.svelte";
import TableDisplay from "./table/TableDisplay.svelte";
import tableData from "./table/tableData";

// Pre  Component
import PreEditor from "./pre/PreEditor.svelte";
import PreDisplay from "./pre/PreDisplay.svelte";
import preData from "./pre/preData";




export {
QuestionContentEditor,
Editor,
Display,

DivEditor,
DivDisplay,
divData,

ListEditor,
ListDisplay,
listData,

TableEditor,
TableDisplay,
tableData,

PreEditor,
PreDisplay,
preData,

}