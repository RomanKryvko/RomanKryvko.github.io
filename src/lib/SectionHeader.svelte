<script lang="ts">
  const { id, children } = $props();
</script>

<div class="section-header-wrapper">
  <h1 class="section-header" {id}>{@render children()}</h1>
</div>

<style>
  .section-header {
    overflow: hidden;
    clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
    background-color: var(--color-primary);
    padding-left: 2em;
    padding-right: 2em;
    color: var(--color-background);
    max-width: fit-content;
    font-size: var(--h1);
    text-align: center;
  }

  .section-header:hover {
    background-color: var(--color-secondary);
    transition: 0.2s ease;
  }
  .section-header-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
