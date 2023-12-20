import { ReactElement } from "react";
import CardItem from "../cardsScreen/cardsScreen";
import search from "../assets/images/ic_search.svg";
import pharmacy from "../assets/images/ic_pharmacy.svg";
import consultation from "../assets/images/ic_consultation.svg";
import details from "../assets/images/ic_details.svg";
import emergency from "../assets/images/ic_emergency.svg";
import tracking from "../assets/images/ic_tracking.svg";

interface CardItem {
    image: string,
    title: string,
    description: string,
    button?: ReactElement,
}

const servicesGridCards: CardItem[] = [
    {
        image: search,
        title: 'Search doctor',
        description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
    },
    {
        image: pharmacy,
        title: 'Online pharmacy',
        description: 'Buy  your medicines with our mobile application with a simple delivery system'
    },
    {
        image: consultation,
        title: 'Consultation',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        image: details,
        title: 'Details info',
        description: 'Free consultation with our trusted doctors and get the best recomendations'
    },
    {
        image: emergency,
        title: 'Emergency care',
        description: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
    },
    {
        image: tracking,
        title: 'Tracking',
        description: 'Track and save your medical history and health data '
    },
];

export default servicesGridCards;