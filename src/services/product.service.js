const supabase = require("../configs/supabaseClient");

const getAllProducts = async (query) => {
    const { search, category, brand, minPrice, maxPrice, page = 1, limit = 10 } = query;
    const offset = (page - 1) * limit;

    let queryBuilder = supabase.from("products").select("*");

    if (search) queryBuilder = queryBuilder.ilike("title", `%${search}%`);
    if (category) queryBuilder = queryBuilder.eq("category", category);
    if (brand) queryBuilder = queryBuilder.eq("brand", brand);
    if (minPrice) queryBuilder = queryBuilder.gte("price", minPrice);
    if (maxPrice) queryBuilder = queryBuilder.lte("price", maxPrice);

    queryBuilder.range(offset, offset + limit - 1);

    const { data, error } = await queryBuilder;
    if (error) throw new Error(error.message);

    return data;
};

const getProductById = async (id) => {
    const { data, error } = await supabase.from("products").select("*").eq("id", id).single();
    if (error) throw new Error(error.message);
    return data;
};

const createProduct = async (productData) => {
    const { data, error } = await supabase.from("products").insert([productData]).select();
    if (error) throw new Error(error.message);
    return data;
};

const updateProduct = async (id, productData) => {
    const { data, error } = await supabase.from("products").update(productData).eq("id", id).select();
    if (error) throw new Error(error.message);
    return data;
};

const deleteProduct = async (id) => {
    const { data, error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw new Error(error.message);
    return data;
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
