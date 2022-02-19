import { useEffect, useRef } from 'react';
import Carousel from './Carousel';
import {
    imageIntro1,
    imageIntro2,
    imageIntro3,
    imageCarousel1,
    imageCarousel2,
    imageCarousel3,
    imageCarousel4,
    imageCarousel5,
    imageCarousel6,
    man,
    bg,
} from './images';

function Section({ children }) {
    return <div className="bg-white py-40">{children}</div>;
}

function Header({ children }) {
    return (
        <header className="w-full h-14 fixed top-0 left-0 z-10">
            <DefaultContainer>{children}</DefaultContainer>
        </header>
    );
}

function DefaultContainer({ children }) {
    return <div className="max-w-5xl w-full mx-auto px-4">{children}</div>;
}

function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`inline-block px-7 py-3 bg-red text-white font-bold text-[1.75rem] leading-none rounded-full`}
        >
            {text}
        </button>
    );
}

function Card({ src, text }) {
    return (
        <div className="flex flex-col">
            <img src={src} alt="icon" className="w-full aspect-square mb-8" />
            <h2 className="text-center text-lg font-bold">{text}</h2>
        </div>
    );
}

function Form() {
    return (
        <form className="max-w-md w-full">
            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">姓名</p>
                <input
                    type="text"
                    placeholder="XXX"
                    className="w-full bg-gray text-input rounded-lg px-4 outline-none"
                ></input>
            </label>

            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">電話</p>
                <input
                    type="text"
                    placeholder="0123-456-789"
                    className="w-full bg-gray text-input rounded-lg px-4 outline-none"
                ></input>
            </label>
            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">電子信箱</p>
                <input
                    type="email"
                    placeholder="XXXXXX@gmail.com"
                    className="w-full bg-gray text-input rounded-lg px-4 outline-none"
                ></input>
            </label>
            <label className="block mb-12">
                <p className="flex-none text-md text-darkGray mb-2">地址</p>
                <input
                    type="text"
                    placeholder="XX市XX區XX路X段X號"
                    className="w-full bg-gray text-input rounded-lg px-4 outline-none"
                ></input>
            </label>
            <div className="text-center">
                <Button text="提交資料" />
            </div>
        </form>
    );
}

function App() {
    const refBg = useRef(null);
    function throttle(func, wait = 50) {
        let timeout;
        return function () {
            let context = this;
            let args = arguments;
            let delay = function () {
                clearTimeout(timeout);
                timeout = null;
            };
            if (!timeout) {
                func.apply(context, args);
                timeout = setTimeout(delay, wait);
            }
        };
    }

    useEffect(() => {
        const handleScroll = function () {
            if (refBg && refBg.current) {
                refBg.current.style.transform = `translateY(${(50 * window.scrollY) / document.body.scrollHeight}%)`;
            }
            if (window.scrollY > window.screen.height) console.log('header switch');
        };

        document.addEventListener('scroll', throttle(handleScroll, 20));

        return () => document.removeEventListener('scroll', throttle(handleScroll, 20));
    }, []);

    return (
        <div className="App">
            <Header>This is a Header</Header>
            <div className="wrapper bg-white pt-14">
                <div ref={refBg} className="w-full h-[100vh] absolute left-0 top-0 bg-heroImg bg-centerBottom bg-cover">
                    <div className="w-full h-full absolute left-0 top-0 bg-mask"></div>
                </div>
                <div className="h-hero">
                    <div className="w-full flex flex-col items-center absolute top-[50vh]">
                        <h1 className="text-xl text-white font-bold mb-8 ">現在開始 翻轉人生</h1>
                        <a href="#form">
                            <Button text="了解更多" />
                        </a>
                    </div>
                </div>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col items-center">
                            <h1 className="text-xl font-bold mb-12">為什麼要用?</h1>
                            <div className="flex px-8 mb-12">
                                <div className="flex-auto px-12">
                                    <Card src={imageIntro1} text="自動化" />
                                </div>
                                <div className="flex-auto px-12">
                                    <Card src={imageIntro2} text="高效率" />
                                </div>
                                <div className="flex-auto px-12">
                                    <Card src={imageIntro3} text="全方面" />
                                </div>
                            </div>
                            <a href="#form">
                                <Button text="了解更多" />
                            </a>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex">
                            <div className="flex-half">
                                <Carousel srcList={[imageCarousel1, imageCarousel2, imageCarousel3]} />
                            </div>

                            <div className="flex-half flex flex-col justify-center items-center px-4">
                                <h1 className="text-xl font-bold mb-8">大標題</h1>
                                <p className="text-md text-darkGray mb-10">
                                    副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題
                                </p>
                                <a href="#form">
                                    <Button text="了解更多" />
                                </a>
                            </div>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex">
                            <div className="flex-half flex flex-col justify-center items-center px-4">
                                <h1 className="text-xl font-bold mb-8">大標題</h1>
                                <p className="text-md text-darkGray mb-10">副標題</p>
                                <a href="#form">
                                    <Button text="了解更多" />
                                </a>
                            </div>
                            <div className="flex-half">
                                <Carousel srcList={[imageCarousel4, imageCarousel5, imageCarousel6]} />
                            </div>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col items-center" id="form">
                            <h1 className="text-xl font-bold mb-12">想了解更多?</h1>
                            <Form />
                        </div>
                    </DefaultContainer>
                </Section>
            </div>
        </div>
    );
}

export default App;
