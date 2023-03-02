<script setup>




</script>

<template>
  <div class="header">
    <NuxtLink to="/" class="logo">
      <img src="../images/logo.png"> WRC Blog
    </NuxtLink>

    <div class="links">
      <NuxtLink to="/articles" class="link">Articles</NuxtLink>
      <NuxtLink to="/contact" class="link">Contanct</NuxtLink>
    </div>

    
  </div>
</template>

<style>
  .header {
    height: 12em;
    width: 100%;
    background: #001253;
    
  } 

  .links {
    display: inline-flex;
    
    padding-right: 1em;
    background: #E14D2A;
    
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;


    position: absolute;
    right: 0;
    top: 11em;
  }

  .link {
    color: #001253;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;

    padding-left: 15px;
    padding-right: 15px;

    border-radius: 20px;
    
  }

  .link:hover {
    background: rgba(0, 0, 0, 0.2);
    transition-duration: 500ms;
  }

  img {
    width: 200px;
    height: auto;
  }

  .logo {
    font-size: 50px;
    display: flex;
    align-items: center;
    padding-bottom: 1em;
    text-decoration: none;
  }


</style>
