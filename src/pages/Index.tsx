import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/82ff416f-8f82-447d-95db-b2f839f5c051.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative">
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col items-center text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 font-semibold text-sm border border-orange-500/30">
              <Icon name="Snowflake" size={18} />
              <span>Зимний Турнир 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              PUBG Winter Cup
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Самый масштабный зимний турнир по PUBG. Покажи, кто настоящий выживший!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-orange-600 hover:bg-orange-700 font-bold text-white"
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-white/30 font-bold text-white hover:bg-white/10"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Icon name="Calendar" size={28} className="text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Дата старта</h3>
                  <p className="text-gray-400">15 февраля 2026</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Icon name="Gamepad2" size={28} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Формат</h3>
                  <p className="text-gray-400">Squad TPP</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-green-500/20 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Icon name="Users" size={28} className="text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Команды</h3>
                  <p className="text-gray-400">До 64 команд</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-yellow-500/20 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Icon name="Trophy" size={28} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Призовой фонд</h3>
                  <p className="text-gray-400">500 000 ₽</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">О турнире</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Зимний турнир по PUBG соберет лучшие команды для битвы за выживание. 
                Снежные карты, напряженные перестрелки и крупный призовой фонд ждут участников!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Формат Squad TPP</h4>
                    <p className="text-gray-400">Команды по 4 человека, вид от третьего лица</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Онлайн-трансляция</h4>
                    <p className="text-gray-400">Прямой эфир всех матчей с комментариями</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={24} className="text-orange-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-white">Регистрация до 10 февраля</h4>
                    <p className="text-gray-400">Заполни форму и подготовь свою команду</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/82ff416f-8f82-447d-75db-b2f839f5c051.jpg" 
                alt="PUBG Winter Cup"
                className="rounded-2xl shadow-2xl border border-orange-500/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl border-2 border-orange-500">
                <div className="text-sm font-semibold opacity-80">Призовой фонд</div>
                <div className="text-4xl font-extrabold">500K ₽</div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Призовые места</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/40 text-center hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2 text-white">1 место</h3>
                <p className="text-4xl font-extrabold text-yellow-400 mb-2">250 000 ₽</p>
                <p className="text-gray-400">+ Кубок чемпиона</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-gray-400/20 to-gray-500/20 border-gray-400/40 text-center hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2 text-white">2 место</h3>
                <p className="text-4xl font-extrabold text-gray-300 mb-2">150 000 ₽</p>
                <p className="text-gray-400">+ Медаль</p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-700/20 to-orange-800/20 border-orange-700/40 text-center hover:scale-105 transition-transform">
                <Icon name="Medal" size={48} className="text-orange-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2 text-white">3 место</h3>
                <p className="text-4xl font-extrabold text-orange-600 mb-2">100 000 ₽</p>
                <p className="text-gray-400">+ Медаль</p>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Правила участия</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-orange-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <Icon name="Shield" size={28} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Требования к команде</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Команда из 4 основных игроков</li>
                      <li>• 1 запасной игрок</li>
                      <li>• Все игроки старше 16 лет</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Icon name="Target" size={28} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Система очков</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 15 очков за победу в матче</li>
                      <li>• 1 очко за каждое убийство</li>
                      <li>• 6 матчей в групповом этапе</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-green-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Icon name="Map" size={28} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Карты турнира</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Erangel (зимняя версия)</li>
                      <li>• Vikendi</li>
                      <li>• Miramar</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/80 backdrop-blur-sm border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Icon name="Clock" size={28} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Расписание</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Групповой этап: 15-16 февраля</li>
                      <li>• Плей-офф: 22-23 февраля</li>
                      <li>• Финал: 1 марта</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="text-center space-y-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 p-12 rounded-3xl border border-orange-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Готов к битве?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Регистрация открыта! Собери команду, заполни форму и докажи, что ты лучший выживший этой зимы.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-orange-600 hover:bg-orange-700 font-bold text-white"
            >
              <Icon name="UserPlus" size={24} className="mr-2" />
              Зарегистрировать команду
            </Button>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <p>© 2026 PUBG Winter Cup. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Правила</a>
              <a href="#" className="hover:text-white transition-colors">Контакты</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
