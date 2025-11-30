<script lang="ts">
  import { fly } from 'svelte/transition';

  const props = $props();
  let showGitHubLink = $state(false);
</script>

<div class="github-profile">
  <button
    class="github-btn"
    type="button"
    onclick={() => {
      showGitHubLink = !showGitHubLink;
    }}
  >
    <img class="github-avatar" alt="GitHub avatar." src={props?.avatar_url} />
  </button>
  {#if showGitHubLink}
    <a class="github-link link-hidden" transition:fly href={props?.html_url}
      >GitHub: <u>{props?.login}</u></a
    >
  {/if}
</div>

<style>
  .github-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
  }
  .github-btn {
    border-radius: 50%;
    border-color: transparent;
    background-color: transparent;
    cursor: pointer;
    color: var(--text-color);
  }
  .github-avatar {
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--color-primary);
    text-align: center;
    visibility: visible;
  }
  .github-link:after {
    font-family: system-ui;
    font-size: larger;
    content: '↗';
  }
</style>
