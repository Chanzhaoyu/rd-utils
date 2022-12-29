import { ref, watch, WatchSource } from 'vue';

export function useLazyRender(show: WatchSource<boolean | undefined>) {
  const init = ref(false);

  watch(
    show,
    (value) => {
      if (value) {
        init.value = value;
      }
    },
    { immediate: true }
  );

  return (render: () => JSX.Element) => () => init.value ? render() : null;
}
