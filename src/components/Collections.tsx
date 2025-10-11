import { Card, CardContent } from '@/components/ui/card';

const Collections = () => {
  const collections = [
    {
      title: 'Классическая',
      description: 'Элегантные часы для торжественных случаев',
      features: ['Автоматический механизм', 'Сапфировое стекло', 'Водонепроницаемость 50м']
    },
    {
      title: 'Спортивная',
      description: 'Надежные хронометры для активной жизни',
      features: ['Хронограф', 'Керамический безель', 'Водонепроницаемость 300м']
    },
    {
      title: 'Haute Horlogerie',
      description: 'Высокое часовое искусство',
      features: ['Турбийон', 'Ручная сборка', 'Лимитированная серия']
    }
  ];

  return (
    <section id="collections" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Наши коллекции
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Три Философии
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Каждая коллекция отражает уникальный подход к созданию идеальных часов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl font-serif text-accent">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {collection.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {collection.description}
                </p>
                
                <ul className="space-y-2">
                  {collection.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
