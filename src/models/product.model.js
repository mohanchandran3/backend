const { DataTypes } = require("sequelize");
const sequelize = require("../configs/supabaseClient"); 

const Product = sequelize.define("Product", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  category: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Product;
