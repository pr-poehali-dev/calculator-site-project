import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const IndustrySearch = () => {
  const [industry, setIndustry] = useState("");
  const [results, setResults] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const searchIndustryStats = async () => {
    if (!industry.trim()) return;

    setIsLoading(true);

    // Имитация поиска статистики с реалистичными данными
    const mockStats = {
      IT: "Рынок IT-услуг в России показал рост на 15% в 2024 году. Средняя зарплата разработчика составляет 180,000 рублей. Количество IT-компаний увеличилось на 22%. Спрос на специалистов по ИИ вырос в 3 раза.",

      недвижимость:
        "Средняя стоимость квадратного метра в Москве составляет 320,000 рублей. Объем сделок с недвижимостью снизился на 8% за год. Ипотечные ставки варьируются от 16% до 20%. Новостройки составляют 65% от общего объема продаж.",

      автомобили:
        "Продажи автомобилей в России выросли на 12% в 2024 году. Доля электромобилей составляет 3.2% от общих продаж. Средняя цена нового автомобиля - 2,8 млн рублей. Китайские бренды занимают 35% рынка.",

      банки:
        "Средняя ставка по депозитам составляет 18-20%. Объем выданных кредитов вырос на 10%. Количество банковских карт достигло 320 млн штук. Доля безналичных платежей составляет 78%.",

      ритейл:
        "Оборот розничной торговли вырос на 6.5% за год. Доля онлайн-продаж составляет 12% от общего оборота. Средний чек увеличился на 15%. Продуктовые товары показали рост на 8%.",
    };

    // Поиск подходящей статистики
    let foundStats = "";
    const searchTerm = industry.toLowerCase();

    for (const [key, stats] of Object.entries(mockStats)) {
      if (
        searchTerm.includes(key.toLowerCase()) ||
        key.toLowerCase().includes(searchTerm)
      ) {
        foundStats = stats;
        break;
      }
    }

    // Если точного совпадения нет, генерируем общую статистику
    if (!foundStats) {
      foundStats = `Анализ индустрии "${industry}": Рынок показывает умеренный рост 5-8% в год. Средняя рентабельность составляет 12-15%. Количество компаний в сфере увеличилось на 10%. Основные тренды: цифровизация, автоматизация процессов, экологичность. Инвестиции в развитие выросли на 18%.`;
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
              onKeyPress={(e) => e.key === "Enter" && searchIndustryStats()}
              className="flex-1"
            />
            <Button
              onClick={searchIndustryStats}
              disabled={isLoading || !industry.trim()}
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
              Результаты поиска: {industry}
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
