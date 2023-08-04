export function getDeviceHeight(): number {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    }
    return 600; // Default value in case window is not defined (e.g., during server-side rendering)
  }