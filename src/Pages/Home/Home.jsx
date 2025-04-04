import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card.jsx";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews, getTopNew } from "../../services/newsService.js";
import { HomeBody, Homehead } from "./HomeStyled.jsx";
import Cookies from "js-cookie";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNew, setTopNew] = useState({});

  async function findAllNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.results);

    const topNewResponse = await getTopNew();
    setTopNew(topNewResponse.data.news);
  }
  useEffect(() => {
    findAllNews();
    console.log(Cookies.get("token"));
  }, []);

  return (
    <>      
      <Homehead>
  {topNew && topNew.title ? (
    <Card
      top="true"
      title={topNew.title}
      text={topNew.text}
      banner={topNew.banner}
      likes={topNew.likes}
      comments={topNew.comments}
    />
  ) : (
    <p></p> // Exibe um fallback enquanto `topNew` não está disponível
  )}
</Homehead>
<HomeBody>
  {Array.isArray(news) && news.length > 0 ? (
    news.map((item) => (
      <Card
        key={item.id}
        title={item.title || "No Title"} // Valor padrão caso o título não exista
        text={item.text || "No Description"} // Valor padrão
        banner={item.banner || "default-banner.png"} // Banner padrão
        likes={item.likes || 0} // Garantir valor numérico
        comments={item.comments || []} // Comentários padrão como array vazio
      />
    ))
  ) : (
    <p>No news available to display</p> // Fallback caso não haja notícias
  )}
</HomeBody>
    </>
  );
}
