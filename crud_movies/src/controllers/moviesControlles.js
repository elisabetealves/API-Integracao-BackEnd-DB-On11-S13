const Movie = require("../models/movie")


const getAll = async (req, res) => {
    const movies = await Movie.find() 
    res.status(200).json(movies)
}


const getById = async (req, res) => {
    try {
        const { id } = req.params
        const movies = await Movie.findById(id)

        if (movies == undefined || id == " ") {
            return res.status(404).json([{
                "mensagem": "Por favor informe um ID válido"
            }])
        }
        res.status(200).send(movies)
    } catch {
        res.status(500).json({ message: "Movie cannot be found!" })
    }
}


const createMovie = async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        year: req.body.year,
        genre: req.body.genre,
        language: req.body.language,
        available_on: req.body.available_on,
        created_at: req.body.created_at
    })
    
    try {
        const newMovie = await movie.save() 
        res.status(201).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)

        if (movie == null) {
            return res.status(404).json({ message: " Movie cannot be found!" })
        }

        movie.title = req.body.title
        movie.description = req.body.description
        movie.year = req.body.year
        movie.genre = req.body.genre
        movie.language = req.body.language
        movie.available_on = req.body.available_on

        movieUpadate = await movie.save()
        res.status(200).json(movieUpadate)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const removeMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)

        if (movie == null) {
            return res.status(404).json({ message: " Movie cannot be found!" })
        }

        await movie.remove()
        res.status(200).json({ message: "Movie deleted successfully!" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


module.exports = {
    getAll,
    getById,
    createMovie,
    updateMovie,
    removeMovie
}