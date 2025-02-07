export default defineNuxtPlugin((app) => {
  const router = useRouter();
  router.afterEach(() => {
    useFlowbite((f) => {
      setTimeout(() => {
        f.initFlowbite();
      }, 500);
    });
  });
});
