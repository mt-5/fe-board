<script lang="ts">
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import * as Table from "$lib/components/ui/table";
	import GitHub from "$lib/services/GithubService";
	
	let repos: any[] = []

	async function loadRepos() {
		repos = await GitHub.getRepos()
	}

	loadRepos()
</script>

<svelte:head>
	<title>FE Board</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="container mt-10">
	<h2 class="text-2xl font-bold mb-5">Repos</h2>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>Name</Table.Head>
				<Table.Head>Description</Table.Head>
				<Table.Head>Language</Table.Head>
				<Table.Head>Owner</Table.Head>
				<Table.Head>Privacy</Table.Head>
				<Table.Head class="text-right">Created at</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each repos as repo, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium">{repo.name}</Table.Cell>
					<Table.Cell>{repo.description ?? '-'}</Table.Cell>
					<Table.Cell>{repo.language ?? '-'}</Table.Cell>
					<Table.Cell>{repo.owner}</Table.Cell>
					<Table.Cell>
						{#if repo.isPrivate}
							<Badge class="ml-2">Private</Badge>
						{/if}
					</Table.Cell>
					<Table.Cell class="text-right">{repo.createdAt}</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</section>