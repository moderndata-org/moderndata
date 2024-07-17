import { defineStore } from "pinia";
import { getProjects, getServices } from "../api/home";
export const homeStore = defineStore("home", () => {
  let services = ref();
  let isServiceDataReceived = ref();
  let projects = ref();
  let isProjectDataReceived = ref();
  let get_services = () => {
    getServices().then((res) => {
      isServiceDataReceived.value = true;
      services.value = res;
    });
  };
  let get_projects = () => {
    getProjects().then((res) => {
      isProjectDataReceived.value = true;
      projects.value = res;
      for (let i = 0; i < projects.value.length; i++) {
        projects.value[i].features = projects.value[i].features.split(",");
      }
    });
  };
  return {
    services,
    isServiceDataReceived,
    projects,
    isProjectDataReceived,
    get_services,
    get_projects,
  };
});
