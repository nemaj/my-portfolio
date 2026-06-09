"use client";

import { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
