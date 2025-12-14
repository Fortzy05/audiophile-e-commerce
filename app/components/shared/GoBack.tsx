'use client';

import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className="text-black/50 hover:text-theme-orange mb-6 md:mb-14 text-[15px] font-medium transition-colors"
    >
      Go Back
    </button>
  );
}
