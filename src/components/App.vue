<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListing from "@/components/JobListing.vue";
</script>

<template>
  <Navbar />

  <Hero
    title="Find Your Dream Job Here!"
    subtitle="Find Job That Fits Your Skills and Needs!"
  />
  <HomeCards />
  <JobListing />
</template>
