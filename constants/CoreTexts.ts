import { BriefcaseMedical, Globe, Headset, LucideIcon, Mail, MapPin, Phone, Smile, Stethoscope } from "lucide-react";

export interface BodyPoint {
    title: string;
    subTitle: string;
    icon: LucideIcon;
}

export interface BodyContent {
    image: string;
    title: string;
    subTitle: string;
    points: BodyPoint[];
    reversed: boolean;
}

export interface TeamMember {
    title: string;
    subTitle: string;
    image: string;
}

export interface CompanyDetails {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface ContactPoint {
    title: string;
    subTitle: string;
    data: string;
    icon: LucideIcon;
}

export interface ContactUs {
    title: string;
    subTitle: string;
    points: ContactPoint[];
}

export interface ServicesPage {
    title: string;
    subTitle: string;
}

export interface Configs {
    header: {
        title: string;
        subTitle: string;
    };
    body: BodyContent[];
    teamMembers: TeamMember[];
    companyDetails: CompanyDetails;
    contactUs: ContactUs;
    servicesPage: ServicesPage;
}


export const configs: Configs = {
    header: {
        title: "Home Physiotherapy Services - Your Health at Home Comfort",
        subTitle: "Our medical services offer home physiotherapy, focusing on improving health and well-being in a comfortable environment. Book your session now to experience healthcare in the comfort of your home."
    },
    body: [
        {
            reversed: false,
            image: "https://onerehab.com/wp-content/uploads/2022/12/Cupping-Therpay-1024x768.png",
            title: 'Natural Therapy Services for Health and Well-being Enhancement',
            subTitle: "Enjoy the experience of natural therapy in the comfort of your home with our customized services. We provide effective solutions to improve health and increase mobility. Book now to enjoy the benefits of healthcare without leaving home.",
            points: [
                {
                    title: "Home Treatment Comfort",
                    subTitle: "We offer specialized medical care in the comfort of your home, providing patients and clients with a comfortable and highly private experience without the need for travel.",
                    icon: Smile,
                },
                {
                    title: "Professional and Qualified Team",
                    subTitle: "Our team of professional and qualified physical therapy specialists is committed to providing high-quality services to meet customer needs.",
                    icon: Stethoscope,
                },
                {
                    title: "Easy Online Booking",
                    subTitle: "Our website allows customers to easily book therapy sessions anytime through a simple and user-friendly booking system.",
                    icon: Globe,
                },
            ]
        },
        {
            reversed: true,
            image: "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
            title: "Safe and Comfortable Physiotherapy at Your Fingertips",
            subTitle: "Enjoy a unique experience with our home medical services. We offer physiotherapy with a professional and qualified team, allowing you to easily book your sessions online. Choose wellness safely and comfortably at home with tailored services and continuous communication to ensure health and well-being improvement.",
            points: [
                {
                    title: "Customized Services",
                    subTitle: "We offer tailored packages to suit the needs of each individual, designing therapy programs to improve overall health and achieve individual goals.",
                    icon: BriefcaseMedical,
                },
                {
                    title: "Continuous Communication",
                    subTitle: "We are committed to providing high-quality service, offering regular and continuous communication with clients to ensure their satisfaction and provide necessary support throughout the treatment period.",
                    icon: Headset,
                },

            ]
        },
    ],
    teamMembers: [
        {
            title: "Mahmoud Khalid",
            subTitle: "Website Designer",
            image: "https://cdn-icons-png.flaticon.com/512/3121/3121372.png",
        },
        {
            title: "Unknown Person",
            subTitle: "Team Leader",
            image: "https://images.inc.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
        },
        {
            title: "Another Person",
            subTitle: "Doctor",
            image: "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
        },
    ],
    companyDetails: {
        name: "Medical",
        email: "info@medical.com",
        phone: "+20 12 345 678 99",
        address: "Engineers, 86 Shahab Street, Engineers, Giza - Off Nile Street",
    },
    contactUs: {
        title: "Welcome to Medical",
        subTitle: "We appreciate your communication with us and welcome any inquiries or comments you may have. You can use the form below to contact our team, and we will respond to you as soon as possible.",
        points: [
            {
                title: "Email",
                subTitle: "You can contact us via email",
                data: "info@medical.com",
                icon: Mail ,
            },
            {
                title: "Office Address",
                subTitle: "Our office is in New Cairo",
                data: "Engineers, 86 Shahab Street, Engineers, Giza - Off Nile Street",
                icon: MapPin ,
            },
            {
                title: "Phone Number",
                subTitle: "Communication via WhatsApp and for emergency calls only",
                data: "+20 12 345 678 99",
                icon: Phone,
            },
        ]
    },
    servicesPage: {
        title: "Comprehensive Home Physiotherapy Experience",
        subTitle: "Enjoy a range of home medical services at the Wellness Center, where we offer physiotherapy with a professional and qualified team. Choose from customized packages, and easily book your sessions online. A unique experience to enhance health and well-being in the peace of your home.",

    }
}
