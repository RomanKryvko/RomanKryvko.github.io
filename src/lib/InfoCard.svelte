<script lang="ts">
  const { children } = $props();
</script>

<div class="infocard">
  {@render children()}
</div>

<style>
  .infocard {
    height: 100%;
    border-radius: 10px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-tint);
    padding-left: 1em;
    padding-right: 1em;
  }
</style>
