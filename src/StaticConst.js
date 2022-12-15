import css_logo from './images/css-logo.svg';
import html_logo from './images/html-logo.svg';
import styled_logo from './images/styled-logo.svg';
import react_logo from './images/react-logo.svg';
import redux_logo from './images/redux-logo.svg';
import node_logo from './images/nodejs-logo.svg';
import postgres_logo from './images/postgresql-logo.svg';
import sequelize_logo from './images/sequelize-logo.svg';
import bootstrap_logo from './images/bootstrap-logo.svg';
import js_logo from './images/js-logo.svg';
import image1 from './images/appvg.png';
import image2 from './images/apptech.png';


export const flipCardInfo = [
    {
        text: 'HTML',
        img: html_logo
    },
    {
        text: 'CSS',
        img: css_logo
    },
    {
        text: 'JavaScript',
        img: js_logo
    },
    {
        text: 'Bootstrap',
        img: bootstrap_logo
    },
    {
        text: 'React',
        img: react_logo
    },
    {
        text: 'Redux',
        img: redux_logo
    },
    {
        text: 'Styled-Comp',
        img: styled_logo
    },
    {
        text: 'Postgres',
        img: postgres_logo
    },
    {
        text: 'Node.js',
        img: node_logo
    },
    {
        text: 'Sequelize',
        img: sequelize_logo
    },
];

export const proyects = {
    esp: [
        {
            left: true,
            github: 'https://github.com/ricardoyegros/PF-Frontend',
            title: 'TechStore',
            image: image2,
            description: 'Proyecto final realizado en equipo durante el bootcamp de soy Henry, es un E-commerce de hardware para computadoras',
            list: [
                'Filtrar los productos por categorías y marcas de forma combinada así como también elegir como ordenar los productos',
                'Sección de comentarios',
                'Geo-localización',
                'Autenticación por Google',
                'Panel de usuario y de administrador',
                'Sección de favoritos(wishlist)',
                'Carrito de compras con persistencia de datos',
                'Pasarela de pagos(MercadoPago)',
                'Envió de emails de confirmacion'
            ],
            subtitle: 'Tecnologias Utilizadas:',
            tecnologys: 'PostgreSQL | Sequelize | Express | Node.js | React | Redux | Material-UI | Bootstrap',
            url: 'https://techstore-ruby.vercel.app/'
        },
        {
            github: 'https://github.com/MiqueasLedesma/Front-PI',
            left: false,
            title: 'App-Videogames',
            image: image1,
            description: 'Es mi proyecto individual realizado en solitario durante el bootcamp de soy Henry con temática de videojuegos.',
            list: [
                'Filtrado por rating, genero e incluso elegir el modo en que se ordenan al renderizarse en pantalla',
                'Posibilidad de buscar usando un search-bar',
                'Formulario(controlado) para agregar videojuegos directamente a la base de datos'
            ],
            subtitle: 'Tecnologías utilizadas:',
            tecnologys: 'React | Redux | Styled-component |Nodejs | Express | Sequelize | PostgreSQL',
            url: 'https://videogamespi-miqueas.vercel.app/'
        }
    ],
    en: [
        {
            left: true,
            github: 'https://github.com/ricardoyegros/PF-Frontend',
            title: 'TechStore',
            image: image2,
            description: 'Final project carried out as a team during "Soy Henry" bootcamp, it is an E-commerce of computer hardware.',
            list: [
                'Filter the products by categories and brands in a combined way as well as choose how to order the products',
                'Comments section',
                'Geo-location',
                'Authentication by Google',
                'User and administrator panel',
                'Favorites section (wishlist)',
                'Shopping cart with data persistence',
                'Payment gateway (MercadoPago)',
                'Sending confirmation emails'
            ],
            subtitle: 'Used technology:',
            tecnologys: 'PostgreSQL | Sequelize | Express | Node.js | React | Redux | Material-UI | Bootstrap',
            url: 'https://techstore-ruby.vercel.app/'
        },
        {
            left: false,
            github: 'https://github.com/MiqueasLedesma/Front-PI',
            title: 'App-Videogames',
            image: image1,
            description: `It's my individual project done alone during "Soy Henry" bootcamp videogame-themed bootcamp.`,
            list: [
                'Filtered by rating, gender and even choose the way they are ordered when rendered on the screen',
                'Ability to search using a search-bar',
                'Form (controlled) to add video games directly to the database'
            ],
            subtitle: 'Used technology:',
            tecnologys: 'React | Redux | Styled-component |Nodejs | Express | Sequelize | PostgreSQL',
            url: 'https://videogamespi-miqueas.vercel.app/'
        }
    ]
}

export const myTheme = {
    primary: '#213f6d',
    secundary: '#ffffff',
    textPrimary: '#e2e2e2',
    textSecundary: '#120907',
    backgroundPrimary: '#0e1b36',
    backgroundSecundary: '#beceff',
    proyectPrimary: '#124860',
    proyectSecundary: '#f3eae8',
    mixPrimary: '#0e455f',
    mixSecundary: '#81b1e5'
};