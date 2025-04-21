"use client"
import Link from 'next/link';
import { Button } from '@heroui/react';

export function LogoLink() {
  return (
    <Button
      variant={'light'}
      className="-ml-1 h-auto rounded-sm p-1 pl-0 text-black hover:text-black"
    >
      <Link href="/">
        {/* <CarsJaLogo className="h-4 shrink-0 lg:h-[17px]" />  */}
        CarsJa
      </Link>
    </Button>
  );
}
