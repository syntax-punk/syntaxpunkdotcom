import Head from "next/head";
import Layout from "../../../components/layout";
import { Device } from "../../../components/device";
import { GolOptions } from "../../../lib/definitions";
import dynamic from "next/dynamic";

const Index = () => {
  const getGolOptions = (isMobile: boolean): GolOptions => {
    const options = {
      speed: 250,
      rows: isMobile ? 20 : 30,
      cols: isMobile ? 20 : 40,
    } as GolOptions;
    
    return options;
  }

  return (
    <Layout>
      <Head>
        <title>more / game-of-life</title>
      </Head>
      <Device>
        {({ isMobile }) => {
          const options = getGolOptions(isMobile);
          const View = dynamic(() => import('../../../components/more/gameoflife'), { ssr: false })

          return <View options={options} />
        }}
      </Device>
    </Layout>
  )
}

export default Index;