'use client'
import {createContext, useContext} from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

interface FavoritesContextType {
    favorites: string[];
    toggleFavorite: (bin: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    toggleFavorite: () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

    const toggleFavorite = (bin: string) => {
        setFavorites(prev =>
            prev.includes(bin)
                ? prev.filter(b => b !== bin)
                : [...prev, bin]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};