<template>
<div>
  <Header />
    <div class="main-body pt-1">
  <div class="container">
    <h2 class="worksans text-center">My Resume</h2>
    <h4>Experience</h4>
    <div class="bg-light-yellow p-4 mb-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Web Designer</p>
                      <p class="worksans" style="font-weight: 300;">April 2022 - Present</p>
                <p class="worksans fw-500 mb-4">University Of Nebraska-Lincoln</p>
                <p class="worksans fw-500 mb-4">Lincoln, Nebraska</p>
                <ul>
                  <li>Designed and developed responsive and content-rich webpages for various University programs.</li>
                  <li>Maintain and update websites for their content and coding errors</li>
                </ul>
    </div>

        <div class="bg-light-yellow p-4 mb-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Apprentice Web Programmer</p>
                      <p class="worksans" style="font-weight: 300;">November 2021 - Present</p>
                <p class="worksans fw-500 mb-4">University Of Nebraska-Lincoln</p>
                <p class="worksans fw-500 mb-4">Lincoln, Nebraska</p>
                <ul>
                  <li>Developed PHP Symfony application that generates custom logos in 30 different formats for different university departments.</li>
                  <li>Designed web pages for different college institutions on top of Drupal CMS.</li>
                  <li>Fixed HTML, CSS, and JavaScript in websites for bugs, outdated content, insufficient color contrasts and broken user interfaces.</li>
                </ul>
    </div>

            <div class="bg-light-yellow p-4 rounded-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Web Developer</p>
                      <p class="worksans" style="font-weight: 300;">April 2019 - Present</p>
                <p class="worksans fw-500 mb-4">Kathmandu International Mountain Film Festival </p>
                <p class="worksans fw-500 mb-4">Kathmandu, Nepal</p>
                <ul>
                  <li>Successfully developed an online platform to stream 60+ films to over 12k+ users in a period of 1 week.</li>
                  <li>Migrated from Kimff’s old Joomla installation to a modern WordPress site with custom components.</li>
                  <li>Synced and pipelined the data passed across events using Python FastAPI framework.</li>
                  <li>Refined the existing film video encoding to a better quality and less bandwidth format.</li>
                  <li>Created Python automation bots to process the videos and distribute them through CDNs.</li>
                </ul>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>
