import { MicrocmsResponse, QiitaResponse } from "@/domain/Article";
import axios from "axios";
import Image from "next/image";
import { Suspense } from "react";

async function QiitaArticles() {
  const response = await axios.get<QiitaResponse[]>(
    "https://qiita.com/api/v2/authenticated_user/items",
    {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_KEY}`
      }
    }
  );
  const items = response.data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    image: "https://pbs.twimg.com/media/HO20vHPaQAAvf4i?format=jpg&name=medium",
  }));
  return (
    <ul>
      {items.map((item) => (
          <li key={item.id}>
            <Image src={item.image} width={100} height={100} alt="" />
            <a href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
        
        </ul> 
  )
}

async function MicroCMSArticles() {
  const response = await axios.get<MicrocmsResponse>(
    "https://projectexe.microcms.io/api/v1/blogs", {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
      }
    }
  );
  const items = response.data.contents.map((item) => ({
    id: item.id,
    title: item.title,
    url: `/blogs/${item.id}`,
    image: item.eyecatch.url
  }));
  return (
    <ul>
      {items.map((item) => (
          <li key={item.id}>
            <Image src={item.image} width={100} height={100} alt="" />
            <a href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
        
        </ul> 
  )
}

export default function Home() {

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h2>
        Qiita 記事
      </h2>
      <Suspense fallback={<div>Loading ...</div>}>
        <QiitaArticles />
        </Suspense>
      <h2>
        MicroCMS 記事
      </h2>
      <Suspense fallback={<div>Loading ...</div>}>
      <MicroCMSArticles />
      </Suspense>
    </div>
  );
}
