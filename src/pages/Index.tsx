import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const courses = [
    {
      title: "Базовый курс",
      duration: "4 недели",
      price: "15 000 ₽",
      features: ["Техника 1 фреза", "Формула 3 в 1", "Укрепление гель-лаком", "Сертификат"],
      icon: "Sparkles"
    },
    {
      title: "Продвинутый уровень",
      duration: "6 недель",
      price: "25 000 ₽",
      features: ["Скоростные техники", "Работа без реверса", "Тонкое укрепление", "Практика онлайн"],
      icon: "Zap"
    },
    {
      title: "Мастер-класс",
      duration: "2 недели",
      price: "10 000 ₽",
      features: ["Секреты скорости", "Авторские приёмы", "Разбор ошибок", "Поддержка куратора"],
      icon: "Award"
    }
  ];

  const benefits = [
    {
      icon: "Timer",
      title: "Формула 3 в 1",
      description: "Экономия времени без потери качества"
    },
    {
      icon: "Wrench",
      title: "1 фреза",
      description: "Без переключения реверса — проще и быстрее"
    },
    {
      icon: "Shield",
      title: "Тонкое укрепление",
      description: "Гель-лак ложится идеально, ногти выглядят естественно"
    },
    {
      icon: "Rocket",
      title: "Скорость",
      description: "Сокращаем время работы в 2 раза"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium animate-scale-in">
            ✨ Онлайн-обучение маникюру
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Скоростной маникюр<br />
            <span className="bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              Формула 3 в 1
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Освой авторскую технику работы 1 фрезой без реверса. Укрепление гель-лаком тонко и профессионально.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-pink-50 text-lg px-8 py-6 transition-transform duration-200 hover:scale-105">
              Выбрать курс
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Почему наша методика?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальная техника, которая экономит время и повышает качество работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Онлайн-курсы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери программу обучения по своему уровню
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-bl-full"></div>
                
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={course.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-lg">
                    <Icon name="Clock" size={16} className="inline mr-1" />
                    {course.duration}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">{course.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Записаться на курс
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 text-lg py-6"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 text-lg py-6"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 text-lg py-6"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о своём опыте и целях обучения..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 text-lg min-h-32"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Скоростной маникюр</h3>
              <p className="text-white/80">
                Профессиональное обучение онлайн
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center">
                  <Icon name="Phone" size={18} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" size={18} className="mr-2" />
                  info@speedmanicure.ru
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Соцсети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Icon name="Youtube" size={24} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white">
                  <Icon name="Send" size={24} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-white/20 text-white/60">
            © 2024 Скоростной маникюр. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
