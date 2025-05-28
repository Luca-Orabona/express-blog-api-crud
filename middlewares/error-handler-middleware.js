function errorHandler (err, req, res, next) {
    console.log("error", err);
    
    res.status(500).json({
        error: "Errore nel server"
    })
}

export default errorHandler;