# API-Integracao-BackEnd-DB-On11-S13
## Entregável da semana 13 {Reprograma}, API de filmes (CRUD) usando o MondoDB.

# Rotas

### [GET] "/" -  _getAll_ - Retorna todos os filmes;

### [GET] "/:id" - _getById_ - Retorna um filme específico;

### [POST] "/" - _createMovie_ - Cria um filme;

### [PATCH] "/:id"  - _updateMovie_ - Atualiza partes únicas ou todas do filme;

### [DELETE] "/:id"  - _removeMovie_ - Deleta um filme;

<br>

**_CRUD_**
<br>

### o endpoint: localhost:3333/movies

<br>

# Schema - Mongoose

* title
    - String
    - required 
* description
    - String
    - required
*year
    - Number
    - required
* genre
    - String
    - required
* language
    - String
    - required
* available_on
    - String
    - required
* created_at
    - Date
    - required
    - default

# Modelo dos dados no Json
```
    {
        "title": "String",
        "year": Number,
        "description": "String",
        "type": " String",
        "available_on": "String",
        "created_at": "Data"
    }
```
