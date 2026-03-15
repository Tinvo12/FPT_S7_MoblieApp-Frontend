const MCProfile = require('../models/MCProfile');

exports.updateMCProfile = async (userId, mcData) => {
    return await MCProfile.findOneAndUpdate(
        { user: userId },
        mcData,
        { new: true, upsert: true }
    );
};

exports.findAllMCs = async (filters) => {
    const { search, region, style, eventType, sortPath, minPrice, maxPrice } = filters;

    let query = {};
    if (region) query.regions = { $in: [region] };
    if (style) query.styles = { $in: [style] };
    if (eventType) query.eventTypes = { $in: [eventType] };
    if (minPrice) query['rates.min'] = { $gte: minPrice };
    if (maxPrice) query['rates.max'] = { $lte: maxPrice };

    let profilesQuery = MCProfile.find(query).populate('user', 'name avatar');

    if (sortPath) {
        profilesQuery = profilesQuery.sort(sortPath);
    }

    return await profilesQuery;
};

exports.getMCProfileById = async (id) => {
    const profile = await MCProfile.findById(id).populate('user', 'name avatar');
    if (!profile) {
        const error = new Error('MC not found');
        error.statusCode = 404;
        throw error;
    }
    return profile;
};
