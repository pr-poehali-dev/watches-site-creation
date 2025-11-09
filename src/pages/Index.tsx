import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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
              Главный турнир зимы в Ростове-на-Дону! Сразись за звание чемпиона и уникальные призы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 font-bold">
                <Icon name="Info" size={20} className="mr-2" />
                Подробнее
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Calendar" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Дата</h3>
                  <p className="text-muted-foreground">28-29 декабря 2024</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <Icon name="MapPin" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Место</h3>
                  <p className="text-muted-foreground">Ростов-на-Дону</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all animate-fade-in">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Icon name="Trophy" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Призовой фонд</h3>
                  <p className="text-muted-foreground">50 000 ₽</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">О турнире</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Новогодний турнир по Clash Royale — это уникальное событие для всех фанатов игры в Ростове-на-Дону! 
                Соберутся лучшие игроки региона, чтобы побороться за звание чемпиона и щедрые призы.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Формат 1v1</h4>
                    <p className="text-muted-foreground">Классические дуэли по правилам игры</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Для всех уровней</h4>
                    <p className="text-muted-foreground">От новичков до профессионалов</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Праздничная атмосфера</h4>
                    <p className="text-muted-foreground">Новогоднее настроение и розыгрыши</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Призы</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-to-br from-accent/20 to-accent/5 border-accent/40 text-center transform hover:scale-105 transition-all animate-fade-in">
                <div className="relative mb-6">
                  <Icon name="Medal" size={64} className="text-accent mx-auto" />
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">1 место</h3>
                <div className="text-4xl font-extrabold text-accent mb-2">25 000 ₽</div>
                <p className="text-muted-foreground">+ Уникальный кубок</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/40 text-center transform hover:scale-105 transition-all animate-fade-in">
                <div className="relative mb-6">
                  <Icon name="Medal" size={64} className="text-secondary mx-auto" />
                  <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">2 место</h3>
                <div className="text-4xl font-extrabold text-secondary mb-2">15 000 ₽</div>
                <p className="text-muted-foreground">+ Медаль чемпиона</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/40 text-center transform hover:scale-105 transition-all animate-fade-in">
                <div className="relative mb-6">
                  <Icon name="Medal" size={64} className="text-primary mx-auto" />
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                </div>
                <h3 className="text-2xl font-bold mb-2">3 место</h3>
                <div className="text-4xl font-extrabold text-primary mb-2">10 000 ₽</div>
                <p className="text-muted-foreground">+ Сертификат участника</p>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">Расписание</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">28 декабря - День 1</h3>
                      <span className="text-sm text-muted-foreground">10:00 - 18:00</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 10:00 - Регистрация участников</li>
                      <li>• 11:00 - Открытие турнира</li>
                      <li>• 12:00 - Начало групповых этапов</li>
                      <li>• 18:00 - Завершение первого дня</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/30 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-3 rounded-lg">
                    <Icon name="Clock" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">29 декабря - День 2</h3>
                      <span className="text-sm text-muted-foreground">10:00 - 20:00</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 10:00 - Плей-офф 1/8 финала</li>
                      <li>• 14:00 - Четвертьфиналы</li>
                      <li>• 16:00 - Полуфиналы</li>
                      <li>• 18:00 - Гранд-финал</li>
                      <li>• 19:30 - Награждение победителей</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-12 bg-gradient-to-br from-primary/30 to-primary/10 border-primary/50 text-center animate-scale-in">
            <Icon name="Gift" size={64} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готов стать чемпионом?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Регистрация открыта до 25 декабря. Количество мест ограничено!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 font-bold">
                <Icon name="Rocket" size={20} className="mr-2" />
                Участвовать в турнире
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 font-bold">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </Card>
        </section>

        <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm py-8">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p className="mb-4">© 2024 Clash Royale Winter Championship Rostov-on-Don</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
