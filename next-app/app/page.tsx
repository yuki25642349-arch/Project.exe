import axios from "axios";

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
  return responce.data;
};
const qiitaItems = await getQiitaItems();
  return(
    <div>
      <h1>Welcome to Next.js!</h1>
      <ul>
        {qiitaItems.map((item) => (
          <li key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
