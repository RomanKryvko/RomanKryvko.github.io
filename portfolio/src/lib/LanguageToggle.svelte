<script lang="ts">
</script>

<div class="language-switch">
  <div class="switch-wrapper">
    <input type="radio" id="radio-eng" name="lang-switch" checked />
    <label for="radio-eng">Eng</label>
  </div>
  <div class="switch-wrapper">
    <input type="radio" id="radio-ukr" name="lang-switch" />
    <label for="radio-ukr">Ukr</label>
  </div>
</div>

<style>
  .language-switch {
    display: flex;
  }

  .switch-wrapper {
    flex-grow: 1;
  }

  .switch-wrapper input[type='radio'] {
    display: none;
  }

  .switch-wrapper label {
    color: var(--color-text);
    padding: 1px 5px;
    cursor: pointer;
    user-select: none;
    display: block;
    font-weight: lighter;
    text-align: center;
    transition: all 0.4s 0s ease;
  }

  .switch-wrapper input[type='radio']:checked + label {
    background-color: var(--color-primary);
    border-radius: 4px;
    color: var(--color-background);
  }
</style>
