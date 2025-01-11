import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundVue from "@/views/NotFoundVue.vue";
import SingleJobVue from "@/views/SingleJobVue.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/job/:id",
      name: "job",
      component: SingleJobVue,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundVue,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
    {
      path: "/job/edit/:id",
      name: "edit-job",
      component: EditJobView,
    },
  ],
});
export default router;
