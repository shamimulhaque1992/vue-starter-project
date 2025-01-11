<script setup>
import SingleJobCard from "./SingleJobCard.vue";
// import jobs from "@/jobs.json";
import { ref, defineProps, onMounted, reactive } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
  showButton: {
    default: true,
    type: Boolean,
  },
});

// const jobs = ref([]);
const state = reactive({
  jobs: [],
  loading: false,
});
onMounted(async () => {
  try {
    state.loading = true;
    const response = await axios.get("/api/jobs");

    state.jobs = response.data;
  } catch (error) {
  } finally {
    state.loading = false;
  }
});
</script>
<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show Loading spinner while loading is true -->

      <div v-if="state.loading" class="text-center text-gray-500 py-6">
        <PulseLoader></PulseLoader>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SingleJobCard
          v-for="job in state.jobs.slice(0, limit || state.jobs?.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
