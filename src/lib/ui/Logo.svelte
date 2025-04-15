<script lang="ts">
	let { class: className }: { class?: string } = $props();
</script>

<picture class="block h-10 sm:h-12 {className}">
	<source
		srcset="./FOODSTER.svg"
		media="(prefers-color-scheme: dark)"
	/>
	<img
		src="/FOODSTER.svg"
		alt="FOODSTER"
		class="h-full w-full"
	/>
</picture>
