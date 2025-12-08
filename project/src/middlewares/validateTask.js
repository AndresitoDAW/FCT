module.exports = (req, res, next) => {
    const { title } = req.body;

    if (!title || title.trim() === '') {
        return res.status(400).json({
            error: 'El título de la tarea es obligatorio'
        });
    }

    if (title.length > 255) {
        return res.status(400).json({
            error: 'El título no puede superar los 255 caracteres'
        });
    }

    next();
};
