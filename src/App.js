import News from "./components/News";
import CurrencyRate from "./components/CurrencyRate";
import YandexLessons from "./components/YandexLessons";
import LessonsImg from "./img/lessons.jpg";
import Search from "./components/Search ";
import AdBanner from "./components/AdBanner";
import bannerImg from "./img/banner.jpg"
import Weather from "./components/Weather";
import TVProgram from "./components/TVProgram";
import programData from './data/programData ';
import LiveBroadcast from "./components/LiveBroadcast";
import PopularServices from "./components/PopularServices";
import servicesData from "./data/servicesData";
import Travel from "./components/Travel";


function App() {

  const filters = ['видео ', 'картинки ', 'новости '];

  return (
    <div>
      <div>
        <News />
        <CurrencyRate />
      </div>
      <div>
        <YandexLessons
          avatar={LessonsImg}
          title="Онлайн обучение"
          description="Начни учиться уже сегодня"
        />
        <div>
          <Search filters={filters} />
        </div>
        <div>
          <AdBanner
            imageUrl={bannerImg}
            linkUrl="#0"
          />
        </div>
        <Weather />
      </div>
      <div>
        <TVProgram programData={programData} />
      </div>
      <div>
        <LiveBroadcast />
      </div>
      <div>
        <PopularServices servicesData={servicesData} />
      </div>
      <div><Travel /></div>
    </div>

  );
}

export default App;
