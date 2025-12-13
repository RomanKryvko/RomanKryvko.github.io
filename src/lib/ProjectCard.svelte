<script lang="ts">
  import ExternalLink from './ExternalLink.svelte';
  import InfoCard from './InfoCard.svelte';

  const { url, name, shortDesc, children } = $props();
</script>

<div class="project-card">
  <InfoCard>
    <div class="proj-name-wraper">
      <span class="proj-name"><ExternalLink {url}>{name}</ExternalLink></span>
    </div>
    <h3>{shortDesc}</h3>
    {@render children()}
  </InfoCard>
</div>

<style>
  .project-card {
    min-height: 250px;
    width: 400px;
    margin: 5px;
  }
  .proj-name-wraper {
    display: flex;
    justify-content: center;
  }
  .proj-name {
    font-size: var(--h1);
    font-weight: bold;
  }
</style>
