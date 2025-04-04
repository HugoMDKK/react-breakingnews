import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNew } from "../../services/newsService";
import { ContainerResults, SearchNews } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNew(title);
      setNews(newsApi.data.results);
      console.log(newsApi);
    } catch (err) {
      console.log(err);
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <div>
      <ContainerResults>
        <SearchNews>
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
        </SearchNews>
      </ContainerResults>
    </div>
  );
}
