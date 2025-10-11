import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #3D3D3D 50%, #C9A962 100%)'
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-4">
            С 1875 года
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Искусство
            <br />
            Времени
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
            Каждый наш хронометр — это произведение искусства, 
            созданное мастерами с безупречной точностью
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-medium px-8"
            >
              Изучить коллекцию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8"
            >
              Наша история
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
