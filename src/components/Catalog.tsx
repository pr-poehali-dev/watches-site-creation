import WatchCard from './WatchCard';

const Catalog = () => {
  const watches = [
    {
      name: 'Gloria Classic Blue',
      collection: 'Коллекция Gloria',
      price: '₽120 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/bf210cce-057b-4f6d-8d5f-5c2c41f39870.jpg'
    },
    {
      name: 'Gloria Sport Chrono',
      collection: 'Коллекция Gloria',
      price: '₽185 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/72dd9704-83dc-462b-b59f-618fd322c24d.jpg'
    },
    {
      name: 'Gloria Lady Rose',
      collection: 'Коллекция Gloria',
      price: '₽145 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/77b82559-a8d4-4bce-a69f-69054fc9bea9.jpg'
    },
    {
      name: 'Gloria Automatic Skeleton',
      collection: 'Коллекция Gloria',
      price: '₽210 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/8cdbda2d-1ed6-4d8c-8dca-b5fc9d5f8b81.jpg'
    },
    {
      name: 'Gloria Diver Pro',
      collection: 'Коллекция Gloria',
      price: '₽165 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/22240cfc-5f1a-470a-b3f1-ad608f8ed664.jpg'
    },
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
    },
    {
      name: 'Rose Gold Slim',
      collection: 'Классическая коллекция',
      price: '₽920 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/9df2ffc6-d28c-4276-8fc1-59ea974212fc.jpg'
    },
    {
      name: 'Aviator Classic',
      collection: 'Пилотские часы',
      price: '₽780 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/5d9c310a-72a6-42ed-bf6e-3cc28b221ad8.jpg'
    },
    {
      name: 'Titanium Skeleton',
      collection: 'Современные часы',
      price: '₽1 480 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/ecd9c5fb-98b4-4173-9c45-80d1b1955256.jpg'
    },
    {
      name: 'Diamond Pearl',
      collection: 'Женская коллекция',
      price: '₽1 850 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/faa58cac-9b94-4123-9979-a3351e4572fb.jpg'
    },
    {
      name: 'Ocean Blue Diver',
      collection: 'Спортивная коллекция',
      price: '₽1 120 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/4d49c922-651b-4d8b-802f-9a99e58ca528.jpg'
    },
    {
      name: 'GMT Explorer',
      collection: 'Часы путешественника',
      price: '₽1 350 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/b4a4a92b-b19b-4e7a-8517-8c0d2192c1b6.jpg'
    },
    {
      name: 'Perpetual Calendar',
      collection: 'Усложненные часы',
      price: '₽3 200 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/a54c1cad-79f4-4543-ae31-d1215c8852cc.jpg'
    },
    {
      name: 'Racing Chrono',
      collection: 'Спортивная коллекция',
      price: '₽1 180 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/aafb6ec5-5708-495f-bbfe-51784bdf923f.jpg'
    },
    {
      name: 'Art Deco Tonneau',
      collection: 'Винтажная коллекция',
      price: '₽1 650 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/8709ba61-7b0c-4de9-b493-2fbd1cd97f32.jpg'
    },
    {
      name: 'Platinum Guilloché',
      collection: 'Haute Horlogerie',
      price: '₽5 200 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/e7dc0994-3e46-44b4-9a3d-eea288c20ac9.jpg'
    },
    {
      name: 'Bronze Patina Diver',
      collection: 'Винтажная коллекция',
      price: '₽890 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/b220021e-5aeb-4b16-a556-b4ff538db24e.jpg'
    },
    {
      name: 'Bauhaus Minimal',
      collection: 'Классическая коллекция',
      price: '₽620 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/d2968ae9-0a35-4791-b21b-27a47abdd073.jpg'
    },
    {
      name: 'Power Reserve Blue',
      collection: 'Современные часы',
      price: '₽1 290 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/352f260a-e8e6-45b3-8558-04ca446b615b.jpg'
    },
    {
      name: 'Regulator Classic',
      collection: 'Классическая коллекция',
      price: '₽1 580 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/3810cc01-0edd-41b8-9014-f9514f80b0cf.jpg'
    },
    {
      name: 'Carbon Racer',
      collection: 'Спортивная коллекция',
      price: '₽2 200 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/efa868be-e961-4915-8858-10316168ba29.jpg'
    },
    {
      name: 'Calatrava Elegance',
      collection: 'Классическая коллекция',
      price: '₽950 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/7495dd46-8dfa-40fc-a6ee-420dead9b215.jpg'
    },
    {
      name: 'World Timer',
      collection: 'Часы путешественника',
      price: '₽2 850 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/d6ce4164-e603-4385-8e4f-6969dc57fd83.jpg'
    },
    {
      name: 'Meteorite Dial',
      collection: 'Haute Horlogerie',
      price: '₽6 200 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/49946ee7-2b9e-4c15-8481-fd35e38856b5.jpg'
    },
    {
      name: 'Jumping Hour',
      collection: 'Усложненные часы',
      price: '₽2 450 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/91c3af92-1c5d-4450-bae6-90fa3f91bcef.jpg'
    },
    {
      name: 'Minute Repeater',
      collection: 'Haute Horlogerie',
      price: '₽8 500 000',
      image: 'https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/818f4ada-b19f-4a3e-a895-98c7e4182f00.jpg'
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