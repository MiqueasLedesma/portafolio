export const language = {
    esp: {
        footer_text: {
            contact: 'Contacto',
            rights: 'Todos los derechos reservados',
            social: 'Mis redes sociales'
        },
        body_text: {
            title: `Hola, soy Miqueas Ledesma`,
            text: 'Un desarrollador full stack en constante formación, recientemente finalice el bootcamp soy Henry donde realice proyectos tanto grupales como individuales.'
        },
        nav_text: {
            skills: 'Habilidades',
            about: 'Sobre mi',
            proyects: 'Proyectos',
            contact: 'Contacto'
        },
        proyects_text: 'Proyectos',
        skills_text: 'Habilidades',
        contact_text: {
            title:'Contacto',
            name: 'Nombre',
            message: 'Mensaje'
        }

    },
    en: {
        footer_text: {
            contact: 'Contact',
            rights: 'All rights reserved',
            social: 'My Social Networks'
        },
        body_text: {
            title: `Hi, I'm Miqueas Ledesma`,
            text: `A full stack developer in constant training, he recently finished the I'm Henry bootcamp where he carried out both group and individual projects.`
        },
        nav_text: {
            skills: 'Skills',
            about: 'About me',
            proyects: 'Proyects',
            contact: 'Contact'
        },
        proyects_text: 'Proyects',
        skills_text: 'Skills',
        contact_text: {
            title:'Contact',
            name: 'Name',
            message: 'Message'
        }
    }
}

export const selectLanguage = obj => {
    if (localStorage?.language) return obj[localStorage.language]
    return obj.en
};


