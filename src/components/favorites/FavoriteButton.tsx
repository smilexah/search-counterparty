'use client';

import { useFavorites } from '@/context/FavoritesContext';
import {FavoriteIcon} from "@/components/favorites/FavoriteIcon";

const FavoriteButton = ({ bin }: { bin: string }) => {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(bin);

    return (
        <button
            onClick={() => toggleFavorite(bin)}
            className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${
                isFavorite ? 'bg-[#4147BF]' : 'bg-gray-100 dark:bg-gray-700'
            }`}
        >
            <FavoriteIcon filled={isFavorite} />
        </button>
    );
};

export default FavoriteButton;