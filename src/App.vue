<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListing from "@/components/JobListing.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <RouterView />
  <!--
    <Hero
    title="Find Your Dream Job Here!"
    subtitle="Find Job That Fits Your Skills and Needs!"
  />
  <HomeCards />
  <JobListing limit="3" :showButton="true" /> -->
</template>
