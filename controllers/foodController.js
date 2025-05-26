import foodPosts from "../data.js";

//INDEX
const index = (req, res) => {
    res.json({
        data: foodPosts,
        count: foodPosts.length
    });
};

//SHOW
const show = (req, res) => {
    const foodId = req.params.id;
    const food = foodPosts.find(curFood => curFood.id === parseInt(foodId));

    res.json({
        data: food
    });
};

//STORE
const store = (req, res) => {
    
    res.json({
        data: "Creo un nuovo elemento"
    });
};

//UPDATE
const update = (req, res) => {
    
    res.json({
        data: "Modifico un elemento"
    });
};

//DESTROY
const destroy = (req, res) => {
    const foodId = req.params.id;
    const food = foodPosts.filter(curFood => curFood.id !== parseInt(foodId));
    console.log(food);
    
   res.sendStatus(204)
};


const foodController = {
    index,
    show,
    store,
    update,
    destroy
};

export default foodController;