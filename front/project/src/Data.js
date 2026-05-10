// 1. ИМПОРТЫ (Строго по твоей папке)
import NeZha2 from './assets/Images/NeZha2.jpg';
import Spongebob from './assets/Images/Spongebob.jpg';
import Zootopia2 from './assets/Images/Zootopia2.jpg';
import Hoppers from './assets/Images/Hoppers.jpg';
import Moana2 from './assets/Images/Moana2.jpg';
import SpiderVerse from './assets/Images/SpiderVerse.jpg';
import ToyStory5 from './assets/Images/ToyStory5.jpg';
import HailMary from './assets/Images/HailMary.jpg'
import HailMaryBack from './assets/Images/HailMaryBack.jpg'

import Avatar from './assets/Images/Avatar.jpg';
import AvatarBack from './assets/Images/AvatarBack.jpg';
import Elio from './assets/Images/Elio.jpg';
import ElioBack from './assets/Images/ElioBack.jpg';
import Interstellar from './assets/Images/Interstellar.jpg';
import InterstellarBack from './assets/Images/InterstellarBack.jpg';
import Mickey17 from './assets/Images/Mickey17.jpg';
import Mickey17Back from './assets/Images/Mickey17Back.jpg';
import Superman from './assets/Images/Superman.jpg';
import SupermanBack from './assets/Images/SupermanBack.jpg';
import TronAres from './assets/Images/TronAres.jpg';
import TronAresBack from './assets/Images/TronAresBack.jpg';

import Yearslater28 from './assets/Images/Yearslater28.jpg';
import Yearslater28Back from './assets/Images/Yearslater28Back.jpg';
import Sinners from './assets/Images/Sinners.jpg';
import SinnersBack from './assets/Images/SinnersBack.jpg';
import BlackPhone2 from './assets/Images/BlackPhone2.jpg';
import BlackPhone2Back from './assets/Images/BlackPhone2Back.jpg';
import WolfMan from './assets/Images/WolfMan.jpg';
import WolfManBack from './assets/Images/WolfManBack.jpg';
import FinalDestination from './assets/Images/FinalDestination.jpg';
import FinalDestinationBack from './assets/Images/FinalDestinationBack.jpg';

import Kpophunters from './assets/Images/Kpophunters.jpg';
import Martysuprem from './assets/Images/Martysuprem.jpg';
import TheDrama from './assets/Images/TheDrama.jpg';
import Michael from './assets/Images/Michael.jpg';
import Eternity from './assets/Images/Eternity.jpg';

export const GENRE_LIST = [
    { id: 1, name: 'Animation' },
    { id: 2, name: 'Sci-Fi' },
    { id: 3, name: 'Thriller' },
    { id: 4, name: 'Drama' }
];

export const sliderPhotos = [
{ id: 1, image: Yearslater28, position: 'object-center' },
    { id: 2, image: Avatar, position: 'object-[center_40%]' },
    { id: 3, image: Elio, position: 'object-[center_20%]' },
    { id: 4, image: Hoppers, position: 'object-center' },
    { id: 5, image: Kpophunters, position: 'object-center' },
    { id: 6, image: Martysuprem, position: 'object-[center_20%]' },
    { id: 7, image: NeZha2, position: 'object-[center_80%]' },
    { id: 8, image: HailMary, position: 'object-center' },
    { id: 9, image: Sinners, position: 'object-top' },
    { id: 10, image: TheDrama, position: 'object-top' },
    { id: 11, image: Spongebob, position: 'object-[center_20%]' },
    { id: 12, image: Zootopia2, position: 'object-center' },
];
export const allMovies = [
    // Animation
    { id: 1, image: NeZha2, genre: 'Animation', title: 'Ne Zha 2' },
    { id: 2, image: Spongebob, genre: 'Animation', title: 'SpongeBob' },
    { id: 3, image: Zootopia2, genre: 'Animation', title: 'Zootopia 2' },
    { id: 4, image: Hoppers, genre: 'Animation', title: 'Hoppers' },
    { id: 5, image: Moana2, genre: 'Animation', title: 'Moana 2' },
    { id: 6, image: SpiderVerse, genre: 'Animation', title: 'Spider-Verse' },
    { id: 7, image: ToyStory5, genre: 'Animation', title: 'Toy Story 5' },

    // Sci-Fi
    { id: 8, image: Avatar, descImage: AvatarBack, genre: 'Sci-Fi', title: 'Avatar' },
    { id: 9, image: Elio, descImage: ElioBack, genre: 'Sci-Fi', title: 'Elio' },
    { id: 10, image: Interstellar, descImage: InterstellarBack, genre: 'Sci-Fi', title: 'Interstellar' },
    { id: 11, image: Mickey17, descImage: Mickey17Back, genre: 'Sci-Fi', title: 'Mickey 17' },
    { id: 12, image: Superman, descImage: SupermanBack, genre: 'Sci-Fi', title: 'Superman' },
    { id: 13, image: TronAres, descImage: TronAresBack, genre: 'Sci-Fi', title: 'Tron: Ares' },
    { id: 14, image: HailMary, descImage: HailMaryBack, genre: 'Sci-Fi', title: 'Hail Mary'},

    // Thriller
    { id: 14, image: Yearslater28, descImage: Yearslater28Back, genre: 'Thriller', title: '28 Years Later' },
    { id: 15, image: Sinners, descImage: SinnersBack, genre: 'Thriller', title: 'Sinners' },
    { id: 16, image: BlackPhone2, descImage: BlackPhone2Back, genre: 'Thriller', title: 'Black Phone 2' },
    { id: 17, image: WolfMan, descImage: WolfManBack, genre: 'Thriller', title: 'Wolf Man' },
    { id: 18, image: FinalDestination, descImage: FinalDestinationBack, genre: 'Thriller', title: 'Final Destination' },

    // Drama
    { id: 19, image: Kpophunters, genre: 'Drama', title: 'K-Pop Hunters' },
    { id: 20, image: Martysuprem, genre: 'Drama', title: 'Marty Supreme' },
    { id: 21, image: TheDrama, genre: 'Drama', title: 'The Drama' },
    { id: 22, image: Michael, genre: 'Drama', title: 'Michael' },
    { id: 23, image: Eternity, genre: 'Drama', title: 'Eternity' }
];