import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const projects = [
  {
    title: "Донской вояж Гитлера",
    genre: "Исторический триллер / Реконструкция",
    status: "В производстве (Pre-production)",
    image: "https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/0e0cff70-934d-48a0-b0a5-3cdb6de00b76.jpg",
    synopsis: "Декабрь 1941 года. Только что произошло первое крупное поражение вермахта во Второй мировой войне — Красная армия выбила немецкие войска из Ростова-на-Дону. В атмосфере строжайшей секретности Адольф Гитлер прибывает в окрестности донской столицы, чтобы лично встретиться с командованием и попытаться остановить отступление. Фильм погружает зрителя в напряженные дни декабря 41-го, исследуя психологию власти на грани краха и мужество тех, кто стоял на защите «Ворот Кавказа». Это история о решающем моменте войны, развернувшаяся в заснеженных степях Дона.",
  },
  {
    title: "Общество летучих мышей",
    genre: "Криминальная драма / Боевик",
    status: "Сценарный этап (Development)",
    image: "https://cdn.poehali.dev/projects/5a51ca20-62e1-4081-b652-a5a4a98981a7/files/da69b226-01be-4631-998a-b93c424e9661.jpg",
    synopsis: "В самом сердце Ростова-на-Дону, за фасадом знаменитого доходного дома на Большой Садовой, 23, скрывается тайна. Группа единомышленников, не согласных с разгулом преступности, объединяется в «Общество летучих мышей». Свое название и символ — маски летучих мышей, украшающие их штаб-квартиру — они выбрали не случайно. Фильм рассказывает о борьбе за справедливость на улицах южного мегаполиса, где тени прошлого переплетаются с жестокой реальностью настоящего.",
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
          <div className="text-center mb-6">
            <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-4">В производстве</p>
            <h2 className="text-4xl md:text-5xl font-bold">Наши проекты</h2>
          </div>
          <p className="text-center text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Мы гордимся тем, что работаем над историями, которые оживляют легенды и раскрывают забытые страницы истории нашего края
          </p>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="relative group overflow-hidden" style={{ direction: "ltr" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border border-white/10" />
                </div>
                <div style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs tracking-[0.2em] uppercase px-3 py-1 border border-white/20 text-white/60">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{project.title}</h3>
                  <p className="text-sm tracking-[0.15em] uppercase text-white/40 mb-6">{project.genre}</p>
                  <div className="w-12 h-px bg-white/20 mb-6" />
                  <p className="text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.synopsis}
                  </p>
                </div>
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