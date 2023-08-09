please change this svelte component 
==>
<script>
  export let content = 'content';
  // Suitable values for each variable are given in the comments
  export let paddingX = 20; // e.g. 10, 15, 25
  export let paddingY = 20; // e.g. 10, 15, 25
  export let bgColor = 'green'; // e.g. 'red', 'blue', '#FF5733'
  export let opacity = 1; // e.g. 0.3, 0.7, 1
  export let borderColor = 'blue'; // e.g. 'red', 'blue', '#FF5733'
  export let fontStyle = 'italic'; // e.g. 'normal', 'oblique'
  export let fontWeight = 'bold'; // e.g. 'normal', 'lighter', 'bolder'
  export let fontColor = 'white'; // e.g. 'black', '#FF5733'
  export let borderWidth = 5; // e.g. 1, 2, 3
  export let fontSize = 16; // e.g. 12, 14, 18
  export let borderRadius = 10; // e.g. 5, 15, 20
  export let marginX = 10; // e.g. 5, 15, 20
  export let marginY = 10; // e.g. 5, 15, 20
  export let borderStyle = 'solid'; // e.g. 'dotted', 'dashed', 'double'
</script>

<div
    style:padding="{paddingY}px {paddingX}px"
    style:margin="{marginY}px {marginX}px"

    style:opacity="{opacity}"
    
    style:font-style="{fontStyle}"
    style:font-size="{fontSize}px"
    style:font-weight="{fontWeight}"
    
    style:border="{borderWidth}px {borderStyle} {borderColor}"
    style:border-radius="{borderRadius}px"
    
    style:background-color="{bgColor}"
    style:color="{fontColor}"
>
{content}
</div>


all the export let statements are not required. we need just one
export let item;
this item object will have all the fields
==>


export const divItem = {
            paddingX : 20,
            paddingY : 20,
            bgColor : 'green',
            opacity : 1,
            borderColor : 'blue',
            fontStyle : 'italic',
            fontWeight : 'bold',
            fontColor : 'white',
            borderWidth : 5,
            fontSize : 16,
            borderRadius : 10,
            marginX : 10,
            marginY : 10,
            borderStyle : 'solid',
}

so the code needs to be change as
style:font-style="{item.fontStyle}"
    style:font-size="{item.fontSize}px"
    style:font-weight="{item.fontWeight}"