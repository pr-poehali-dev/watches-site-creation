import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/10">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/57508d02-fce5-4be8-9f3a-4bbd9beb4bee.jpg')] bg-cover bg-center opacity-40"></div>
      
      <div className="relative">
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold text-sm animate-fade-in border border-accent/30">
              <Icon name="Trophy" size={18} />
              <span>Зимний Чемпионат 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-tight animate-scale-in">
              Clash Royale
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in">
              Главный турнир зимы! Сразись с лучшими игроками города
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold"
                onClick={() => window.open('https://t.me/+wWcQ5eCQB_g5YmNi', '_blank')}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 font-bold"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Calendar" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Дата</h3>
                  <p className="text-muted-foreground">1 февраля 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Icon name="MapPin" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Место</h3>
                  <p className="text-muted-foreground">Киберарена RND</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Icon name="Users" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Участники</h3>
                  <p className="text-muted-foreground">До 1000 игроков</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="DollarSign" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Призы</h3>
                  <p className="text-muted-foreground">Денежный приз</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">О турнире</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Открытый турнир по Clash Royale в Ростове-на-Дону для игроков всех уровней. 
                Сразись с лучшими, докажи свое мастерство и завоюй главный приз!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Формат 1v1 Single Elimination</h4>
                    <p className="text-muted-foreground">Классический плей-офф с выбыванием</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Киберарена с трансляцией</h4>
                    <p className="text-muted-foreground">Комментаторы и прямой эфир на YouTube</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Регистрация до 28 января</h4>
                    <p className="text-muted-foreground">Успей занять место в турнирной сетке</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/57508d02-fce5-4be8-9f3a-4bbd9beb4bee.jpg" 
                alt="Турнир Clash Royale"
                className="rounded-2xl shadow-2xl border border-primary/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl animate-scale-in border-2 border-accent">
                <div className="text-3xl font-extrabold line-through opacity-50">100K ₽</div>
                <div className="text-4xl font-extrabold">Денежный приз</div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Призовые места</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-500/30 text-center animate-scale-in hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-yellow-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">1 место</h3>
                <p className="text-4xl font-extrabold text-yellow-500 mb-2">Денежный приз</p>
                <p className="text-muted-foreground">+ Кубок чемпиона</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-gray-400/10 to-gray-500/10 border-gray-400/30 text-center animate-scale-in hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">2 место</h3>
                <p className="text-4xl font-extrabold text-gray-400 mb-2">Денежный приз</p>
                <p className="text-muted-foreground">+ Медаль</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-amber-700/10 to-amber-800/10 border-amber-700/30 text-center animate-scale-in hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-amber-700 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">3 место</h3>
                <p className="text-4xl font-extrabold text-amber-700 mb-2">Денежный приз</p>
                <p className="text-muted-foreground">+ Медаль</p>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Расписание турнира</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">10:00 — Регистрация участников</h3>
                    <p className="text-muted-foreground">Проверка документов, получение номеров игроков</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">11:00 — Церемония открытия</h3>
                    <p className="text-muted-foreground">Приветствие участников, жеребьевка, правила</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Swords" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">12:00 — Групповой этап</h3>
                    <p className="text-muted-foreground">128 → 32 игрока, Bo1 (Best of 1)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Icon name="Flame" size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">15:00 — Плей-офф</h3>
                    <p className="text-muted-foreground">32 → 8 игроков, Bo3 (Best of 3)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Icon name="Trophy" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">18:00 — Финал</h3>
                    <p className="text-muted-foreground">Топ-4 игрока, Bo5 (Best of 5)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Award" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">20:00 — Награждение победителей</h3>
                    <p className="text-muted-foreground">Церемония награждения, фотосессия, интервью</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">📞 Контакты</h3>
                <div className="space-y-4">
                  <a href="tel:+79991234567" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group">
                    <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <span className="font-semibold">+7 (999) 123-45-67</span>
                  </a>
                  <a href="mailto:tournament@clashroyale.ru" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group">
                    <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <span className="font-semibold">tournament@clashroyale.ru</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">🌐 Социальные сети</h3>
                <div className="flex gap-3">
                  <Button variant="default" size="icon" className="h-14 w-14 bg-primary hover:bg-primary/90">
                    <Icon name="MessageCircle" size={24} />
                  </Button>
                  <Button variant="default" size="icon" className="h-14 w-14 bg-destructive hover:bg-destructive/90">
                    <Icon name="Youtube" size={24} />
                  </Button>
                  <Button variant="default" size="icon" className="h-14 w-14 bg-accent hover:bg-accent/90">
                    <Icon name="Instagram" size={24} />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Партнёры</h3>
                <p className="text-muted-foreground">
                  При поддержке киберспортивного клуба RND Esports
                </p>
              </div>
            </div>
            
            <div className="text-center text-muted-foreground border-t pt-8">
              <p>&copy; 2026 Clash Royale Championship. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}