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
  .skill-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.25rem 0;
  }

  .skill-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-tint);
    border: 1px solid var(--color-primary);
    border-radius: 8px;

    padding: 0.5rem;
    transition:
      background 0.2s ease,
      border-color 0.2s ease;
  }

  .skill-btn:hover {
    background: color-mix(in srgb, var(--color-secondary), transparent 90%);
    border-color: var(--color-secondary);
  }

  .skill-icon {
    width: clamp(28px, 6vw, 60px);
    height: clamp(28px, 6vw, 60px);

    transition: transform 0.35s ease;
  }

  .icon-activated {
    transform: rotate(90deg);
  }

  .subskill-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin-left: 0.75rem;
    padding: 0.2rem 0.4rem;
    overflow: hidden;
  }

  .subskill {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    background: var(--color-tint);
    transition:
      border-color 0.2s ease,
      transform 0.2s ease,
      background 0.2s ease;
  }

  .subskill:hover {
    border-color: var(--color-secondary);
    background: color-mix(in srgb, var(--color-secondary), transparent 90%);
  }

  .subskill-icon {
    width: clamp(32px, 5vw, 50px);
    height: auto;
    margin-bottom: 0.25rem;
  }

  .subskill span {
    font-family: 'Ubuntu', sans-serif;
    color: var(--color-text);
    text-align: center;
  }
</style>
