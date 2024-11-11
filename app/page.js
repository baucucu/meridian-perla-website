import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, Card } from "@/components/ui/card";
import { CheckCircle, Star, Phone, Mail, MapPin, Contact } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AppHeader from "@/components/AppHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import FeedbackSection from "@/components/FeedbackSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Script from "next/script";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutUsSection />
        <FeedbackSection />
        {/* <PricingSection /> */}
        <ContactSection />
        <Script
          id="whatsapp-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?50746';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
          "enabled": true,
          "chatButtonSetting": {
            "backgroundColor": "#00e785",
            "ctaText": "Intreaba pe Whatsapp",
            "borderRadius": "25",
            "marginLeft": "0",
            "marginRight": "20",
            "marginBottom": "20",
            "ctaIconWATI": false,
            "position": "right"
          },
          "brandSetting": {
            "brandName": "Meridian Perla",
            "brandSubTitle": "undefined",
            "brandImg": "",
            "welcomeText": "Buna ziua,\\nCu ce va putem ajuta?",
            "messageText": "",
            "backgroundColor": "#00e785",
            "ctaText": "Intreaba pe Whatsapp",
            "borderRadius": "25",
            "autoShow": false,
            "phoneNumber": "40729702405"
          }
        };
        s.onload = function() {
          CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })();
    `,
          }}
        />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Sparkle Clean. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
