import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Service = () => {
  const services = [
    {
      icon: 'Shield',
      title: 'Пожизненная гарантия',
      description: 'Все наши часы защищены пожизненной гарантией на механизм'
    },
    {
      icon: 'Wrench',
      title: 'Сервисное обслуживание',
      description: 'Регулярное обслуживание сертифицированными мастерами'
    },
    {
      icon: 'Award',
      title: 'Сертификат подлинности',
      description: 'Каждые часы сопровождаются сертификатом с уникальным номером'
    },
    {
      icon: 'Package',
      title: 'Индивидуальная упаковка',
      description: 'Премиальная упаковка из натуральной кожи с гравировкой'
    },
    {
      icon: 'RefreshCw',
      title: 'Trade-in программа',
      description: 'Обменяйте старые часы на новую модель с выгодой'
    },
    {
      icon: 'Sparkles',
      title: 'Персонализация',
      description: 'Гравировка и индивидуальные элементы на заказ'
    }
  ];

  return (
    <section id="service" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Наш сервис
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Забота О Каждой Детали
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы обеспечиваем полный цикл поддержки — от момента покупки до пожизненного обслуживания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
