import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            Контакты
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Свяжитесь С Нами
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наши эксперты готовы ответить на любые вопросы и помочь выбрать идеальные часы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-1">Бутик в Москве</h3>
                  <p className="text-muted-foreground text-sm">
                    ул. Тверская, 10<br />
                    Москва, 125009<br />
                    Ежедневно 10:00 — 21:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground text-sm">
                    +7 (495) 123-45-67<br />
                    Звонки принимаются ежедневно
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    info@premium-timepieces.ru<br />
                    Ответим в течение 24 часов
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Записаться на консультацию
              </h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-white"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    className="bg-white min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-black hover:bg-black/90 text-white"
                  size="lg"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
