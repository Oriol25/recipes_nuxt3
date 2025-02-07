export function useFlowbite(callback) {
  if (import.meta.client) {
    import("flowbite").then((flowbite) => {
      console.log("Flow Bite loaded");
      callback(flowbite);
    });
  }
}
