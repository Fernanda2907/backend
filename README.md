# 🧾 Manual de Desarrollo Fullstack con Next.js y Express

Este proyecto corresponde al desarrollo completo de una aplicación fullstack utilizando **Next.js** (frontend) y **Express.js** (backend), ejecutado sobre **Linux Ubuntu** en una máquina virtual creada con **VirtualBox**.

## 👨‍💻 Autor

- Proyecto para Ingeniería de Software 2  
- Universidad de Investigación y Desarrollo  
- Estudiante: **María Fernanda León Sanguino**  
- Profesor: **Ph.D. Jonathan Arley Monsalve Salazar**

---

## 📑 Índice

1. [Instalación de Ubuntu en VirtualBox](#1-instalación-de-ubuntu-en-virtualbox)  
2. [Instalación de herramientas en Ubuntu](#2-instalación-de-herramientas-en-ubuntu)  
3. [Desarrollo del Frontend con Next.js](#3-desarrollo-del-frontend-con-nextjs)  
4. [Desarrollo del Backend con Express.js](#4-desarrollo-del-backend-con-expressjs)  
5. [Integración Frontend - Backend](#5-integración-frontend---backend)  
6. [Despliegue en la nube](#6-despliegue-en-la-nube)

---

## 1. 🖥 Instalación de Ubuntu en VirtualBox

### Requisitos previos
- [ ] Instalar **Oracle VirtualBox**
- [ ] Descargar la ISO de Ubuntu desde [ubuntu.com](https://ubuntu.com/download)

### Crear máquina virtual
1. Abrir VirtualBox y crear nueva VM: `Nombre: Software2`, `Tipo: Linux`, `Versión: Ubuntu (64-bit)`
2. Memoria: mínimo **4096 MB**
3. Disco duro virtual: **VDI**, tamaño dinámico, mínimo **25 GB**

### Montar ISO y seguir instalación
1. Idioma: Español
2. Tipo de instalación: Normal
3. Crear usuario y contraseña
4. Finalizar e **expulsar la ISO**

---

## 2. 🛠 Instalación de herramientas en Ubuntu

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl git build-essential -y
````

### Instalar Node.js y npm usando NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc # o source ~/.profile
nvm install --lts
nvm use --lts
nvm alias default node
node -v
npm -v
```

---

## 3. ⚛️ Desarrollo del Frontend con Next.js

### Crear proyecto

```bash
npx create-next-app@latest frontend
cd frontend
npm run dev
```

### Estructura destacada

```
frontend/
├── app/
│   ├── page.tsx (Login)
│   └── profile/page.tsx (Perfil)
├── lib/
│   ├── auth.ts
│   └── session.ts
```

---

## 4. 🚀 Desarrollo del Backend con Express.js

### Estructura del backend

```
backend/
├── index.js
└── package.json
```

### index.js – Servidor Express con autenticación JWT

```js
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;
const SECRET_KEY = "clave_super_secreta";

app.use(cors());
app.use(bodyParser.json());

// Usuarios simulados
const USERS = [...]; // (ver manual completo para lista)

// Login
app.post("/login", (req, res) => {
  ...
});

// Obtener info de usuario
app.get("/userinfo", (req, res) => {
  ...
});

app.listen(PORT, () => {
  console.log(`Microservicio corriendo en http://localhost:${PORT}`);
});
```

---

## 5. 🔗 Integración Frontend - Backend

### Login (page.tsx)

* Se usa `loginUser(email, password)` para autenticarse.
* Se almacena el token JWT y se redirige al perfil.
* Se muestran errores amigables al usuario.

### Perfil (profile/page.tsx)

* Se recupera el token y se hace `GET /userinfo`.
* Se presenta nombre, correo, cédula, rol y fecha de ingreso.
* Permite cerrar sesión con botón.

---

## 6. 🌐 Despliegue en la nube

### 📁 GitHub

```bash
git init
git remote add origin https://github.com/tuusuario/frontend.git
git add .
git commit -m "Versión inicial"
git push -u origin master
```

### ⚙️ Frontend en Vercel

1. Ir a [https://vercel.com](https://vercel.com)
2. Importar desde GitHub
3. Seleccionar:

   * Framework: **Next.js**
   * Variables de entorno: ninguna
4. Desplegar

🔗 Proyecto desplegado:
[https://frontend-two-liart-43.vercel.app/](https://frontend-two-liart-43.vercel.app/)

---

### 🚀 Backend en Railway

1. Ir a [https://railway.app](https://railway.app)
2. Crear nuevo proyecto desde GitHub
3. Configurar:

   * Comando: `node index.js`
   * Puerto: `3001`

🔗 Endpoint del backend:
`https://backend-production-xxxx.up.railway.app/login`

⚠️ Actualizar `auth.ts` en el frontend para apuntar a esta URL.

---

## ✅ Usuarios de prueba

| Correo                                              | Contraseña    | Nombre     | Rol           |
| --------------------------------------------------- | ------------- | ---------- | ------------- |
| [usuario@ejemplo.com](mailto:usuario@ejemplo.com)   | contraseña123 | Juan Pérez | Administrador |
| [usuario2@ejemplo.com](mailto:usuario2@ejemplo.com) | clave456      | Ana Gómez  | Usuario       |

---

## 📌 Notas finales

* Este proyecto demuestra cómo construir e integrar un frontend moderno con un backend seguro.
* Incluye autenticación con JWT, manejo de sesiones, despliegue continuo y uso de herramientas modernas como Vercel y Railway.

---
