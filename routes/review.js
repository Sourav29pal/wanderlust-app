const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const ReviewController = require("../controllers/reviews.js");

//Post Review Route
router.post(
  "/",
  isLoggedIn, 
  validateReview, 
  wrapAsync(ReviewController.createReview)
);

//Delete Review Route
router.delete(
  "/:reviewId",
  isReviewAuthor,
  isLoggedIn,
  wrapAsync(ReviewController.destroyReview)
);

module.exports = router;