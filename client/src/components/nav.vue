<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Tyler Wendover</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <router-link to="/about" class="nav-link"> About </router-link>
                    <router-link to="/projects" class="nav-link"> Projects </router-link>
                    <router-link to="/contact" class="nav-link"> Contact </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>