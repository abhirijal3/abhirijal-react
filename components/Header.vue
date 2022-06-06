<template>
<div>
    <nav class="navbar navbar-expand-lg bg-white fixed-top mt-lg-2">
  <div class="container">
        <a class="navbar-brand" href="#">
            <img src="/img/abhi-logo.png" alt="" width="100" height="40">
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
              <a class="offcanvas-title" id="offcanvasNavbarLabel" href="#">
            <img src="/img/abhi-logo.png" alt="" width="75" height="30">
        </a>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item mx-lg-4">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item mx-lg-4">
            <a class="nav-link" href="#">Resume</a>
          </li>
            <li class="nav-item mx-lg-4">
            <a class="nav-link" href="#">Projects</a>
          </li>
            <li class="nav-item ms-lg-4">
            <a class="nav-link" href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
    name: "Header"
}
</script>