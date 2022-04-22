<template>
  <div id="app">
    <div id="header">
    <!-- Navigation-->
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#header"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-ite m">
            <li class="nav-item">
                <li class="nav-item"><a class="nav-link" href="/">Home</a>
                <li class="nav-item"><a class="nav-link" href="/services">Services</a>
                <li class="nav-item"><a class="nav-link" href="/gallery">Gallery</a></li>
                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>

    <router-view />
      <br>
      <br>
    <footer class="footer py-4">
      <div class="container">
          <div class="row align-items-center">
              <div class="col-lg-4 text-lg-start">Copyright &copy; MaxMeik</div>
              <div class="col-lg-4 my-3 my-lg-0">
                  <a class="btn btn-dark btn-social mx-2" href="https://instagram.com/corisposhhairboutique/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="https://facebook.com/corisposhhairboutique" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                  <!-- <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a> -->
              </div>
              <div class="col-lg-4 text-lg-end">
                  <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                  <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
              </div>
          </div>
      </div>
    </footer> 
  </div>
</template>

<style>
</style>
