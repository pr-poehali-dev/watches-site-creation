import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const timeline = [
    {
      year: '1875',
      title: 'Основание мануфактуры',
      description: 'Жан-Луи Дюбуа открывает первую мастерскую в Женеве'
    },
    {
      year: '1920',
      title: 'Первый хронограф',
      description: 'Революционный механизм получает золотую медаль на выставке в Париже'
    },
    {
      year: '1955',
      title: 'Королевский статус',
      description: 'Бренд становится официальным поставщиком королевских домов Европы'
    },
    {
      year: '1987',
      title: 'Инновация турбийона',
      description: 'Запатентован уникальный механизм двойного турбийона'
    },
    {
      year: '2010',
      title: 'Новая эра',
      description: 'Открытие современной мануфактуры с сохранением традиций ручной сборки'
    },
    {
      year: '2024',
      title: 'Мировое признание',
      description: 'Более 150 лет безупречной репутации и инновационного часового искусства'
    }
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            О бренде
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            История Мастерства
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Полтора века непрерывных инноваций и верности традициям швейцарского часового искусства
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 md:pl-24 relative">
                    <div className="absolute left-0 md:left-4 top-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center font-serif font-bold text-black text-sm">
                      {event.year}
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold mb-2 mt-20 md:mt-0">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/70">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">150+</div>
            <div className="text-sm text-white/70">Лет истории</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-white/70">Мастеров</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">200+</div>
            <div className="text-sm text-white/70">Моделей</div>
          </div>
          <div>
            <div className="text-4xl font-serif font-bold text-accent mb-2">35</div>
            <div className="text-sm text-white/70">Стран присутствия</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
