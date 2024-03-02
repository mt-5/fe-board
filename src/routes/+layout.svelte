<script>
	import H1 from "$lib/components/typography/H1.svelte";
	import { ModeWatcher } from "mode-watcher";
	import "../app.pcss";
	import ThemeToggle from "$lib/components/ThemeToggle.svelte";
	import "$lib/fonts/GeistSans/GeistSans.css"
	import "$lib/fonts/GeistMono/GeistMono.css"
</script>

<ModeWatcher />

<div class="app flex flex-col">

	<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex justify-between align-center my-5">
			<H1>FE Board</H1>
			<ThemeToggle /> 
		</div>
	</header>

	<main class="mb-auto">
		<slot></slot>
	</main>

	<footer class="container">
		<p>Maciej Toborek</p>
	</footer>
</div>
