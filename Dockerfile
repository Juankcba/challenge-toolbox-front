# Utiliza la imagen oficial de Node.js 16 como base
FROM node:16

# Configura el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Compila la aplicación React
RUN npm run build

# Expone el puerto 3000
EXPOSE 3001

# Ejecuta la aplicación
CMD ["npm", "start"]