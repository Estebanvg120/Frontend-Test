# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Claro, aquí tienes un ejemplo de cómo podría ser un archivo `README.md` en formato Markdown para un proyecto de frontend construido en React.js, enfocado en un e-commerce con las funcionalidades descritas:

---

# E-commerce App (React.js)

Este proyecto es una aplicación frontend desarrollada en React.js para un e-commerce. La aplicación permite a los usuarios navegar por productos, seleccionar productos específicos, ingresar datos de tarjeta de crédito y datos de entrega, revisar un resumen de la compra, y completar una transacción de compra. También muestra una pantalla de confirmación de compra, tanto exitosa como declinada.

## Funcionalidades

- **Página Principal**: Muestra una lista de productos disponibles.
- **Detalle del Producto**: Vista que muestra detalles específicos de un producto seleccionado.
- **Ingreso de Datos de Tarjeta de Crédito**: Pantalla para ingresar información de la tarjeta de crédito.
- **Ingreso de Datos de Entrega**: Pantalla para ingresar información de la dirección de entrega.
- **Resumen de la Compra**: Pantalla que muestra un resumen detallado de la compra antes de finalizar.
- **Creación de Transacción**: Proceso para crear y confirmar una transacción de compra.
- **Pantalla de Confirmación**: Pantalla que muestra el resultado de la transacción (exitosa o declinada).

## Tecnologías Utilizadas

- React.js
- Redux
- Axios (para manejar peticiones HTTP)
- Estilos: CSS Modules, Styled Components, u otras bibliotecas de estilo según sea necesario.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Estebanvg120/Frontend-Test.git
   cd tu-proyecto
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno necesarias, como las claves de la pasarela de pagos o cualquier otra configuración específica en un archivo `.env`.

## Configuración de Variables de Entorno

El proyecto utiliza variables de entorno para configurar las credenciales y otros datos sensibles. Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:

```
BASE_FEE= 10000
DELIVERY_FEE = 20000
CUSTOMER_ID = 1
URL_BASE=http://localhost:3000
EXTERNAL_API_URL= https://pasareladepagos/v1/
PUBLIC_KEY=keypublic
```

## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run start
```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.


## Componentes Principales

### Products

Componente que muestra una lista de productos disponibles.

### Product

Componente que muestra detalles específicos de un producto seleccionado.

### CardInfo

Componente para ingresar información de la tarjeta de crédito.

### DeliveryInfo

Componente para ingresar información de la dirección de entrega.

### Summary

Componente que muestra un resumen detallado de la compra antes de finalizar.

Componente que maneja la creación y confirmación de la transacción de compra.

### FinalStatus

Componente que muestra el resultado de la transacción (exitosa o declinada).

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y envía tus pull requests. Si encuentras algún problema o tienes sugerencias, abre un issue en el repositorio.

---


