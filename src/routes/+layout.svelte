<script>
import H1 from "$lib/components/typography/H1.svelte";
import { ModeWatcher } from "mode-watcher";
import "../app.pcss";
import ThemeToggle from "$lib/components/ThemeToggle.svelte";
import Button from "$lib/components/ui/button/button.svelte";
import Auth from "$lib/services/AuthService";
import Avatar from "$lib/components/ui/avatar/avatar.svelte";

</script>

<ModeWatcher />

<div class="app h-svh flex flex-col">

	<header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex items-center my-5">
			<H1>FE Board</H1>
			<div class="ml-auto flex items-center gap-5">
				{#if Auth.user}
					<Avatar class="w-8 h-8">
						<img src={Auth.user.user_metadata.avatar_url} alt="Avatar"/>
					</Avatar> 
					<span>{Auth.user.user_metadata.user_name}</span>
					<Button variant="outline" on:click={() => Auth.signOut()}>Sign out</Button>
				{/if}
				
				<ThemeToggle />
			</div> 
		</div>
	</header>

	<main class="mb-auto">
		<slot></slot>
	</main>

	<footer class="container text-center text-secondary mt-auto py-2 text-sm">
		(MIT) 2024 Maciej Toborek | Build: v0.0.1
	</footer>
</div>
