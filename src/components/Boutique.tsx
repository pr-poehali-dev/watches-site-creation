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

        <div className="max-w-5xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/81c483e1-5a6e-4e3b-9b5e-540a14b7a1e6.jpg"
              alt="Интерьер бутика Premium Timepieces"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
