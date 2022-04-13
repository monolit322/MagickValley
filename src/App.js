import './App.css';
import {useState} from "react";

import headerLogo from './img/logo_89.png'
import mainVideo from './img/mainBG.mp4'
import left from './img/Снимок_экрана_2021-10-04_в_16.15.10_jWoFv3o.png'
import talk from './img/talk.png'
import voice from './img/voice-acting.png'
import sync from './img/sync.png'
import dictor from './img/dictor.png'
import teacherLeft from './img/left.png'
import teacherRight from './img/right.png'
import teacherBG from './img/dots-background.jpg'
import leftTop from './img/per_2.png'
import leftBottom from './img/55454.webp'
import rightTop from './img/per_1.png'
import rightBottom from './img/MV_avatar__.webp'

//функция скрола до элемента



function App() {



    const [isRegistr, setIsRegistr] = useState(false)

    return (<div className="App relative overflow-x-hidden">
            <header className="fixed w-screen h-12 bg-purple-700 z-30">
                <div className="flex flex-col items-center">
                    <div className="lg:w-full xl:w-10/12 2xl:w-8/12 flex lg:justify-between">
                        <div className="left flex">
                            <img className="h-12" src={headerLogo} alt=""/>
                            <div
                                className="ml-8 flex items-center space-x-3 opacity-0 lg:opacity-100"
                            >
                                <a
                                    className="border rounded-full text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:text-purple-600"
                                    href="/#"
                                ><i className="fa-brands fa-whatsapp"/></a>
                                <a
                                    className="border rounded-full text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:text-purple-600"
                                    href="/#"
                                ><i className="fa-brands fa-instagram"/></a>
                                <a
                                    className="border rounded-full text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:text-purple-600"
                                    href="/#"
                                ><i className="fa-brands fa-facebook-f"/></a>
                                <div
                                    className="flex items-center text-gray-200 text-xl font-medium duration-500 hover:text-white cursor-pointer"
                                >
                                    <a
                                        className="border rounded-full text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:text-purple-600 mr-2"
                                        href="tel: +79675550205"
                                    ><i className="fa-solid fa-phone"/>
                                    </a>
                                    <a href="tel: +79675550205">+79675550205</a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="right flex items-center text-gray-200 font-medium text-xl space-x-3 opacity-0 lg:opacity-100"
                        >
                            <a className="duration-500 hover:text-white" href="#why">Почему мы</a>
                            <a className="duration-500 hover:text-white" href="#reviews">Отзывы</a>
                            <a className="duration-500 hover:text-white" href="#questions">Вопросы</a>
                            <div
                                className="flex items-center text-gray-200 text-xl font-medium duration-500 hover:text-white cursor-pointer"
                            >
                                <a
                                    className="border rounded-full text-white text-xl w-8 h-8 flex items-center justify-center hover:bg-white hover:text-purple-600 mr-2 ml-4"
                                    href="/#"
                                ><i className="fa-solid fa-right-to-bracket"/>
                                </a>
                                <a href="#registration">Личный кабинет</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="burgerMenu w-8 space-y-1 lg:opacity-0 flex flex-col absolute right-0 mt-4 mr-8 lg:pointer-events-none"
                    >
                        <div className="border"/>
                        <div className="border"/>
                        <div className="border"/>
                    </div>
                </div>
            </header>

            {/*mainSection*/}

            <div id="registration" className="main w-screen h-screen">
                <video
                    className="w-full h-full object-cover -z-10 fixed"
                    src={mainVideo}
                    autoPlay
                    loop
                    preload="auto"
                    muted
                />
                <div className="flex flex-col items-center">
                    <div
                        className="content absolute top-0 z-20 flex justify-between sm:w-full xl:w-10/12 2xl:w-8/12 sm:mt-40 sm:items-center lg:items-start lg:mt-48"
                    >
                        <div className="left space-y-8 w-96">
                            <div className="text w-full text-white sm:text-center lg:text-left">
                                <h1 className="text-2xl font-bold mb-4">
                                    Учим английский, озвучивая мультфильмы
                                </h1>
                                <h2 className="font-medium text-xl">
                                    Совместное озвучивание мультфильмов погружает в языковую среду,
                                    формирует разговорный навык и правильное произношение
                                </h2>
                            </div>
                            <div className="photo w-full h-56 overflow-hidden rounded-3xl">
                                <img
                                    className="duration-200 hover:scale-110 bg-auto h-full relative"
                                    src={left}
                                    alt=""
                                />
                                <div className="text w-96 text-white absolute bottom-0 mb-8 ml-4">
                                    <h3 className="text-md font-medium">Как проходят уроки</h3>
                                    <h4 className="text-xs font-medium">
                                        Почему дети в восторге от Magic Valley
                                    </h4>
                                </div>
                            </div>
                            <div className="absolute space-x-3">
                                <a
                                    className="text-md font-medium px-6 py-3 rounded-lg bg-purple-600 duration-200 hover:bg-purple-500 text-white"
                                    href="#why"
                                >Почему мы?</a
                                >
                                <a
                                    className="text-md font-medium px-6 py-3 rounded-lg bg-yellow-500 duration-200 hover:bg-yellow-400 text-white"
                                    href="#teachers"
                                >Выбрать учителя</a
                                >
                            </div>
                        </div>
                        {isRegistr ? <div className="absolute flex flex-col right-0 h-96 w-64 mt-32">
                            <div className="w-full h-full bg-white rounded-xl">
                                <div className="font-bold text-2xl mt-2 text-center">Регистрация</div>
                                <div className="mx-2 space-y-4 mt-4">
                                    <div className="email flex flex-col">
                                        <label className="text-lg font-medium" htmlFor="email">Email</label>
                                        <input
                                            className="focus:outline-none focus:ring-2 px-4 py-2 bg-gray-100 rounded-md focus:ring-yellow-500 focus:ring-yellow-500 focus:bg-white text-gray-900 bg-gray-100"
                                            type="email" id="email" placeholder="Ваш email"/>
                                    </div>
                                    <div className="password flex flex-col">
                                        <label className="text-lg font-medium" htmlFor="password">Пароль</label>
                                        <input
                                            className="focus:outline-none focus:ring-2 px-4 py-2 bg-gray-100 rounded-md focus:ring-yellow-500 focus:ring-yellow-500 focus:bg-white text-gray-900 bg-gray-100"
                                            type="password" id="password" placeholder="********"/>
                                    </div>
                                    <div className="repeatPassword flex flex-col">
                                        <label className="text-lg font-medium" htmlFor="password">Повторите
                                            пароль</label>
                                        <input
                                            className="focus:outline-none focus:ring-2 px-4 py-2 bg-gray-100 rounded-md focus:ring-yellow-500 focus:ring-yellow-500 focus:bg-white text-gray-900 bg-gray-100"
                                            type="password" id="password" placeholder="********"/>
                                    </div>
                                    <button
                                        disabled
                                        className=" w-full py-2 text-white font-medium rounded-md bg-yellow-500 text-center">Зарегестрироваться
                                    </button>
                                </div>
                            </div>
                            <div onClick={() => setIsRegistr(!isRegistr)}
                                 className="text-white text-center font-medium cursor-pointer">
                                Уже зарегестрированы?
                            </div>
                        </div> : <div className="w-60 h-80 flex flex-col mt-32">
                            <div className="right w-full h-full bg-white rounded-xl">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="font-bold text-2xl mt-8">Вход</div>
                                    <div className="ml-2 space-y-3">
                                        <div className="email">
                                            <label className="text-lg font-medium" htmlFor="email">Email</label>
                                            <input
                                                type="email "
                                                id="email "
                                                placeholder="Ваш email "
                                                className="focus:outline-none focus:border-2 px-4 py-2 bg-gray-100 rounded-md focus:border-yellow-500 focus:border-yellow-500 focus:bg-white text-gray-900 bg-gray-100"
                                            />
                                        </div>
                                        <div className="password">
                                            <label className="text-lg font-medium" htmlFor="password"
                                            >Пароль</label
                                            >
                                            <input
                                                type="password "
                                                placeholder="********"
                                                className="focus:outline-none focus:border-2 px-4 py-2 bg-gray-100 rounded-md focus:border-yellow-500 focus:border-yellow-500 focus:bg-white text-gray-900 bg-gray-100"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="button rounded-md bg-yellow-500 text-center absolute bottom-10"
                                    >
                                        <button
                                            className="px-20 py-2 text-white font-medium focus:bg-yellow-600"
                                            disabled
                                        >
                                            Войти
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => setIsRegistr(!isRegistr)}
                                 className="text-white text-center font-medium cursor-pointer">
                                Новый пользователь?
                            </div>
                        </div>}
                    </div>
                </div>
            </div>

            {/*WHITE LINE*/}

            <div className="whiteLine bg-white w-screen h-40 flex flex-col items-center absolute">
                <div className="w-8/12 h-full">
                    <div className="circle w-full flex justify-between -mt-12">
                        <div className="mx-auto flex flex-col items-center">
                            <div className="flex flex-col mx-auto">
                                <div
                                    className="h-24 w-24 rounded-full bg-orange-400 flex items-center justify-center text-white"
                                >
                                    <i className="fa-solid fa-graduation-cap text-6xl"/>
                                </div>
                            </div>
                            <div className="font-bold text-3xl">2+</div>
                            <span className="font-medium text-xl"> профессиональных учителей </span>
                        </div>
                        <div className="mx-auto flex flex-col items-center">
                            <div className="flex flex-col mx-auto">
                                <div
                                    className="h-24 w-24 rounded-full bg-orange-400 flex items-center justify-center text-white"
                                >
                                    <i className="fa-solid fa-face-smile text-6xl"/>
                                </div>
                            </div>
                            <div className="font-bold text-3xl">4+</div>
                            <span className="font-medium text-xl"> счастливых учеников </span>
                        </div>
                        <div className="mx-auto flex flex-col items-center">
                            <div className="flex flex-col mx-auto">
                                <div
                                    className="h-24 w-24 rounded-full bg-orange-400 flex items-center justify-center text-white"
                                >
                                    <i className="fa-solid fa-comments text-6xl"/>
                                </div>
                            </div>
                            <div className="font-bold text-3xl">96+</div>
                            <span className="font-medium text-xl"> увлекательных сценок </span>
                        </div>
                    </div>
                </div>
            </div>

            {/*PURPLE LINE*/}

            <div id="why" className="w-screen h-[600px] bg-purple-700 mt-40 text-white absolute">
                <div className="flex flex-col items-center pt-10">
                    <div className="title text-2xl font-bold">Почему мы?</div>
                    <div className="border-2 w-32 mt-4 rounded-md"/>
                </div>
                <div className="flex flex-col items-center rel">
                    <div className="mt-10 w-8/12 h-12 flex justify-between">
                        <div className="left space-y-16">
                            <div className="top flex w-11/12">
                                <img className="w-16 h-16 mr-4" src={talk} alt=""/>
                                <div className="space-y-2">
                                    <div className="title text-yellow-400 text-xl font-bold">
                                        Актёрские техники запоминания
                                    </div>
                                    <div className="text-md font-medium">
                                        Cторителлинг - информация легко усваивается в контексте
                                        интересной истории. Задействуем эмоционально-образное
                                        восприятие. Интенсивная языковая практика в живых диалогах –
                                        озвучиваем мультфильмы на английском.
                                    </div>
                                </div>
                            </div>
                            <div className="bottom flex w-11/12">
                                <img className="w-16 h-16 mr-4" src={voice} alt=""/>
                                <div className="space-y-2">
                                    <div className="title text-yellow-400 text-xl font-bold">
                                        Дикторская озвучка слов
                                    </div>
                                    <div className="text-md font-medium">
                                        Тренируем понимание английского языка на слух. Оригинальные
                                        озвучки дикторами с британским и американским акцентами
                                        улучшают восприятие на слух.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right space-y-16">
                            <div className="top flex w-11/12">
                                <img className="w-16 h-16 mr-4" src={sync} alt=""/>
                                <div className="space-y-2">
                                    <div className="title text-yellow-400 text-xl font-bold">
                                        Мгновенная синхронизация действий
                                    </div>
                                    <div className="text-md font-medium">
                                        Процесс выполнения упражнений, автопроверка ответов или
                                        совместное прослушивание аудиозаписей происходит в реальном
                                        времени. Ваш педагог наблюдает, сопровождает и направляет,
                                        словно находится рядом.
                                    </div>
                                </div>
                            </div>
                            <div className="bottom flex w-11/12">
                                <img className="w-16 h-16 mr-4" src={dictor} alt=""/>
                                <div className="space-y-2">
                                    <div className="title text-yellow-400 text-xl font-bold">
                                        Мультфильм в собственной озвучке
                                    </div>
                                    <div className="text-md font-medium">
                                        Участники команды распределяют роли и озвучивают мультфильмы,
                                        а сразу после завершения озвученной сцены получают готовый
                                        мультфильм!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons absolute bottom-0 mb-12">
                        <div className="space-x-4 font-medium">
                            <a className="border px-4 py-2 rounded-md hover:border-yellow-500 hover:bg-yellow-500"
                               href="#teachers">Выбрать
                                учителя</a>
                            <a className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400" href="#registration">Зарегестрироваться
                                бесплатно</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*TEACHERS*/}

            <div id="teachers" className="mt-[760px] h-2/4 w-screen absolute">
                <div className="h-full w-full overflow-hidden">
                    <img className="-mt-12 scale-110" src={teacherBG} alt=""/>
                </div>
                <div
                    className="w-full h-full h-full flex flex-col items-center absolute top-0"
                >
                    <div className="w-1/2 h-full space-y-12">
                        <div className="title flex flex-col items-center mt-8 space-y-4">
                            <div className="font-bold text-2xl">Наши учителя</div>
                            <div className="border-2 w-28 border-black rounded-xl"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="left w-96 h-72 rounded-3xl overflow-hidden">
                                <img
                                    className="h-full w-full duration-200 hover:scale-110"
                                    src={teacherLeft}
                                    alt=""
                                />
                            </div>
                            <div className="right w-96 h-72 rounded-3xl overflow-hidden">
                                <img
                                    className="h-full w-full duration-200 hover:scale-110"
                                    src={teacherRight}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*READY?*/}

            <div className="h-48 w-screen absolute mt-[1230px] flex flex-col items-center">
                <div className="container h-full 2xl:w-8/12">
                    <div className="text-white h-full items-center flex justify-between">
                        <div className="text">
                            <div className="title text-2xl font-bold">Готовы начать обучение вместе с нами?</div>
                            <div className="text-lg font-medium">Зарегистрируйтесь бесплатно и получите пробный доступ
                                ко всей библиотеке мультфильмов
                            </div>
                        </div>
                        <a href="#registration"
                           className="button px-5 py-3 bg-purple-500 rounded-md font-medium hover:bg-purple-400">Попробовать
                            бесплатно</a>
                    </div>
                </div>
            </div>

            {/*REVIEWS*/}

            <div id="reviews"
                 className="h-full w-screen mt-[1400px] bg-purple-700 absolute flex flex-col items-center">
                <div className="h-full w-full 2xl:w-8/12 relative">
                    <div className="text-white text-2xl font-bold flex flex-col items-center mt-8 space-y-4">
                        <div>Отзывы</div>
                        <div className="border-2 w-28 rounded-md"/>
                    </div>
                    <div className="mt-12 w-full h-3/4 mx-auto flex justify-between space-x-24">
                        <div className="h-full w-2/4 space-y-16">
                            <div className="left bg-white w-full h-2/5 rounded-3xl space-y-4">
                                <div className="top pt-4 pl-4 flex items-center">
                                    <img className="rounded-full h-20 w-20" src={leftTop} alt=""/>
                                    <div className="intro ml-4">
                                        <div className="title text-xl font-bold">Екатерина Тихоновская</div>
                                        <div className="font-bold">#</div>
                                    </div>
                                </div>
                                <div className="bottom mx-4 text-md font-medium">
                                    Очень довольна сервисом Magic Valley! Видео отличного качества, классная подборка
                                    мультфильмов. Ребенок очень рад, а я с каждым днем замечаю, что он все лучше говорит
                                    по-английски. По образованию практикующий репетитор, и оценила, что тут работают
                                    очень внимательные педагоги.
                                </div>
                            </div>
                            <div className="bottom bg-white w-full h-2/5 rounded-3xl space-y-4">
                                <div className="top pt-4 pl-4 flex items-center">
                                    <img className="rounded-full h-20 w-20" src={leftBottom} alt=""/>
                                    <div className="intro ml-4">
                                        <div className="title text-xl font-bold">Екатерина Тихоновская</div>
                                        <div className="font-bold">#</div>
                                    </div>
                                </div>
                                <div className="bottom mx-4 text-md font-medium">
                                    Сегодня мы прошли пробное обучение. Ребенку ОЧЕНЬ понравилось, хочет и дальше
                                    продолжать обучение. Появился настрой учиться, чего не наблюдала раньше.
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-2/4 space-y-16">
                            <div className="bg-white w-full h-2/5 rounded-3xl space-y-1">
                                <div className="top pt-4 pl-4 flex items-center">
                                    <img className="rounded-full h-20 w-20" src={rightTop} alt=""/>
                                    <div className="intro ml-4">
                                        <div className="title text-xl font-bold">Екатерина Тихоновская</div>
                                        <div className="font-bold">#</div>
                                    </div>
                                </div>
                                <div className="bottom mx-4 text-md font-medium">
                                    Ребенок изучает английский уже 3 месяца. На сайте Magic Valley я нашел интересную
                                    подборку мультфильмов, которые помогают в обучении. Просмотр ярких сцен помогает
                                    улучшать понимание на слух и запоминать, ассоциативная связь очень хорошо работает -
                                    словарный запас увеличивается с каждым днем. Желаю, чтобы эта платформа расширялась
                                    с каждым днем, а количество и качество контента только улучшались!
                                </div>
                            </div>
                            <div className="bg-white w-full h-2/5 rounded-3xl space-y-4">
                                <div className="top pt-4 pl-4 flex items-center">
                                    <img className="rounded-full h-20 w-20" src={rightBottom} alt=""/>
                                    <div className="intro ml-4">
                                        <div className="title text-xl font-bold">Екатерина Тихоновская</div>
                                        <div className="font-bold">#</div>
                                    </div>
                                </div>
                                <div className="bottom mx-4 text-md font-medium">
                                    Даже и не предполагал, что смогу найти подход к моему сыну Тимофею и убедить его,
                                    сидеть за английским. Уже 2 месяца, ровно по плану, мы садимся и проходим задания,
                                    без уговоров и ультиматумов. Спасибо вам!!!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons flex space-x-3 absolute bottom-0 mb-12">
                    <div
                        className="leftButton font-medium border-2 rounded-md px-4 py-2 text-white hover:bg-yellow-500 hover:border-yellow-500 cursor-pointer">Показать
                        ещё
                    </div>
                    <div
                        className="rightButton font-medium bg-yellow-500 rounded-md px-4 py-2 text-white hover:bg-yellow-400 cursor-pointer">Написать
                        отзыв
                    </div>
                </div>
            </div>

            {/*frequent questions */}

            <div id="questions"
                 className="absolute w-full h-2/4 mt-[2338px] overflow-hidden flex flex-col items-center">
                <img className="h-full w-full object-cover scale-110 relative" src={teacherBG} alt=""/>
                <div className="h-full w-8/12 absolute top-0 flex flex-col items-center space-y-8">
                    <div className="text space-y-2 flex flex-col items-center mt-8">
                        <div className="title text-2xl font-bold">Частые вопросы</div>
                        <div className="border-2 border-black rounded-md w-28"/>
                    </div>
                    <div className="flex space-x-8">
                        <button
                            className="space-y-4 flex flex-col items-center justify-center w-64 h-64 bg-purple-500 rounded-3xl opacity-70 hover:opacity-90 focus:opacity-100 active:opacity-100">
                            <i className="fa-solid fa-wallet text-white text-5xl"/>
                            <span className="text-white font-medium text-lg">Оплата</span>
                        </button>
                        <button
                            className="space-y-4 flex flex-col items-center justify-center w-64 h-64 bg-purple-500 rounded-3xl opacity-70 hover:opacity-90 focus:opacity-100 active:opacity-100">
                            <i className="fa-solid fa-user-graduate text-white text-5xl"/>
                            <span className="text-white font-medium text-lg">Процесс обучения</span>
                        </button>
                    </div>
                    <div className="w-full">
                        <details className="w-full border-2 border-purple-500 active:border-b-2 rounded-md">
                            <summary
                                className="bg-purple-500 pl-2 py-2 text-white font-medium text-lg cursor-pointer">Как
                                производиться оплата?
                            </summary>
                            <span className="pl-2">..</span>
                        </details>
                    </div>
                </div>
            </div>

            {/*FOOTER*/}

            <footer className="flex flex-col items-center w-screen h-1/3 bg-purple-700 absolute mt-[2808px]">
                <div className="w-8/12 flex justify-between mt-10">
                    <div>
                        <ul className="w-40 space-y-2 font-medium text-lg text-gray-200 hover:text-white">
                            <li><a href="#why">Почему мы</a></li>
                            <li><a href="#reviews">Отзывы</a></li>
                            <li><a href="/#">Вопросы</a></li>
                            <li><a href="/#">Правила сервиса</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <img className="h-12" src={headerLogo} alt=""/>
                        <span className="font-bold text-white text-2xl text-center">Учим английский, озвучивая мультфильмы</span>
                        <span className="text-white font-medium text-base text-center">Совместное озвучивание мультфильмов погружает в языковую среду, формирует разговорный навык и правильное произношение</span>
                        <span
                            className="text-white font-medium text-base">©2022 Copyright: play.magicvalleyschool.ru</span>
                    </div>
                    <div className="w-40 h-full space-y-2">
                        <button className="text-white w-full h-8 bg-orange-400 rounded-md space-x-2"><a href="tel: +79675550205"><i
                            className="fa-solid fa-phone"/> <span>Позвонить</span></a></button>
                        <button className="text-white w-full h-8 bg-orange-400 rounded-md space-x-2"><a href="/#"><i
                            className="fa-brands fa-whatsapp"/> <span>WhatsApp</span></a></button>
                        <button className="text-white w-full h-8 bg-orange-400 rounded-md space-x-2"><a href="/#"><i
                            className="fa-brands fa-instagram"/> <span>Instagram</span></a></button>
                        <button className="text-white w-full h-8 bg-orange-400 rounded-md space-x-2"><a href="/#"><i
                            className="fa-brands fa-facebook-f"/> <span>Facebook</span></a></button>
                    </div>
                </div>
            </footer>

        </div>
    );
}



export default App;



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", block: "start"
        })
    })
}