import React from "react";
import { useIsMobileOnce, useWindowSize } from "../../lib/hooks"

interface DefferedProps {
  isMobile: boolean
}

interface Props {
  children: (props: DefferedProps) => React.ReactNode
}

export default function DeviceHoc({ children }: Props) {
  const mobileBreakpoint = 768;
  const isMobile = useIsMobileOnce(); 
  const { width } = useWindowSize()

  const value = isMobile || width < mobileBreakpoint;

  return <>{children({ isMobile: value  })}</>
}