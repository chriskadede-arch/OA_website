/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Redirect → /partnerships/blue-ventures
 * URL:  /projects/blue-venture
 * ══════════════════════════════════════════════════════════════════
 */
'use client';

import { useEffect } from 'react';

export default function BlueVentureProjectRedirect() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.replace(`${basePath}/partnerships/blue-ventures`);
  }, []);
  return null;
}
