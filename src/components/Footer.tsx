import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              PREMIUM TIMEPIECES
            </h3>
            <p className="text-white/70 text-sm mb-4 max-w-md">
              С 1875 года мы создаём шедевры часового искусства, 
              которые передаются из поколения в поколение.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#catalog" className="hover:text-accent transition-colors">Каталог</a></li>
              <li><a href="#collections" className="hover:text-accent transition-colors">Коллекции</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">О бренде</a></li>
              <li><a href="#service" className="hover:text-accent transition-colors">Сервис</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Гарантия</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© 2024 Premium Timepieces. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
