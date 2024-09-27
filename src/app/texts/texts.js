const title = "Jugos Sofi";
const email = "yennyleonm@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573157018821"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Jugos Sofi, somos tu lugar favorito para disfrutar de un delicioso jugo de naranja, tinto y aromática de frutas. Nuestra misión es ofrecer dulzura y frescura al instante, brindándote bebidas que revitalizan y satisfacen.",
        description2: "Cada jugo en Jugos Sofi está preparado con naranjas de la más alta calidad, seleccionadas para garantizar un sabor excepcional en cada sorbo. Nos esforzamos por ofrecer un servicio amigable y eficiente, haciendo que cada visita sea una experiencia agradable, asegurando que disfrutes al máximo de nuestras bebidas.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Dulzura y frescura al instante.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565654442562",
        instagram: "https://www.instagram.com", // Link base al no estar especificado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
