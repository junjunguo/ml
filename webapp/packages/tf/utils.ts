export const isiOS = (): boolean =>
  /iPhone|iPad|iPod/i.test(navigator.userAgent);

export const isAndroid = (): boolean => /Android/i.test(navigator.userAgent);

export const isMobile = (): boolean => isAndroid() || isiOS();
