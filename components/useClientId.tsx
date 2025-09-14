"use client";

import { useEffect, useState } from 'react';

export default function useClientId(prefix = '') {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const generated = prefix + Date.now().toString().slice(-6);
    setId(generated);
  }, [prefix]);

  return id;
}
