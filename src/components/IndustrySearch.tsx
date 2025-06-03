import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const IndustrySearch = () => {
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const searchIndustryStats = async () => {
    if (!industry.trim() || !country.trim()) return;

    setIsLoading(true);

    // Статистика по индустриям и странам
    const mockStats: Record<string, Record<string, string>> = {
      IT: {
        россия:
          "Рынок IT-услуг в России показал рост на 15% в 2024 году. Средняя зарплата разработчика составляет 180,000 рублей. Количество IT-компаний увеличилось на 22%. Спрос на специалистов по ИИ вырос в 3 раза.",
        сша: "IT-сектор США оценивается в $1.8 трлн. Средняя зарплата разработчика $120,000. Венчурные инвестиции в IT составили $200 млрд. 65% мирового софта создается в США.",
        германия:
          "IT-рынок Германии вырос на 8% до €170 млрд. Средняя зарплата разработчика €65,000. Дефицит IT-специалистов составляет 137,000 человек. Инвестиции в стартапы выросли на 25%.",
        китай:
          "IT-индустрия Китая показала рост 12% до $450 млрд. Количество разработчиков достигло 5 млн человек. Инвестиции в ИИ составили $70 млрд. Доля в мировом производстве чипов - 15%.",
      },
      недвижимость: {
        россия:
          "Средняя стоимость квадратного метра в Москве составляет 320,000 рублей. Объем сделок снизился на 8% за год. Ипотечные ставки 16-20%. Новостройки составляют 65% продаж.",
        сша: "Средняя цена дома в США $428,000. Ипотечные ставки 6.8-7.5%. Количество сделок снизилось на 18%. Аренда выросла на 12% в крупных городах.",
        германия:
          "Средняя цена квадратного метра в Берлине €8,500. Аренда составляет 35% доходов семей. Ипотечные ставки 3.5-4.2%. Дефицит жилья - 700,000 единиц.",
        китай:
          "Цены на недвижимость в Пекине $12,000 за м². Объем строительства снизился на 25%. Доля пустующего жилья 15%. Госрегулирование ужесточилось.",
      },
      автомобили: {
        россия:
          "Продажи автомобилей выросли на 12% в 2024 году. Доля электромобилей 3.2%. Средняя цена нового авто 2,8 млн рублей. Китайские бренды занимают 35% рынка.",
        сша: "Продажи новых авто 15.5 млн штук. Доля электромобилей 8.5%. Средняя цена $48,000. Tesla лидирует в сегменте премиум электромобилей.",
        германия:
          "Продажи авто снизились на 7% до 2.6 млн штук. Доля электромобилей 31%. BMW, Mercedes и Audi контролируют 45% рынка премиум-сегмента.",
        китай:
          "Крупнейший автомобильный рынок мира - 26 млн авто в год. Доля электромобилей 35%. BYD и Tesla лидируют в EV-сегменте. Экспорт авто вырос в 2 раза.",
      },
    };

    // Поиск статистики по индустрии и стране
    let foundStats = "";
    const industryKey = industry.toLowerCase();
    const countryKey = country.toLowerCase();

    for (const [indKey, countries] of Object.entries(mockStats)) {
      if (
        industryKey.includes(indKey.toLowerCase()) ||
        indKey.toLowerCase().includes(industryKey)
      ) {
        for (const [counKey, stats] of Object.entries(countries)) {
          if (countryKey.includes(counKey) || counKey.includes(countryKey)) {
            foundStats = stats;
            break;
          }
        }
        if (foundStats) break;
      }
    }

    // Если точного совпадения нет, генерируем общую статистику
    if (!foundStats) {
      foundStats = `Анализ индустрии "${industry}" в стране "${country}": Рынок показывает умеренный рост 5-8% в год. Средняя рентабельность составляет 12-15%. Количество компаний в сфере увеличилось на 10%. Основные тренды: цифровизация, автоматизация, экологичность.`;
    }

    // Имитация задержки сетевого запроса
    setTimeout(() => {
      setResults(foundStats);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Search" size={24} />
            Поиск статистики по индустрии
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Введите название индустрии (например: IT, недвижимость, автомобили)"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="flex-1"
            />
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Введите название страны (например: Россия, США, Германия, Китай)"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchIndustryStats()}
              className="flex-1"
            />
            <Button
              onClick={searchIndustryStats}
              disabled={isLoading || !industry.trim() || !country.trim()}
              className="px-8"
            >
              {isLoading ? (
                <Icon name="Loader2" size={16} className="animate-spin" />
              ) : (
                "Искать"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" size={20} />
              {industry} в {country}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">{results}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IndustrySearch;
