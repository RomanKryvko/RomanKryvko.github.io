<script lang="ts">
  import ExternalLink from '$lib/ExternalLink.svelte';
  import GitHubPreview from '$lib/GitHubPreview.svelte';
  import InfoCard from '$lib/InfoCard.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';
  import SectionHeader from '$lib/SectionHeader.svelte';
  import SkillCard from '$lib/SkillCard.svelte';
  import { strings } from '$lib/i18n/strings.js';

  let { data } = $props();
  const subs = [{ icon: '/img/django-logo.svg', name: 'Django' }];

  const EMAIL = 'roman.kr43@gmail.com';
  const LINKEDIN = 'www.linkedin.com/in/roman-kryvko-946361319';
</script>

<div class="hero-section section">
  <h1 class="greeting">
    {@html $strings.heroSection}
  </h1>
  <GitHubPreview avatar_url={data.avatar_url} html_url={data.html_url} login={data.login} />
</div>
<div class="section">
  <SectionHeader id="about">{$strings.aboutHeader}</SectionHeader>
  <InfoCard>
    <ul>
      <li>{$strings.aboutIntro}</li>
      <li>{$strings.aboutEducation}</li>
      <li>{$strings.aboutLookingFor}</li>
      <li>
        {$strings.aboutLinux}<ExternalLink url="https://github.com/RomanKryvko/dotfiles"
          >(dotfiles)</ExternalLink
        >
      </li>
      <li>{$strings.aboutResume}</li>
    </ul>
  </InfoCard>
  <SectionHeader id="skills">{$strings.skillsHeader}</SectionHeader>
  <SkillCard icon="/img/python-logo.svg" name="python" subskills={subs} />
</div>
<div class="section">
  <SectionHeader id="projects">{$strings.projectsHeader}</SectionHeader>
  <div class="projects-section">
    <ProjectCard
      url="https://github.com/RomanKryvko/stush"
      name="Stush"
      shortDesc="A simple Linux shell created for educational purposes."
    >
      <ul>
        <li>Features:</li>
        <ul>
          <li>line-editing library;</li>
          <li>glob expansions;</li>
          <li>basic builtins;</li>
          <li>command lists and pipelines</li>
        </ul>
        <li>C++20, CMake</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      url="https://github.com/RomanKryvko/open-img-translate"
      name="Open Image Translate"
      shortDesc="A browser extension for translating images."
    >
      <ul>
        <li>Uses OCR to detect text in image or screen area.</li>
        <li>Uses translation APIs to translate text.</li>
        <li>Displays results in a popup.</li>
        <li>TypeScript, tesseract.js (OCR), Vite, Svelte</li>
      </ul>
    </ProjectCard>
  </div>
</div>
<div class="section">
  <SectionHeader id="contact">{$strings.contactHeader}</SectionHeader>
  <InfoCard>
    <p>Email: <ExternalLink url="mailto:{EMAIL}">{EMAIL}</ExternalLink></p>
    <p>Linkedin: <ExternalLink url={LINKEDIN}>{LINKEDIN}</ExternalLink></p>
  </InfoCard>
  <h3>{$strings.thanksForVisiting}</h3>
</div>

<style>
  .hero-section {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .hero-section * {
    flex: 1;
    min-width: 200px;
  }
  .projects-section {
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
  }
</style>
