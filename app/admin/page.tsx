'use client';
import { useEffect } from 'react';

export default function AdminRedirect() {
  useEffect(() => {
    // Check if we are on GitHub Pages (it will have /friends-trading-company/ in the URL)
    const isGitHubPages = window.location.hostname.includes('github.io');
    const basePath = isGitHubPages ? '/friends-trading-company' : '';
    
    // Redirect to the correct path
    window.location.href = `${basePath}/admin/index.html`;
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
      <p className="text-lg">Loading CMS...</p>
    </div>
  );
}
