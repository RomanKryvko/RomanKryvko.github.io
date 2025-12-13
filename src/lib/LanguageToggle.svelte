<script lang="ts">
  import { lang } from './i18n/strings';

  let selectedLang = $state('eng');
  const changeLang = () => {
    lang.set(selectedLang);
  };
</script>

<div class="language-switch">
  <div class="switch-wrapper wrapper-eng">
    <input
      type="radio"
      id="radio-eng"
      name="lang-switch"
      value="eng"
      bind:group={selectedLang}
      onchange={changeLang}
    />
    <label for="radio-eng">Eng</label>
  </div>
  <div class="switch-wrapper wrapper-ukr">
    <input
      type="radio"
      id="radio-ukr"
      name="lang-switch"
      value="ukr"
      bind:group={selectedLang}
      onchange={changeLang}
    />
    <label for="radio-ukr">Ukr</label>
  </div>
</div>

<style>
  .language-switch {
    display: flex;
    clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
  }

  .switch-wrapper {
    flex-grow: 1;
  }

  .switch-wrapper input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }

  .switch-wrapper label {
    position: relative;
    color: var(--color-text);
    cursor: pointer;
    display: block;
    font-weight: lighter;
    text-align: center;
    padding: 2px 4px;
    transition: color 0.4s ease 0s;
    clip-path: var(--shape, none);
    overflow: hidden;
  }

  .switch-wrapper label::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--color-primary);
    clip-path: inherit;
    transform: scaleX(0);
    transform-origin: var(--origin, left);
    transition: transform 0.3s ease;
  }

  .wrapper-ukr label {
    --shape: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    --origin: left;
    padding: 2px 20px 2px 4px;
  }

  .wrapper-eng label {
    --shape: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    --origin: right;
    padding: 2px 4px 2px 20px;
  }

  .switch-wrapper input[type='radio']:checked + label::before {
    transform: scaleX(1);
  }

  .switch-wrapper input[type='radio']:checked + label {
    background-color: var(--color-primary);
    color: var(--color-background);
    transition: color 0.25s ease 0.15s;
  }
</style>
