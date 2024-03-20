import { Inter, Roboto_Condensed } from "next/font/google";
import FramerMotionWrapp from './components/framer-motion-wrapp';
import "./globals.css";

const inter = Inter({
  subsets: ["latin","cyrillic"],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_condensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ["latin","cyrillic"],
  display: 'swap',
  variable: '--font-roboto-condensed',
});

export const metadata = {
  title: "Пламя",
  description: "Решение проблем безопасности, любых строительных объектов.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${roboto_condensed.variable}`}>
        <FramerMotionWrapp>
          <main className="flex min-h-screen items-center justify-around overflow-hidden z-10">{children}</main>
        </FramerMotionWrapp>
      </body>
    </html>
  );
}
