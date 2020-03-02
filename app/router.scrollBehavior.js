export default function(to, from, savedPosition) {
  return {
    selector: to.hash,
    offset: {
      y: 32,
    },
  };
}
