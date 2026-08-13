"use client";

import { QiitaResponse } from "@/domain/Article";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const qiita = () => {
  const [qiitaItems, setQiitaItems] = useState<QiitaResponse[]>([]);

  const fetchQiitaItems = async () => {
    const response = await axios.get<QiitaResponse[]>(
      "https://qiita.com/api/v2/authenticated_user/items",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_API_KEY}`,
        },
      }
    );

    return response.data
  }
  useEffect(() => {
    fetchQiitaItems().then((items) =>
      setQiitaItems(
        items.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        image: "https://pbs.twimg.com/media/HO20vHPaQAAvf4i?format=jpg&name=medium",
      }))));
  }, [])
  return (
    <div>
      <h1>Qiita Page</h1>
      <ul>
        {qiitaItems.map((item) => (
          <li key={item.id}>
            <Image src={item.image} width={100} height={100} alt="" />
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default qiita;