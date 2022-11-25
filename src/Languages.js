export const language = {
    esp: {
        footer_text: {
            contact: 'Contacto',
            rights: 'Todos los derechos reservados',
            social: 'Mis redes sociales'
        },
        body_text: {
            title: 'Sobre mi',
            text: 'Aca en teoria tengo que poner algo que todavia no se'
        },
        nav_text: {
            skills: 'Habilidades',
            about: 'Sobre mi'
        }

    },
    en: {
        footer_text: {
            contact: 'Contact',
            rights: 'All rights reserved',
            social: 'My Social Networks'
        },
        body_text: {
            title: 'About me',
            text: `Here in theory I have to put something that I still don't know`
        },
        nav_text: {
            skills: 'Skills',
            about: 'About me'
        }
    }
}

export const selectLanguage = obj => {
    return obj[localStorage.language]
}