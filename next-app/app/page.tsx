import axios from "axios";
import Image from "next/image";
type QiitaResponse = {
  id: string;
  title: string;
  url: string;
  image: string;
};

export default async function Home() {
  const getQiitaItems = async () => {
    const responce = await axios.get<QiitaResponse[]>("https://qiita.com/api/v2/authenticated_user/items", 
      {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_API_KEY}`
      },
    }
  );
  return responce.data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.url,
    image: "https://pbs.twimg.com/media/HO20vHPaQAAvf4i?format=jpg&name=medium",
  })); 
};
const qiitaItems = await getQiitaItems();
  return(
    <div>
      <h1>Welcome to Next.js!</h1>
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
