'use client';
import { useEffect } from 'react';

export default function AdminRedirect() {
  useEffect(() => {
    // Redirect to the static index.html file which Decap CMS uses
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
      <p className="text-lg">Loading CMS...</p>
    </div>
  );
}
