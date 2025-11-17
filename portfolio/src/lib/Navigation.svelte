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
    box-shadow: 0px 4px 50px 0px #000000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: bolder;
    font-size: 20px;
  }

  .header nav a {
    padding: 0px 40px;
  }
</style>
