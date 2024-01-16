import dynamic from "next/dynamic";

const Device = dynamic(() => import('./deviceHoc'), { ssr: false })

export { Device }
