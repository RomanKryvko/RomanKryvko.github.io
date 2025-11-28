<script lang="ts">
  import { slide } from 'svelte/transition';

  const props = $props();
  let expanded = $state(false);
</script>

<div class="skill-container">
  <button
    class="skill-btn"
    onclick={() => {
      expanded = !expanded;
    }}
  >
    <img
      class="skill-icon"
      title={props.name}
      class:icon-activated={expanded}
      src={props.icon}
      alt={props.name}
    />
  </button>
  {#if expanded}
    <div class="subskill-container" transition:slide={{ axis: 'x', easing: (t) => t * 2 }}>
      {#each props.subskills as sub}
        <div class="subskill">
          <img class="subskill-icon" src={sub.icon} alt={sub.name} height="50px" />
          <span>{sub.name}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .skill-icon {
    position: relative;
    transition-duration: 0.4s;
  }

  .icon-activated {
    transform: rotate(90deg);
    transition-duration: 0.4s;
  }

  .skill-container {
    display: flex;
    flex-direction: row;
  }

  .skill-btn {
    cursor: pointer;
    background-color: transparent;
    border-color: var(--color-primary);
    border-radius: 6px;
  }

  .subskill-container {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }

  .subskill {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    border: 2px solid var(--color-primary);
    border-radius: 6px;
  }
</style>
