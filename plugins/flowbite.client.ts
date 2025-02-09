export default defineNuxtPlugin((app) => {
  const router = useRouter();
  router.afterEach(() => {
    useFlowbite((f: { initFlowbite: () => void; }) => {
      setTimeout(() => {
        f.initFlowbite();
      }, 500);
    });
  });
});
