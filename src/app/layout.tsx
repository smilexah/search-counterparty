import './globals.css';
import {FavoritesProvider} from '@/context/FavoritesContext';
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";
import {ThemeProvider} from "@/context/ThemeContext";

export const metadata = {
    title: 'DataFy - Поиск контрагента',
    description: 'Современная платформа для проверки контрагентов',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <body className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-200">
        <ThemeProvider>
            <FavoritesProvider>
                <div className="min-h-screen flex flex-col">
                    <Header/>
                    <main className="flex-grow container mx-auto px-4 py-8">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </FavoritesProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}