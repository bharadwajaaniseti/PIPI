"use client";

import React from 'react';

export default function ClientDate({ date }: { date: string }) {
  const [formatted, setFormatted] = React.useState<string | null>(null);

  React.useEffect(() => {
    try {
      const d = new Date(date);
      const s = d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      setFormatted(s);
    } catch (e) {
      setFormatted(date);
    }
  }, [date]);

  if (!formatted) return <time dateTime={date}>{date}</time>;
  return <time dateTime={date}>{formatted}</time>;
}
