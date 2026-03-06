import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const badges = [
  { icon: Users, label: "Команда специалистов", description: "Психолог, логопед, тьютор, преподаватель и невролог — все в одном месте" },
  { icon: BookOpen, label: "Образовательная система", description: "Курсы, занятия и LMS-платформа для развития вашего ребёнка" },
  { icon: Heart, label: "Индивидуальный подход", description: "Персональная диагностика и стратегия, подобранная под возраст и потребности" },
  { icon: Shield, label: "Поддержка семьи", description: "Еженедельные отчёты, чат со специалистами и отслеживание прогресса" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-20 lg:flex-row lg:gap-16">
        {/* Left: Content */}
        <motion.div
          className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-display text-sm font-semibold text-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Heart className="h-4 w-4" />
            Комплексная поддержка для вашей семьи
          </motion.span>

          <h1 className="mb-6 font-display text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Не просто психолог,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              а целая команда
            </span>{" "}
            для вашего ребёнка
          </h1>

          <p className="mb-8 max-w-lg font-body text-lg leading-relaxed text-muted-foreground">
            Психологи, логопеды, тьюторы и преподаватели — мы подбираем
            персональную команду специалистов и выстраиваем стратегию развития
            именно для вашего ребёнка.
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-primary px-8 font-display text-base font-bold text-primary-foreground shadow-elevated transition-all hover:scale-105 hover:bg-primary/90"
            >
              Бесплатная консультация
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-border px-8 font-display text-base font-semibold text-foreground transition-all hover:scale-105 hover:bg-muted"
            >
              Узнать больше
            </Button>
          </div>

          {/* Badges */}
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2.5 rounded-xl bg-card px-4 py-3 shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <badge.icon className="h-4.5 w-4.5 text-primary" />
                </div>
                <span className="font-display text-sm font-semibold text-foreground">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="relative flex items-center justify-center lg:flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="animate-float relative">
            <img
              src={heroImage}
              alt="Команда специалистов заботится о ребёнке"
              className="w-full max-w-md drop-shadow-2xl lg:max-w-lg"
            />
          </div>

          {/* Floating stat cards */}
          <motion.div
            className="absolute -left-4 top-8 rounded-2xl bg-card px-5 py-3 shadow-card lg:-left-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="font-display text-2xl font-black text-primary">5+</p>
            <p className="font-body text-xs text-muted-foreground">специалистов</p>
          </motion.div>

          <motion.div
            className="absolute -right-4 bottom-16 rounded-2xl bg-card px-5 py-3 shadow-card lg:-right-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="font-display text-2xl font-black text-secondary">30 мин</p>
            <p className="font-body text-xs text-muted-foreground">бесплатная консультация</p>
          </motion.div>

          <motion.div
            className="absolute -top-2 right-8 rounded-2xl bg-card px-5 py-3 shadow-card lg:right-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="font-display text-2xl font-black text-accent">6–17</p>
            <p className="font-body text-xs text-muted-foreground">лет</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
