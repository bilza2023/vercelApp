<script>
export let icon = '📜';
export let bgColor = 'bg-gray-700';
export let size = '2'; //1-to-4
export let borderColor = 'border-white';
export let borderWidth = 'border-1';
export let clk = ()=>console.log('clicked');
</script>




<button class={`${bgColor} ${borderColor} ${borderWidth} inline-block  rounded-md p-1 m-1  `} on:click={clk}>
<span class={`text-${size}xl`}>{icon}</span>
</button>