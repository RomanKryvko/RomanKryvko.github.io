<script lang="ts">
  import GitHubPreview from '$lib/GitHubPreview.svelte';
  let { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<GitHubPreview avatar_url={data.avatar_url} html_url={data.html_url} login={data.login} />
