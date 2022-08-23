<template>
<div>
  <HeaderHero />
    <div>
      <div class="bg-light-gray" style="height: 300px; width: 100%;"></div>
  <div class="container">   
    <h2 class="worksans">My Resume</h2>
<div class="p-2">
    <h3>Experience</h3>
    <div class="bg-light-yellow p-4 mb-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Web Designer</p>
                      <p class="worksans" style="font-weight: 300;">April 2022 - Present</p>
                <p class="worksans fw-500 mb-0">University Of Nebraska-Lincoln</p>
                <p class="worksans fw-500 mb-4">Lincoln, Nebraska</p>
                <ul class="ps-4">
                  <li>Designed and developed responsive and content-rich webpages for various University programs.</li>
                  <li>Maintain and update websites for their content and coding errors</li>
                </ul>
    </div>

        <div class="bg-light-yellow p-4 mb-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Apprentice Web Programmer</p>
                      <p class="worksans" style="font-weight: 300;">November 2021 - Present</p>
                <p class="worksans fw-500 mb-0">University Of Nebraska-Lincoln</p>
                <p class="worksans fw-500 mb-4">Lincoln, Nebraska</p>
                <ul class="ps-4">
                  <li>Developed PHP Symfony application that generates custom logos in 30 different formats for different university departments.</li>
                  <li>Designed web pages for different college institutions on top of Drupal CMS.</li>
                  <li>Fixed HTML, CSS, and JavaScript in websites for bugs, outdated content, insufficient color contrasts and broken user interfaces.</li>
                </ul>
    </div>

            <div class="bg-light-yellow p-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Web Developer</p>
                      <p class="worksans" style="font-weight: 300;">April 2019 - Present</p>
                <p class="worksans fw-500 mb-0">Kathmandu International Mountain Film Festival </p>
                <p class="worksans fw-500 mb-4">Kathmandu, Nepal</p>
                <ul class="ps-4">
                  <li>Successfully developed an online platform to stream 60+ films to over 12k+ users in a period of 1 week.</li>
                  <li>Migrated from Kimff’s old Joomla installation to a modern WordPress site with custom components.</li>
                  <li>Synced and pipelined the data passed across events using Python FastAPI framework.</li>
                  <li>Refined the existing film video encoding to a better quality and less bandwidth format.</li>
                  <li>Created Python automation bots to process the videos and distribute them through CDNs.</li>
                </ul>
    </div>
    </div>

    <div class="p-2">
    <h3>Education</h3>
    <div class="bg-light-yellow p-4 mb-4 rounded-3">  
                          <p class="worksans fw-500 fs-5 mb-2">University of Nebraska-Lincoln, <span class="worksans fw-normal">Bachelor’s in Computer Science</span></p>
    <p class="worksans fw-normal">Aug 2021–December 2023 (Est.)</p>
    </div>
    </div>

  </div>
  </div>

  <Footer />

</div>
</template>

<script>
import HeaderHero from '~/components/HeaderHero.vue';
export default {
    name: "Resume",
    components: { HeaderHero }
}
</script>
