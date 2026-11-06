/**
 * ══════════════════════════════════════════════════════════════════
 * PAGE: Redirect → /partnerships/coral-guardian
 * URL:  /projects/coral-guardian
 * ══════════════════════════════════════════════════════════════════
 */
'use client';

import { useEffect } from 'react';

export default function CoralGuardianProjectRedirect() {
  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    window.location.replace(`${basePath}/partnerships/coral-guardian`);
  }, []);
  return null;
}
