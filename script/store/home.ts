import { defineStore } from "pinia";
import { GetProjects, GetServices } from "../api/home";
export const homeStore = defineStore("home", () => {
  let services = ref();
  let isServiceDataReceived = ref();
  let projects = ref();
  let isProjectDataReceived = ref();
  let getServices = () => {
    GetServices().then((res) => {
      isServiceDataReceived.value = true;
      services.value = res;
    });
  };
  let getProjects = () => {
    GetProjects().then((res) => {
      isProjectDataReceived.value = true;
      projects.value = res;
    });
  };
  return {
    services,
    isServiceDataReceived,
    projects,
    isProjectDataReceived,
    getServices,
    getProjects,
  };
});
