import foodPosts from "../data.js";

//INDEX
const index = (req, res) => {
    const foodQuery = req.query.tags;

    let result = foodPosts;

    if (foodQuery !== undefined) {
        result = foodPosts.filter(curFood => curFood.tags.includes(foodQuery));
    }

    res.json({
        data: result,
        count: result.length
    });
};

//SHOW
const show = (req, res) => {
    const foodId = req.params.id;
    const food = foodPosts.find(curFood => curFood.id === parseInt(foodId));

    if (food === undefined) {
        res.status(404);
        return res.json({
            data: " Elemento non trovato"
        })
    }
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
    const index = foodPosts.findIndex(curFood => curFood.id === parseInt(foodId));


    if (index === -1) {
        res.status(404);
        return res.json({
            data: "Non è possibile eliminare un elemneto che non esiste"
        });
    };

    foodPosts.splice(index, 1);
    //console.log(foodPosts);

    res.sendStatus(204);
};


const foodController = {
    index,
    show,
    store,
    update,
    destroy
};

export default foodController;