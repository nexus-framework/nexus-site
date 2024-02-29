<script lang="ts">
	import { onMount } from 'svelte';
	import mixpanel from 'mixpanel-browser';

	onMount(() => {
		mixpanel.track('HomePage');
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<img src="logo.svg" alt="Nexus Framework Logo" width="150px" />
		<h2 class="h2">Nexus Framework</h2>
		<div class="space-y-2">
			<p>
				Nexus is a Framework for easily setting up microservice solutions for .NET using Steeltoe
			</p>
		</div>
		<div class="space-y-2">
			<a href="https://docs.nexus-framework.net/" target="_blank" rel="noopener noreferrer">
				<button type="button" class="btn variant-filled">Get Started</button>
			</a>
		</div>
	</div>
</div>
