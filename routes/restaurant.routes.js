const{ Router } = require('express');


const { createRestaurant, createReview, findRestaurants, updateReview } = require('../controllers/restaurant.controller');
const { protect } = require('../middleware/user.middleware');
const { validExistRestaurant } = require('../middlewares/restaurant.middleware');
const { validExistReview } = require('../middlewares/review.middleware');
const { createRestaurantValidation, validateFields, createReviewValidation } = require('../middlewares/validations.middleware');


const router = Router();

router.get('/', findRestaurants);
router.use(protect);
router.post('/', createRestaurantValidation,validateFields, createRestaurant);



router.post(
    '/reviews/:id',
    createReviewValidation,
    validateFields, 
    validExistRestaurant, 
    createReview
    );

    router.patch(
        '/reviews/:restaurantId/:id', 
        validExistRestaurantId,
        validExistReview,
        updateReview
        );

module.exports = {
    restaurantRouter : router,
};