<script lang="ts">
  import ExternalLink from '$lib/ExternalLink.svelte';
  import GitHubPreview from '$lib/GitHubPreview.svelte';
  import InfoCard from '$lib/InfoCard.svelte';
  import ProjectCard from '$lib/ProjectCard.svelte';
  import SectionHeader from '$lib/SectionHeader.svelte';
  import SkillCard from '$lib/SkillCard.svelte';
  import { strings } from '$lib/i18n/strings.js';
  import skills from '$lib/assets/skills.json';
  import personal from '$lib/assets/personal.json';

  let { data } = $props();

  const stripProtocol = (link: string): string => {
    return link.match(/http.:\/\/(.*)/)?.at(1) ?? link;
  };
</script>

<svelte:head>
  <title>Roman's portfolio</title>
</svelte:head>

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
      <li><ExternalLink url={personal.resume}>{$strings.aboutResume}</ExternalLink></li>
    </ul>
  </InfoCard>
  <SectionHeader id="skills">{$strings.skillsHeader}</SectionHeader>
  <div class="skill-section">
    {#each skills as s}
      <SkillCard icon={s.icon} name={s.name} subskills={s.subskills} />
    {/each}
  </div>
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
          <li>command lists and pipelines.</li>
        </ul>
        <li>C++20, CMake.</li>
      </ul>
    </ProjectCard>
    <ProjectCard
      url="https://github.com/RomanKryvko/open-img-translate"
      name="Open Image Translate"
      shortDesc="A browser extension for translating images."
    >
      <ul>
        <li>Uses OCR to detect text in image or screen area;</li>
        <li>uses translation APIs to translate text;</li>
        <li>displays results in a popup;</li>
        <li>TypeScript, tesseract.js (OCR), Vite, Svelte.</li>
      </ul>
    </ProjectCard>
  </div>
</div>
<div class="section">
  <SectionHeader id="contact">{$strings.contactHeader}</SectionHeader>
  <InfoCard>
    <p>Email: <ExternalLink url="mailto:{personal.email}">{personal.email}</ExternalLink></p>
    <p>
      Linkedin: <ExternalLink url={personal.linkedin}
        >{stripProtocol(personal.linkedin)}</ExternalLink
      >
    </p>
  </InfoCard>
  <h3>{$strings.thanksForVisiting}</h3>
</div>

<style>
  .hero-section {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
  }
  .hero-section * {
    flex: 1;
    min-width: 200px;
  }
  .greeting {
    font-size: var(--h1);
  }
  .projects-section {
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
  }
  .skill-section {
    width: 100%;
  }
</style>
