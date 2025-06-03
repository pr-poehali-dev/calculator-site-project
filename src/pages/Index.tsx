import IndustrySearch from "@/components/IndustrySearch";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Поиск статистики по индустриям
          </h1>
          <p className="text-lg text-slate-600">
            Найдите актуальную статистику по любой отрасли
          </p>
        </div>
        <IndustrySearch />
      </div>
    </div>
  );
};

export default Index;
