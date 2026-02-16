import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const films = [
  {
    title: "Тени прошлого",
    year: "2025",
    genre: "Драма",
    image: "https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/be0491e2-a2fa-454d-ab3d-2dd936d3acb3.jpg",
  },
  {
    title: "Последний кадр",
    year: "2024",
    genre: "Триллер",
    image: "https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/ef6d5b9f-c9c5-43fb-aa3e-bafc57b184ef.jpg",
  },
  {
    title: "Монохром",
    year: "2024",
    genre: "Арт-хаус",
    image: "https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/be0491e2-a2fa-454d-ab3d-2dd936d3acb3.jpg",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
            Don sinema
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-white/70">
            <a href="#about" className="hover:text-white transition-colors">О нас</a>
            <a href="#films" className="hover:text-white transition-colors">Фильмы</a>
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black transition-all tracking-widest uppercase text-xs px-6 py-5">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/be0491e2-a2fa-454d-ab3d-2dd936d3acb3.jpg"
            alt="Cinema"
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="w-16 h-px bg-white/50 mx-auto mb-8" />
          <p className="text-sm tracking-[0.4em] uppercase text-white/60 mb-6">Киностудия</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
            Don sinema
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Мы не просто делаем кино — мы создаем миры
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-white/90 px-10 py-6 text-sm tracking-[0.2em] uppercase font-semibold">
              Смотреть шоурил
              <Icon name="Play" size={16} className="ml-2" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-sm tracking-[0.2em] uppercase">
              Наши работы
            </Button>
          </div>
          <div className="w-16 h-px bg-white/50 mx-auto mt-12" />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      <section id="about" className="py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">О студии</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Искусство движущегося изображения
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <p>
                  Студия Don sinema — это команда режиссёров, операторов и продюсеров,
                  объединённых страстью к кинематографу. Мы создаём полнометражные фильмы,
                  короткий метр и рекламные ролики.
                </p>
                <p>
                  Каждый проект — это уникальная история. Мы работаем с естественным светом,
                  выбираем нестандартные локации и уделяем внимание каждой детали кадра.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-bold">47</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Фильмов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Наград</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">8</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/40 mt-1">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/ef6d5b9f-c9c5-43fb-aa3e-bafc57b184ef.jpg"
                alt="Film production"
                className="w-full aspect-[3/4] object-cover grayscale"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section id="films" className="py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">Портфолио</p>
            <h2 className="text-4xl md:text-5xl font-bold">Избранные работы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {films.map((film, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full aspect-[2/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-white/40">{film.year}</span>
                  <span className="w-4 h-px bg-white/30" />
                  <span className="text-xs tracking-[0.2em] uppercase text-white/40">{film.genre}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-white/80 transition-colors">{film.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">Что мы делаем</p>
            <h2 className="text-4xl md:text-5xl font-bold">Услуги</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { icon: "Film", title: "Полный метр", desc: "Производство полнометражных художественных и документальных фильмов" },
              { icon: "Clapperboard", title: "Короткий метр", desc: "Авторские короткометражные фильмы и фестивальное кино" },
              { icon: "Video", title: "Реклама", desc: "Рекламные ролики и имиджевые видео для брендов" },
              { icon: "Camera", title: "Постпродакшн", desc: "Монтаж, цветокоррекция, звуковой дизайн и VFX" },
            ].map((service, i) => (
              <Card key={i} className="bg-black border-0 p-10 hover:bg-white/5 transition-colors duration-500 rounded-none group">
                <Icon name={service.icon} size={32} className="text-white/40 group-hover:text-white transition-colors mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/be0491e2-a2fa-454d-ab3d-2dd936d3acb3.jpg"
              alt="Quote background"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-15"
            />
            <div className="relative py-20 px-8 text-center">
              <Icon name="Quote" size={48} className="text-white/20 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-4xl font-light italic max-w-3xl mx-auto leading-relaxed mb-8">
                «Кино — это не то, что вы видите на экране. Это то, что вы чувствуете внутри»
              </blockquote>
              <div className="w-12 h-px bg-white/30 mx-auto mb-4" />
              <p className="text-sm tracking-[0.2em] uppercase text-white/40">Философия Don sinema</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">Контакты</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Давайте создадим что-то великое</h2>
              <p className="text-white/50 leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                Мы открыты для новых проектов и сотрудничества. Расскажите нам о вашей идее,
                и мы поможем воплотить её на экране.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-white/40" />
                  <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>hello@lumiere-studio.ru</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-white/40" />
                  <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-white/40" />
                  <span className="text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>Москва, ул. Мосфильмовская, 1</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-3">Имя</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-white/60 outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-3">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-white/60 outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-white/40 block mb-3">Сообщение</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:border-white/60 outline-none transition-colors resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <Button className="bg-white text-black hover:bg-white/90 px-10 py-6 text-sm tracking-[0.2em] uppercase font-semibold w-full mt-4">
                Отправить
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              Don sinema
            </div>
            <div className="flex gap-8">
              {["Instagram", "Youtube", "Send"].map((icon) => (
                <a key={icon} href="#" className="text-white/30 hover:text-white transition-colors">
                  <Icon name={icon} size={20} />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/30 tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
              © 2026 Don sinema Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}