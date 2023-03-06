const Meal = require("./meal.model")
const Order = require("./order.model")
const Restaurant = require("./restaurant.model")
const Review = require("./reviews.model")
const User = require("./user.model")

const initModel = () => {
   
    User.hasMany(Order);
    Review.belongsTo(User);

    
    User.hasMany(Review);
    Order.belongsTo(User);

    
    Restaurant.hasMany(Review);
    Review.belongsTo(Restaurant);

    
    Restaurant.hasMany(Meal);
    Meal.belongsTo(Meal)

    
    Meal.hasOne(Order);
    Order.belongsTo(Meal);
}

module.exports = initModel;