<script lang="ts">
  import LanguageToggle from './LanguageToggle.svelte';
  import Logo from './Logo.svelte';
</script>

<header class="header">
  <Logo />
  <nav>
    <a href="/#about" class="link-hidden button-fill">About</a>
    <a href="/#projects" class="link-hidden button-fill">Projects</a>
    <a href="/#contact" class="link-hidden button-fill">Contact</a>
  </nav>
  <LanguageToggle />
</header>

<style>
  .header {
    background-color: var(--color-background);
    position: sticky;
    top: 0px;
    box-shadow: 0px 4px 50px 0px #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bolder;
    font-size: 20px;
    z-index: 1;
  }

  .header nav a {
    padding: 0px 40px;
  }

  .button-fill {
    position: relative;
    display: inline-block;
    clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
  }

  .button-fill::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    clip-path: inherit;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: -1;
  }

  .button-fill:hover::before {
    transform: scaleX(1);
  }

  .button-fill:focus {
    transition: color 0.25s ease 0.15s;
    color: var(--color-background);
  }

  .button-fill:focus::before {
    transform: scaleX(1);
  }

  .button-fill:hover {
    transition: color 0.25s ease 0.15s;
    color: var(--color-background);
  }
</style>
