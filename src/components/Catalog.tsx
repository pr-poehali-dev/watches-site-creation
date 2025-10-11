import WatchCard from './WatchCard';

const Catalog = () => {
  const watches = [
    {
      name: 'Elegance Royale',
      collection: 'Классическая коллекция',
      price: '₽850 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/3d107873-2f7d-4605-b3a2-5465f8c912bf.jpg'
    },
    {
      name: 'Heritage Chronograph',
      collection: 'Спортивная коллекция',
      price: '₽1 250 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/f8fea0be-477f-4fe5-a305-9746a2a28f1a.jpg'
    },
    {
      name: 'Moon Phase',
      collection: 'Усложненные часы',
      price: '₽2 100 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/3d107873-2f7d-4605-b3a2-5465f8c912bf.jpg'
    },
    {
      name: 'Slim Automatic',
      collection: 'Классическая коллекция',
      price: '₽690 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/3d107873-2f7d-4605-b3a2-5465f8c912bf.jpg'
    },
    {
      name: 'Diver Professional',
      collection: 'Спортивная коллекция',
      price: '₽980 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/f8fea0be-477f-4fe5-a305-9746a2a28f1a.jpg'
    },
    {
      name: 'Tourbillon Grande',
      collection: 'Haute Horlogerie',
      price: '₽4 500 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/8b1fc901-e003-4f89-b892-dc720310b483.jpg'
    }
  ];

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Наш каталог
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Эксклюзивные Модели
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя уникальные часы, созданные швейцарскими мастерами 
            с использованием традиционных техник и инновационных решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch, index) => (
            <div 
              key={index} 
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WatchCard {...watch} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;