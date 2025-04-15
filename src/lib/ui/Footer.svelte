<script lang="ts">
	const projectLinks = [
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/who-we-are', text: 'Who we are' },
		{
			url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/open-food-facts-vision-mission-values-and-programs',
			text: 'Vision, Mission, Values and Programs'
		},
		{ url: 'https://corsproxy.io/?url=https://support.openfoodfacts.org/help/en-gb', text: 'Frequently asked questions' },
		{ url: 'https://corsproxy.io/?url=https://blog.openfoodfacts.org/en/', text: 'Open Food Facts blog' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/press', text: 'Press' },
		{ url: 'https://corsproxy.io/?url=https://wiki.openfoodfacts.org/', text: 'Open Food Facts wiki (en)' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/cgi/top_translators.pl', text: 'Translators' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/partners', text: 'Partners' },
		{ url: 'https://corsproxy.io/?url=https://world.openbeautyfacts.org/', text: 'Open Food Facts - Cosmetics' },
		{ url: 'https://corsproxy.io/?url=https://world.pro.openfoodfacts.org/', text: 'Open Food Facts for Producers' }
	];

	const footerLinks = [
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/legal', text: 'Legal' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/privacy', text: 'Privacy' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/terms-of-use', text: 'Terms of use' },
		{ url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/data', text: 'Data, API and SDKs' },
		{
			url: 'https://corsproxy.io/?url=https://world.openfoodfacts.org/donate-to-open-food-facts',
			text: 'Donate to Open Food Facts'
		},
		{ url: 'https://corsproxy.io/?url=https://world.pro.openfoodfacts.org/', text: 'Producers' },
		{ url: 'https://corsproxy.io/?url=https://link.openfoodfacts.org/newsletter-en', text: 'Subscribe to our newsletter' }
	];
</script>

<div
	class="bg-secondary text-secondary-content mt-10 flex flex-col justify-between gap-5 px-10 py-8 md:flex-row md:px-20 lg:px-40"
>
	<div class="flex flex-col gap-1">
		<div class="text-lg font-bold">Join the community</div>
		<div>
			Discover our <a href="https://corsproxy.io/?url=https://world.openfoodfacts.org/code-of-conduct" class="underline"
				>Code of conduct</a
			>
		</div>
		<div><a href="https://corsproxy.io/?url=https://forum.openfoodfacts.org/" class="underline">Forum</a></div>
		<div class="flex gap-2">
			<div>Follow us:</div>
			<a
				href="https://corsproxy.io/?url=https://twitter.com/OpenFoodFacts"
				target="_blank"
				aria-label="Open Food Facts X (formerly Twitter)"
			>
				<span class="icon-[logos--x] h-6 w-5"></span>
			</a>
			<a
				href="https://corsproxy.io/?url=https://www.facebook.com/OpenFoodFacts?utm_source=off&utf_medium=web"
				target="_blank"
				aria-label="Open Food Facts Facebook"
			>
				<span class="icon-[mdi--facebook] h-6 w-6"></span>
			</a>
			<a
				href="https://corsproxy.io/?url=https://www.instagram.com/open.food.facts/"
				target="_blank"
				aria-label="Open Food Facts Instagram"
			>
				<span class="icon-[mdi--instagram] h-6 w-6"></span>
			</a>
		</div>
		<div>
			<a href="https://corsproxy.io/?url=https://link.openfoodfacts.org/newsletter-en" class="underline"
				>Subscribe to our newsletter</a
			>
		</div>
	</div>
	<div class="flex flex-col gap-2 md:max-w-1/2">
		<div class="text-lg font-bold">Discover the project</div>
		<div class="flex flex-wrap gap-3 text-sm">
			{#each projectLinks as link (link.url)}
				<a
					href={link.url}
					class="bg-base-300 text-base-content hover:bg-primary hover:text-primary-content rounded-lg px-2 py-1 transition-all duration-300"
				>
					{link.text}
				</a>
			{/each}
		</div>
	</div>
</div>

<div class="bg-base-200 flex flex-col items-center justify-center gap-3 px-6 py-5">
	<picture>
		<source
			srcset="./FOODSTER.svg"
			media="(prefers-color-scheme: dark)"
			style="filter: brightness(0) invert(100%)"
		/>
		<img
			src="./FOODSTER.svg"
			alt="Open Food Facts"
			class="max-w-md"
			style="filter: brightness(0) invert(100%)"
		/>
	</picture>

	<div class="text-sm">
		A collaborative, free and open database of food products from around the world.
	</div>
	<div class="flex w-full flex-wrap justify-center gap-3 text-xs">
		{#each footerLinks as footerLink (footerLink.url)}
			<a href={footerLink.url} class="underline">{footerLink.text}</a>
		{/each}
	</div>
</div>
