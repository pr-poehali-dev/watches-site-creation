import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WatchCard from '@/components/WatchCard';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const GloriaCollection = () => {
  const gloriaWatches = [
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
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад в каталог
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Коллекция Gloria
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Современная элегантность встречается с непревзойденным качеством. 
            Коллекция Gloria воплощает дух инноваций и традиций швейцарского часового искусства.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gloriaWatches.map((watch, index) => (
            <WatchCard key={index} {...watch} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">О коллекции</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Gloria</span> — это современная коллекция швейцарских часов, 
              сочетающая в себе традиционное мастерство и инновационный дизайн. Каждая модель создана для тех, 
              кто ценит качество и стиль.
            </p>
            <p>
              От классических моделей с лаконичным циферблатом до спортивных хронографов и элегантных женских часов — 
              в коллекции Gloria каждый найдет идеальный вариант для себя.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm">Уникальных моделей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Swiss</div>
                <div className="text-sm">Швейцарское качество</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2 года</div>
                <div className="text-sm">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GloriaCollection;