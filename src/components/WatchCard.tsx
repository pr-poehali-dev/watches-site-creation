import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WatchCardProps {
  name: string;
  collection: string;
  price: string;
  image: string;
}

const WatchCard = ({ name, collection, price, image }: WatchCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <CardContent className="p-6 text-center">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
          {collection}
        </p>
        
        <h3 className="text-xl font-serif font-semibold mb-3">
          {name}
        </h3>
        
        <p className="text-2xl font-light mb-4 text-accent">
          {price}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full border-black hover:bg-black hover:text-white transition-colors"
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

export default WatchCard;
