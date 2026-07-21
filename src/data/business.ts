import type { BusinessHour } from "@/types";

export const business = {
  address: "Sleman, Daerah Istimewa Yogyakarta",
  mapsUrl: "https://maps.app.goo.gl/R5dmFYXHRxX3Hwzq5",
  hours: [
    { days: "Setiap hari", hours: "Buka 24 jam" },
  ] satisfies BusinessHour[],
};
