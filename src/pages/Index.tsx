import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { QRCodeSVG } from 'qrcode.react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/30c70b6a-e39d-4d10-b7c7-84040258b05b.jpg')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative">
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm animate-fade-in border border-accent/30">
              <Icon name="Snowflake" size={18} />
              <span>Новогодний турнир 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight animate-scale-in">
              Clash Royale
              <span className="block text-primary mt-2">Winter Championship</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in">
              Главный турнир зимы в Ростове-на-Дону с награждением и новогодней вечеринкой!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold"
                onClick={() => window.open('https://t.me/ClashRoyael2025', '_blank')}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 font-bold"
                onClick={() => window.open('https://t.me/ClashRoyael2025', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Telegram канал
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Calendar" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Дата</h3>
                  <p className="text-muted-foreground">25-31 декабря 2025</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Icon name="MapPin" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Формат</h3>
                  <p className="text-muted-foreground">Онлайн турнир</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Icon name="Ticket" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Игрок</h3>
                  <p className="text-muted-foreground">5 000 ₽</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Eye" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Зритель</h3>
                  <p className="text-muted-foreground">1 000 ₽</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">О турнире</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Онлайн турнир по Clash Royale с 25 по 31 декабря 2025. Играйте из любой точки мира! 
                Игры проходят каждый день с 18:00 до 21:00. В финале — награждение и новогодняя вечеринка в Discord/Telegram.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Классический 1v1</h4>
                    <p className="text-muted-foreground">Система плей-офф, 5 раундов + финал</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Онлайн платформа</h4>
                    <p className="text-muted-foreground">Играйте через Clash Royale + Discord/Telegram</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Регистрация до 19 декабря</h4>
                    <p className="text-muted-foreground">Успей зарегистрироваться на турнир</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/045e266d-b228-47d3-9f3c-a0046370bdfe.jpg" 
                alt="Турнир Clash Royale"
                className="rounded-2xl shadow-2xl border border-primary/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl animate-scale-in border-2 border-accent">
                <div className="text-4xl font-extrabold">128</div>
                <div className="text-sm font-semibold">участников</div>
              </div>
            </div>
          </div>



          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">QR-код для регистрации</h2>
            <Card className="max-w-md mx-auto p-8 bg-card/80 backdrop-blur-sm border-primary/30 text-center animate-scale-in mb-20">
              <p className="text-lg text-muted-foreground mb-6">Отсканируйте QR-код для быстрой регистрации в Telegram</p>
              <div className="flex justify-center mb-6 bg-white p-6 rounded-xl inline-block mx-auto">
                <QRCodeSVG 
                  value="https://t.me/ClashRoyael2025" 
                  size={200}
                  level="H"
                  includeMargin={false}
                />
              </div>
              <Button 
                size="lg" 
                className="w-full text-lg font-bold"
                onClick={() => window.open('https://t.me/ClashRoyael2025', '_blank')}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Открыть Telegram канал
              </Button>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Расписание турнира</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Swords" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">25 декабря — 1-й и 2-й раунды</h3>
                    <p className="text-muted-foreground">Игры по сетке плей-офф. Время: 18:00-21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Icon name="MessageSquare" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">26 декабря — День отдыха</h3>
                    <p className="text-muted-foreground">Обмен стратегиями и советами в Discord/Telegram</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">27-28 декабря — 3-й и 4-й раунды</h3>
                    <p className="text-muted-foreground">Продолжение турнира. Время: 18:00-21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Icon name="Crown" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">29 декабря — 5-й раунд (полуфиналы)</h3>
                    <p className="text-muted-foreground">Решающие битвы за выход в финал. Время: 18:00-21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/40 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Trophy" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">30 декабря — Финал</h3>
                    <p className="text-muted-foreground">Главная битва турнира! Время: 18:00-21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/30 to-accent/10 border-accent/50 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/30 p-3 rounded-lg">
                    <Icon name="PartyPopper" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">31 декабря — Награждение и вечеринка</h3>
                    <p className="text-muted-foreground">Награждение победителей и новогодняя вечеринка в Discord/Telegram. Тема: «Зимние баталии и Clash Royale»</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-12 bg-gradient-to-br from-primary/30 to-primary/10 border-primary/50 text-center animate-scale-in">
            <Icon name="Gift" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов стать чемпионом?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Регистрация открыта до 19 декабря. Количество мест ограничено!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold"
                onClick={() => window.open('https://t.me/ClashRoyael2025', '_blank')}
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Участвовать в турнире
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 font-bold"
                onClick={() => window.open('https://t.me/ClashRoyael2025', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Telegram канал
              </Button>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="mb-4">© 2024 Clash Royale Winter Championship Rostov-on-Don</p>
            <div className="flex justify-center gap-6">
              <a href="https://t.me/ClashRoyael2025" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}