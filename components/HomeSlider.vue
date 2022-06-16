<template>
<div>
    <div class="main-body pt-1">
        <div class="container">
        <div class="home-slider mt-3 px-2 pb-5">
            <img class="slider-img rounded mx-auto d-block" src="@/static/img/abhi-sydney.jpg" alt="Abhi in Sydney">
            <div class="mt-4">
                <p class="fs-3 worksans mb-0 fw-500">Hi,</p>
            </div>
            <div class="mt-0">
                <p class="fs-2 worksans fw-semibold mb-0">I'm Abhi Rijal</p>
            </div>
            <div class="mt-2">
                <p class="fs-6 worksans mb-0">and I like to design websites and code applications.</p>
            </div>
            <div class="mt-4">
                <button type="button" class="btn btn-danger worksans text-white fw-500 me-4 ar-red">Resume</button>
                <button type="button" class="btn btn-outline-dark fw-500">Projects</button>
            </div>
        </div>
        </div>
        <div class="bg-light-gray container py-5">
            <div class="text-center">
                <h3 class="worksans fw-semibold mb-4">My Skills</h3>
            </div>
            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Frontend</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">HTML, CSS, JavaScript, Vue.js & Nuxt.js, Bootstrap & Tailwind CSS.</p>
            </div>
            
            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Backend</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">Python, C#, PHP, MySQL & MariaDB, WordPress, Drupal.</p>
            </div>

            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Tools</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">AWS, Git, NGINX, Linux System Administration (Ubuntu), Figma, FFMPEG, CDN.</p>
            </div>
        </div>

        <div class="container py-5">
            <div class="text-center">
                <h3 class="worksans fw-semibold mb-4">Recent Projects</h3>
            </div>
            <div class="bg-light- p-4 rounded-3 mb-3">
                <p class="worksans fw-semibold fs-5 mb-2">UNL Lockups Factory</p>
                <p class="worksans fw-500 mb-4">University Of Nebraska-Lincoln | 2022</p>
                <p class="worksans">A PHP Symfony web application for generating custom on-demand university logos in thirty different formats.</p>
                <p class="worksans fw-500 d-inline" style="font-size: 14px;">Tech Stack:</p>
                <p class="worksans d-inline" style="font-size: 14px;">HTML, CSS, PHP, JavaScript, Symfony Framework w/ Doctrine ORM.</p>
                <button type="button" class="btn btn-outline-dark fw-500 d-block mt-3 worksans text-white bg-blue">More Info</button>
            </div>
                <hr class="mx-4" style="color: var(--abhirj-blue);">
            <div class="bg-light- p-4 rounded-3 mb-3">
                <p class="worksans fw-semibold fs-5 mb-2">UNL Lockups Factory</p>
                <p class="worksans fw-500 mb-4">University Of Nebraska-Lincoln | 2022</p>
                <p class="worksans">A PHP Symfony web application for generating custom on-demand university logos in thirty different formats.</p>
                <p class="worksans fw-500 d-inline" style="font-size: 14px;">Tech Stack:</p>
                <p class="worksans d-inline" style="font-size: 14px;">HTML, CSS, PHP, JavaScript, Symfony Framework w/ Doctrine ORM.</p>
                <button type="button" class="btn btn-outline-dark fw-500 d-block mt-3 worksans text-white bg-blue" style="">More Info</button>
            </div>
            <button type="button" class="btn btn-danger worksans text-white fw-500 ar-red d-block mx-auto">View All</button>
        </div>

        <div class="container">
            <div class="bg-blue rounded-3 p-4">
            <p class="worksans text-white fw-semibold fs-4">Let's get in touch.</p>
            <button type="button" class="btn btn-outline-light worksans text-white fw-500">Contact Me</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeSlider"
}
</script>

<style>

</style>