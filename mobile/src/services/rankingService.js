import { MOCK_DB } from '../data/mockDatabase';

export const getTopRankingMCs = () => {
    // REQUIREMENT: Smart Ranking Implementation
    // Weight logic: 
    // - rating: 60% importance
    // - bookingsCount: 30% importance
    // - responseRate: 10% importance

    return MOCK_DB.mcProfiles.map(profile => {
        const mcUser = MOCK_DB.users.find(u => u.id === profile.userId);

        // Normalize factors
        const normalizedRating = (profile.rating / 5) * 100; // max 100
        const normalizedBookings = Math.min(profile.bookingsCount * 2, 100); // assume 50 is near max activity
        const normalizedResponse = profile.responseRate; // out of 100

        // Calculate score out of 100
        const rankingScore = (normalizedRating * 0.6) + (normalizedBookings * 0.3) + (normalizedResponse * 0.1);

        return {
            ...profile,
            mcUser,
            rankingScore: rankingScore.toFixed(1)
        };
    }).sort((a, b) => b.rankingScore - a.rankingScore);
};

export const getMCById = (id) => {
    const profile = MOCK_DB.mcProfiles.find(p => p.id === id);
    if (!profile) return null;
    const mcUser = MOCK_DB.users.find(u => u.id === profile.userId);
    return { ...profile, mcUser };
};

export const discoverMCs = (filters = {}) => {
    let results = getTopRankingMCs();

    if (filters.keyword) {
        const lowerKey = filters.keyword.toLowerCase();
        results = results.filter(p =>
            p.mcUser?.name.toLowerCase().includes(lowerKey) ||
            p.bio.toLowerCase().includes(lowerKey)
        );
    }

    // Support sorting types as requested
    if (filters.sortBy) {
        if (filters.sortBy === 'highest_rating') {
            results.sort((a, b) => b.rating - a.rating);
        } else if (filters.sortBy === 'most_booked') {
            results.sort((a, b) => b.bookingsCount - a.bookingsCount);
        } else if (filters.sortBy === 'price_low') {
            results.sort((a, b) => a.rates.min - b.rates.min);
        } else if (filters.sortBy === 'price_high') {
            results.sort((a, b) => b.rates.max - a.rates.max);
        }
    }

    return results;
};
