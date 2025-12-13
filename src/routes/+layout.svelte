<script lang="ts">
  import Navigation from '$lib/Navigation.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles.css" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  </style>
</svelte:head>

<Navigation />
<main class="main">
  {@render children()}
</main>

<style>
  .main {
    margin-top: 2em;
    margin-left: clamp(3em, 15vw, 10em);
    margin-right: clamp(3em, 15vw, 10em);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
