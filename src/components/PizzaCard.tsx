
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PizzaCardProps {
  name: string;
  description: string;
  imageSrc: string;
  price: string;
}

export function PizzaCard({ name, description, imageSrc, price }: PizzaCardProps) {
  return (
    <Card className="overflow-hidden border-2 border-pizza-dough transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={`${name} pizza`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute right-2 top-2 rounded-full bg-pizza-red px-3 py-1 text-sm font-bold text-white">
          {price}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-bold text-pizza-tomato">{name}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Button className="w-full bg-pizza-olive hover:bg-pizza-basil">
          Adicionar ao Pedido
        </Button>
      </CardContent>
    </Card>
  );
}
