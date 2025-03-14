"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateAdSchema } from "@/types/AdSchema";
import { useTranslations } from "use-intl";

interface CountdownTimerProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const t = useTranslations("homePage.dialog");
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="my-4 flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.days}</div>
        <div className="text-xs uppercase tracking-wider">{t("days")}</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs uppercase tracking-wider">{t("hours")}</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs uppercase tracking-wider">{t("minutes")}</div>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs uppercase tracking-wider">{t("seconds")}</div>
      </div>
    </div>
  );
}

export function CustomAdvertisementDialog({
  data,
  onClose,
}: {
  data: CreateAdSchema;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(true);
  const t = useTranslations("homePage.dialog");
  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    } else {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="overflow-hidden border-0 p-0 sm:max-w-[600px]">
        <div
          className="relative flex h-full min-h-[400px] w-full flex-col items-center justify-center p-6 text-white"
          style={{
            backgroundImage: `url(${data.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-md text-center">
            <div className="mb-4 inline-block animate-pulse rounded-full bg-primary/80 px-4 py-1 text-sm font-medium text-primary-foreground">
              {data.offerBadge}
            </div>

            <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
              {data.title}
            </h2>
            <p className="mb-4 text-lg">{data.description}</p>

            {data.endDate && (
              <div className="mb-2 text-xl font-semibold">{t("endsIn")}</div>
            )}
            {data.endDate && <CountdownTimer targetDate={data.endDate} />}

            <a href={data.buttonUrl}>
              {" "}
              <Button
                size="lg"
                className="mt-6 animate-bounce bg-primary px-8 py-6 text-lg font-bold text-primary-foreground hover:bg-primary/90"
              >
                {data.buttonText}
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
