"use client";

import React from 'react';

export default function ClientReference() {
  const [id, setId] = React.useState<string | null>(null);

  React.useEffect(() => {
    setId(`QT-${Date.now().toString().slice(-6)}`);
  }, []);

  if (!id) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <p className="text-sm text-gray-600">
        <strong>Reference:</strong> {id}
      </p>
    </div>
  );
}
