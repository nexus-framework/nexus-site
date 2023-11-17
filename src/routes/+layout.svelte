<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
			<a class="text-xl uppercase" href="/"><strong>Nexus Framework</strong></a>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<LightSwitch />
			<a href="https://docs.nexus-framework.net/"><i class="fa-solid fa-book text-xl" /></a>
			<a href="https://github.com/nexus-framework"><i class="fa-brands fa-github text-xl" /></a>
		</svelte:fragment>
	</AppBar>

	<slot />
</AppShell>
