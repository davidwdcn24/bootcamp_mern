// Se puede incluir esto en las cabeceras.
res.set("Location", `http://${req.headers["host"]}/api/jokes/${response._id}`);

// Al poner el status 204 al editar o eliminar no devuelve nada.
// Si se pone el status 200, devuelve el objeto de resultado.