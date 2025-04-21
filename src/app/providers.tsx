"use client";

import * as React from "react";
import {ToastProvider} from "@heroui/toast";
import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";


export interface ProvidersProps {
  children: React.ReactNode;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
     <ToastProvider />
      {/* <ClerkProvider> */}
          {children}
      {/* </ClerkProvider> */}
    </HeroUIProvider>
  );
}
