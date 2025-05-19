const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 3001
const SECRET_KEY = "clave_super_secreta"

app.use(cors())
app.use(bodyParser.json())

// Usuarios simulados
const USERS = [
    {
        email: "usuario@ejemplo.com",
        password: "contraseña123",
        cedula: "1002003001",
        name: "Juan Pérez",
        role: "Administrador",
        joinDate: "2023-01-01",
    },
    {
        email: "usuario2@ejemplo.com",
        password: "clave456",
        cedula: "2003004002",
        name: "Ana Gómez",
        role: "Usuario",
        joinDate: "2024-02-15",
    },
]

// Microservicio de login
app.post("/login", (req, res) => {
    const { email, password } = req.body

    const user = USERS.find(
        (u) => u.email === email && u.password === password
    )

    if (!user) {
        return res.status(401).json({ message: "Credenciales inválidas" })
    }

    const token = jwt.sign({ cedula: user.cedula }, SECRET_KEY, {
        expiresIn: "1h",
    })

    res.json({ token })
})

// Microservicio de datos personales
app.get("/userinfo", (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token requerido" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const payload = jwt.verify(token, SECRET_KEY)
        const user = USERS.find((u) => u.cedula === payload.cedula)

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        const { password, ...userData } = user
        res.json(userData)
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" })
    }
})

app.listen(PORT, () => {
    console.log(`Microservicio corriendo en http://localhost:${PORT}`)
})
