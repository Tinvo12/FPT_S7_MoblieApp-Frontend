const Review = require('../models/Review');
const Booking = require('../models/Booking');
const MCProfile = require('../models/MCProfile');

exports.createReview = async (reviewData) => {
    const { bookingId, rating, comment, clientId } = reviewData;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
        const error = new Error('Booking not found');
        error.statusCode = 404;
        throw error;
    }
    if (booking.status !== 'Completed') {
        const error = new Error('Can only review completed bookings');
        error.statusCode = 400;
        throw error;
    }

    const review = await Review.create({
        booking: bookingId,
        mc: booking.mc,
        client: clientId,
        rating,
        comment
    });

    // Update MC Profile average rating
    const reviews = await Review.find({ mc: booking.mc });
    const avgRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

    await MCProfile.findOneAndUpdate(
        { user: booking.mc },
        { rating: avgRating, reviewsCount: reviews.length }
    );

    return review;
};

exports.getMCReviews = async (mcId) => {
    return await Review.find({ mc: mcId }).populate('client', 'name avatar');
};

exports.updateReview = async (id, updateData) => {
    const review = await Review.findById(id);
    if (!review) {
        const error = new Error('Review not found');
        error.statusCode = 404;
        throw error;
    }

    // Check if within 24 hours
    const timeDiff = new Date() - new Date(review.createdAt);
    if (timeDiff > 24 * 60 * 60 * 1000) {
        const error = new Error('Review can only be edited within 24 hours');
        error.statusCode = 400;
        throw error;
    }

    return await Review.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteReview = async (id) => {
    return await Review.findByIdAndDelete(id);
};
