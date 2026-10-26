"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.timeZoneId,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

// Live local time for the site owner's city, e.g. "22:59:50 IST".
// Renders a placeholder on the server so the HTML never disagrees with the client.
export default function LocalClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let timer = 0;
    const tick = () => {
      setTime(formatter.format(new Date()));
      // Align to the next full second so the display never skips or lags.
      timer = window.setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    timer = window.setTimeout(tick, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <span className={className} aria-label={`Local time in ${site.city}`}>
      <span style={{ fontVariantNumeric: "tabular-nums" }}>{time ?? "--:--:--"}</span>{" "}
      {site.timeZoneAbbr}
    </span>
  );
}
