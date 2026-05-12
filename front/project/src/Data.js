// 1. ИМПОРТЫ
import NeZha2 from './assets/Images/NeZha2.jpg';
import Spongebob from './assets/Images/Spongebob.jpg';
import Zootopia2 from './assets/Images/Zootopia2.jpg';
import Hoppers from './assets/Images/Hoppers.jpg';
import Moana2 from './assets/Images/Moana2.jpg';
import SpiderVerse from './assets/Images/SpiderVerse.jpg';
import ToyStory5 from './assets/Images/ToyStory5.jpg';
import HailMary from './assets/Images/HailMary.jpg';
import HailMaryBack from './assets/Images/HailMaryBack.jpg';

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

// 2. СПИСОК ЖАНРОВ
export const GENRE_LIST = [
    { id: 1, name: 'Мультфильмы' },
    { id: 2, name: 'Фантастика' },
    { id: 3, name: 'Триллеры' },
    { id: 4, name: 'Драмы' }
];

// 3. ФОТО ДЛЯ СЛАЙДЕРА (ГЛАВНЫЙ ЭКРАН)
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

// 4. ВСЕ ТАЙТЛЫ (ЛОКАЛИЗОВАННЫЕ)
export const allMovies = [
    // Мультфильмы
    { id: 1, image: NeZha2, genre: 'Мультфильмы', title: 'Нэчжа: Рождение дьявола 2' },
    { id: 2, image: Spongebob, genre: 'Мультфильмы', title: 'Губка Боб: Поиск квадратных штанов' },
    { id: 3, image: Zootopia2, genre: 'Мультфильмы', title: 'Зверополис 2' },
    { id: 4, image: Hoppers, genre: 'Мультфильмы', title: 'Прыгуны' },
    { id: 5, image: Moana2, genre: 'Мультфильмы', title: 'Моана 2' },
    { id: 6, image: SpiderVerse, genre: 'Мультфильмы', title: 'Человек-паук: За пределами вселенных' },
    { id: 7, image: ToyStory5, genre: 'Мультфильмы', title: 'История игрушек 5' },

    // Фантастика
    { id: 8, image: Avatar, descImage: AvatarBack, genre: 'Фантастика', title: 'Аватар: Огонь и пепел' },
    { id: 9, image: Elio, descImage: ElioBack, genre: 'Фантастика', title: 'Элио' },
    { id: 10, image: Interstellar, descImage: InterstellarBack, genre: 'Фантастика', title: 'Интерстеллар' },
    { id: 11, image: Mickey17, descImage: Mickey17Back, genre: 'Фантастика', title: 'Микки 17' },
    { id: 12, image: Superman, descImage: SupermanBack, genre: 'Фантастика', title: 'Супермен' },
    { id: 13, image: TronAres, descImage: TronAresBack, genre: 'Фантастика', title: 'Трон: Арес' },
    { id: 14, image: HailMary, descImage: HailMaryBack, genre: 'Фантастика', title: 'Проект «Аве Мария»' },

    // Триллеры
    { id: 15, image: Yearslater28, descImage: Yearslater28Back, genre: 'Триллеры', title: '28 лет спустя' },
    { id: 16, image: Sinners, descImage: SinnersBack, genre: 'Триллеры', title: 'Грешники' },
    { id: 17, image: BlackPhone2, descImage: BlackPhone2Back, genre: 'Триллеры', title: 'Черный телефон 2' },
    { id: 18, image: WolfMan, descImage: WolfManBack, genre: 'Триллеры', title: 'Человек-волк' },
    { id: 19, image: FinalDestination, descImage: FinalDestinationBack, genre: 'Триллеры', title: 'Пункт назначения: Кровные узы' },

    // Драмы
    { id: 20, image: Kpophunters, genre: 'Драмы', title: 'Охотники за K-Pop' },
    { id: 21, image: Martysuprem, genre: 'Драмы', title: 'Марти Суприм' },
    { id: 22, image: TheDrama, genre: 'Драмы', title: 'Драма' },
    { id: 23, image: Michael, genre: 'Драмы', title: 'Майкл' },
    { id: 24, image: Eternity, genre: 'Драмы', title: 'Вечность' }
];