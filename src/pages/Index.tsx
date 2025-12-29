import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  age: string;
}

export default function Index() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const products: Product[] = [
    { id: 1, name: "Конструктор LEGO City", price: 3499, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500", category: "Конструкторы", age: "6+" },
    { id: 2, name: "Кукла Барби", price: 1299, image: "https://images.unsplash.com/photo-1588427913950-c5d19ac3bb38?w=500", category: "Куклы", age: "3+" },
    { id: 3, name: "Машинка на радиоуправлении", price: 2799, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", category: "Транспорт", age: "5+" },
    { id: 4, name: "Плюшевый мишка", price: 899, image: "https://images.unsplash.com/photo-1551057743-f3ca0a6d5f6b?w=500", category: "Мягкие игрушки", age: "0+" },
    { id: 5, name: "Настольная игра Монополия", price: 1599, image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500", category: "Настольные игры", age: "8+" },
    { id: 6, name: "Пазл 1000 элементов", price: 799, image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500", category: "Пазлы", age: "10+" },
    { id: 7, name: "Конструктор деревянный", price: 1199, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500", category: "Конструкторы", age: "4+" },
    { id: 8, name: "Набор для рисования", price: 649, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", category: "Творчество", age: "5+" },
  ];

  const categories = ["Все", "Конструкторы", "Куклы", "Транспорт", "Мягкие игрушки", "Настольные игры", "Пазлы", "Творчество"];

  const filteredProducts = selectedCategory === "Все" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    const existing = cart.find(item => item.product.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Blocks" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">ИгроМир</h1>
          </div>
          
          <div className="relative">
            <Button variant="outline" size="lg" className="relative">
              <Icon name="ShoppingCart" size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6 animate-fade-in">
            <Icon name="Sparkles" size={18} />
            <span>Новогодняя распродажа</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 animate-scale-in">
            Мир волшебных игрушек
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Более 10 000 игрушек для детей всех возрастов с доставкой по всей России
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="text-lg px-8 py-6 font-bold">
              <Icon name="Gift" size={20} className="mr-2" />
              Каталог игрушек
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold border-2">
              <Icon name="Percent" size={20} className="mr-2" />
              Акции и скидки
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Card className="p-6 text-center border-primary/20 hover:border-primary/50 transition-all">
            <Icon name="TruckIcon" size={40} className="text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-1">Доставка</h3>
            <p className="text-sm text-muted-foreground">По всей России</p>
          </Card>
          
          <Card className="p-6 text-center border-secondary/20 hover:border-secondary/50 transition-all">
            <Icon name="Shield" size={40} className="text-secondary mx-auto mb-3" />
            <h3 className="font-bold mb-1">Гарантия</h3>
            <p className="text-sm text-muted-foreground">Качество товара</p>
          </Card>
          
          <Card className="p-6 text-center border-accent/20 hover:border-accent/50 transition-all">
            <Icon name="CreditCard" size={40} className="text-accent mx-auto mb-3" />
            <h3 className="font-bold mb-1">Оплата</h3>
            <p className="text-sm text-muted-foreground">Любым способом</p>
          </Card>
          
          <Card className="p-6 text-center border-primary/20 hover:border-primary/50 transition-all">
            <Icon name="HeartHandshake" size={40} className="text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-1">Подарки</h3>
            <p className="text-sm text-muted-foreground">К каждому заказу</p>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Каталог игрушек</h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                  {product.age}
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button 
                    size="sm"
                    onClick={() => addToCart(product)}
                    className="font-bold"
                  >
                    <Icon name="Plus" size={16} className="mr-1" />
                    В корзину
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {cart.length > 0 && (
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 sticky bottom-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">В корзине: {totalItems} товаров</p>
                <p className="text-2xl font-bold">Итого: {totalPrice} ₽</p>
              </div>
              <Button size="lg" className="text-lg font-bold px-8">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </div>
          </Card>
        )}
      </section>

      <footer className="bg-muted/50 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Blocks" size={28} className="text-primary" />
            <h3 className="text-xl font-bold">ИгроМир</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Магазин игрушек для детей всех возрастов
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Phone" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
