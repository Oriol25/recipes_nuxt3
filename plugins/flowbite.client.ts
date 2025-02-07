export default defineNuxtPlugin((app) => {
  app.hook("page:loading:end", async () => {
    console.log("Flowbite is ready to use!");
    useFlowbite((f) => {
      setTimeout(() => {
        f.initFlowbite();
      }, 500);
    });
  });
});
