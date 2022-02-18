import { useRef } from 'react';
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

function Section({ children, top }) {
    return <div className={(top ? 'pt-[40vh] pb-48' : 'py-48') + ' px-4'}>{children}</div>;
}

function Header({ children }) {
    return (
        <header className="w-full h-14 fixed top-0 left-0 z-10">
            <DefaultContainer>{children}</DefaultContainer>
        </header>
    );
}

function DefaultContainer({ children }) {
    return <div className="max-w-5xl mx-auto">{children}</div>;
}

function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="inline-block px-7 py-3 bg-cyan text-white font-bold text-[1.75rem] leading-none rounded-full"
        >
            {text}
        </button>
    );
}

function Card({ src, text }) {
    return (
        <div className="flex flex-col">
            <img src={src} alt="icon" className="w-full aspect-square mb-8" />
            <h1 className="text-center text-lg font-bold">{text}</h1>
        </div>
    );
}

function Form() {
    return (
        <form className="max-w-md w-full">
            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">姓名</p>
                <input type="text" placeholder="XXX" className="w-full bg-gray text-input rounded-lg px-4"></input>
            </label>

            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">電話</p>
                <input
                    type="text"
                    placeholder="0123-456-789"
                    className="w-full bg-gray text-input rounded-lg px-4"
                ></input>
            </label>
            <label className="block mb-6">
                <p className="flex-none text-md text-darkGray mb-2">電子信箱</p>
                <input
                    type="email"
                    placeholder="XXXXXX@gmail.com"
                    className="w-full bg-gray text-input rounded-lg px-4"
                ></input>
            </label>
            <label className="block mb-8">
                <p className="flex-none text-md text-darkGray mb-2">地址</p>
                <input
                    type="text"
                    placeholder="XX市XX區XX路X段X號"
                    className="w-full bg-gray text-input rounded-lg px-4"
                ></input>
            </label>
            <div className="text-center">
                <Button text="提交資料" />
            </div>
        </form>
    );
}

function App() {
    return (
        <div className="App">
            <Header>This is a Header</Header>
            <div className="wrapper bg-white pt-14">
                <img src={bg} alt="bg" className="w-full fixed left-0 top-0" />
                {/* <img src={man} alt="man" className="h-screen fixed right-[10vw] bottom-0" /> */}
                <DefaultContainer>
                    <Section top>
                        <h1 className="text-lg font-bold mb-8 ">現在開始 翻轉人生</h1>
                        <a href="#form">
                            <Button text="了解更多" />
                        </a>
                    </Section>
                    <Section>
                        <div className="flex">
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
                    </Section>
                    <Section>
                        <div className="flex">
                            <div className="flex-half">
                                <Carousel srcList={[imageCarousel1, imageCarousel2, imageCarousel3]} />
                            </div>

                            <div className="flex-half flex flex-col justify-center items-center px-4">
                                <h1 className="text-lg font-bold mb-4">大標題</h1>
                                <p className="text-md text-darkGray mb-6">
                                    副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題副標題
                                </p>
                                <a href="#form">
                                    <Button text="了解更多" />
                                </a>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="flex">
                            <div className="flex-half flex flex-col justify-center items-center px-4">
                                <h1 className="text-lg font-bold mb-4">大標題</h1>
                                <p className="text-md text-darkGray mb-6">副標題</p>
                                <a href="#form">
                                    <Button text="了解更多" />
                                </a>
                            </div>
                            <div className="flex-half">
                                <Carousel srcList={[imageCarousel4, imageCarousel5, imageCarousel6]} />
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="flex flex-col items-center" id="form">
                            <h1 className="text-lg font-bold mb-8">想了解更多?</h1>
                            <Form />
                        </div>
                    </Section>
                </DefaultContainer>
            </div>
        </div>
    );
}

export default App;
