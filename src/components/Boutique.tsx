const Boutique = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Наш бутик
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Посетите Нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивная атмосфера роскоши и индивидуального обслуживания
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/81c483e1-5a6e-4e3b-9b5e-540a14b7a1e6.jpg"
                alt="Интерьер бутика Premium Timepieces"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/34bcf4b6-198a-4d86-b9f1-bc6da50cdee2.jpg"
                alt="Зона ресепшн бутика"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/e341dca9-d3c1-47ea-b7b6-b95aa4ca1b26.jpg"
                alt="Витрины с часами"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <img
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/274c5cd5-7765-4080-9abc-e3391a21abbb.jpg"
                alt="VIP зона для консультаций"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Моделей в наличии</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold text-accent mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boutique;