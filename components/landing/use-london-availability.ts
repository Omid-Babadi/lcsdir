"use client";

import { useEffect, useState } from "react";
import { isLondonBusinessHours } from "@/lib/london-availability";

export function useLondonAvailability() {
  const [isAvailable, setIsAvailable] = useState(() => isLondonBusinessHours());

  useEffect(() => {
    let isMounted = true;

    const checkAvailability = () => {
      fetch("/api/availability", { cache: "no-store" })
        .then((response) => {
          if (!response.ok) throw new Error("Availability request failed");

          return response.json();
        })
        .then((data) => {
          if (isMounted) {
            setIsAvailable(Boolean(data.isAvailable));
          }
        })
        .catch(() => {
          if (isMounted) {
            setIsAvailable(isLondonBusinessHours());
          }
        });
    };

    checkAvailability();
    const interval = setInterval(checkAvailability, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return isAvailable;
}
