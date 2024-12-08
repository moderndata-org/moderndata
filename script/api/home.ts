let baseURL = "https://api.moderndata.ir";
let GetProjects = () => {
  let res = $fetch(baseURL + "/company/projects", {
    headers: {
      Authorization: "Token d0c16be89a4de1c873da3680c524a5184397d626",
    },
  });
  return res;
};
let GetServices = () => {
  let res = $fetch(baseURL + "/company/services", {
    headers: {
      Authorization: "Token d0c16be89a4de1c873da3680c524a5184397d626",
    },
  });
  return res;
};
export { GetProjects, GetServices };
