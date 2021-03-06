import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Content from '@/components/Content';
import Footer from '@/components/Footer/Footer';
import { data } from 'data';
export default function Detail(props) {
  const { article } = props
  return (
    <div className="py-3">
      <Head>
        <title>Hodace</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://chungcueratown.net/wp-content/uploads/2015/11/icon-bds.jpg" />
        <meta name="description" content={article.title}/>
        <meta property="og:image" content={article.img} />
      </Head>
      <div className="max-w-7xl mx-auto">
        <Header article={article}  />
        <Content article={article} />
      </div>
      <div className="border-t-2 border-gray-100">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export async function getStaticPaths() {
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const article = data.find(item => item.id === params.id);

  return { props: { article } }
}