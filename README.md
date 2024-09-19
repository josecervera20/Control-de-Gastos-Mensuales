# Sistema de Gestión de Gastos


Este proyecto es una aplicación web que permite a los usuarios registrar, modificar y eliminar gastos, con la opción de agregar una descripción detallada a cada gasto.

## 🚀 Características

- **Registrar gastos** con nombre, descripción y valor.
- **Alertas** cuando un gasto supera los $150 USD.
- **Modificación y eliminación** de gastos previamente registrados.
- **Cálculo y visualización automática** del total de gastos.
- **Diseño responsivo** para dispositivos móviles y pantallas de escritorio.
- **Interfaz limpia y fácil de usar**.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura básica de la página web.
- **CSS3**: Diseño y estilos responsivos con media queries.
- **JavaScript**: Lógica de la aplicación, manejo de eventos y manipulación del DOM.

## 📦 Instalación y Ejecución

1. Clona el repositorio a tu máquina local:

    ```bash
    git clone https://github.com/josecervera20/Control-de-Gastos-Mensuales.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd Control-de-Gastos-Mensuales
    ```

3. Abre el archivo `index.html` en tu navegador favorito:

    ```bash
    open index.html
    ```

## 📋 Uso

1. En la pantalla principal, ingresa el nombre del gasto, una descripción detallada y el valor correspondiente.
2. Haz clic en **"Agregar Gasto"** para registrar el gasto.
3. Si deseas modificar un gasto, haz clic en el botón **"Editar"** al lado del gasto en la lista, ajusta los valores y presiona **"Actualizar Gasto"**.
4. Para eliminar un gasto, presiona el botón **"Eliminar"**.
5. Los gastos con un valor mayor a $150 USD mostrarán una alerta de advertencia.

## 📂 Estructura del Proyecto

```lua
/project-root
│
├── /assets
│   ├── /css
│   │   └── style.css
│   ├── /img
│   │   ├── codigo.svg
│   │   ├── icon.png
│   │   └── titulo.png
│   └── /js
│       └── script.js
│
├── index.html
└── README.md
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar o agregar nuevas características al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu característica (`git checkout -b nombre-rama`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agregar nueva característica'`).
4. Sube los cambios a tu fork (`git push origin nombre-rama`).
5. Abre un Pull Request en el repositorio original.
