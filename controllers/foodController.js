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
    const newFood = req.body;
    const lastId = foodPosts[foodPosts.length - 1].id;
    newFood.id = (lastId + 1);

    foodPosts.push(newFood);


    res.status(201);
    res.json({
        data: "Nuovo elemento creato con successo!"
    });
};

//UPDATE
const update = (req, res) => {
    const foodUpdate = req.body;
    const foodId = req.params.id;
    const food = foodPosts.find(curFood => curFood.id === parseInt(foodId));

    if (!food) {
        return res.status(404).json({
            error: "L'elemento che cerchi non esiste"
        });
    };


        food.titolo = foodUpdate.titolo;
        food.contenuto = foodUpdate.contenuto;
        food.immagine = foodUpdate.immagine;
        food.tags = foodUpdate.tags;

        res.json({
            mess: `Modifica dell'elemento con id ${foodId} avvenuta con successo`,
            data: food
        });
    
};

//DESTROY
const destroy = (req, res) => {

    const foodId = req.params.id;
    const index = foodPosts.findIndex(curFood => curFood.id === parseInt(foodId));


    if (index === -1) {
        res.status(404);
        return res.json({
            error: "Non è possibile eliminare un elemneto che non esiste"
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