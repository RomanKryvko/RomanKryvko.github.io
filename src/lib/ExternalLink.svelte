<script lang="ts">
  const { url, children } = $props();
</script>

<a class="external-link" rel="external" href={url}><u>{@render children()}</u></a>

<style>
  .external-link {
    text-decoration: none;
    color: var(--color-text);
  }

  .external-link:after {
    font-family: system-ui;
    font-size: larger;
    content: '↗';
  }
</style>
