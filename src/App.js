import { useState, useEffect, useRef } from 'react';
import Carousel from './components/Carousel';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import DefaultContainer from './components/DefaultContainer';
import Card from './components/Card';

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
} from './images';

function Section({ children }) {
    return <div className="bg-white py-20">{children}</div>;
}

function LargeTitle({ children, marginBottom }) {
    return (
        <h1 className={`text-xxl text-white font-bold text-center ${marginBottom ? 'mb-' + marginBottom : ''}`}>
            {children}
        </h1>
    );
}

function MediumTitle({ children, marginBottom }) {
    return <h2 className={`text-xl font-bold ${marginBottom ? 'mb-' + marginBottom : ''}`}>{children}</h2>;
}

function App() {
    const refBg = useRef(null);
    const [headerSwitch, setHeaderSwitch] = useState(false);
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
            if (window.scrollY + 56 > window.innerHeight) setHeaderSwitch(true);
            else setHeaderSwitch(false);
        };

        document.addEventListener('scroll', throttle(handleScroll, 20));

        return () => document.removeEventListener('scroll', throttle(handleScroll, 20));
    }, []);

    return (
        <div className="App">
            <Header beLeft={headerSwitch} />
            <div className="wrapper bg-white pt-14">
                <div className="w-full h-[100vh] fixed left-0 top-0 bg-heroImg bg-center bg-cover">
                    <div className="w-full h-full absolute left-0 top-0 bg-mask"></div>
                </div>
                <div className="h-hero flex items-center">
                    <div className="w-full flex flex-col items-center">
                        <LargeTitle marginBottom="10">不想再被她已讀了?</LargeTitle>
                        <a href="#form">
                            <Button text="開始體驗" />
                        </a>
                    </div>
                </div>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col items-center pt-20">
                            <MediumTitle marginBottom="12">使用AI網聊助手</MediumTitle>
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
                                <Button text="開始體驗" />
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
                                <MediumTitle marginBottom="6">愛情靠專業</MediumTitle>
                                <p className="text-para text-darkGray mb-10">
                                    由專業AI工程師、語言學家、心理學家共同開發的 AI
                                    網聊助手，運用網路技術彌補你社交上的不足，讓你在情場上不再弱勢。
                                </p>
                                <a href="#form">
                                    <Button text="開始體驗" />
                                </a>
                            </div>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex">
                            <div className="flex-half flex flex-col justify-center items-center px-4">
                                <MediumTitle marginBottom="6">要記得反饋</MediumTitle>
                                <p className="text-para text-darkGray mb-10">
                                    ：「抱歉最近被女友拉著到處跑，只有趁她在睡著了才能填寫反饋表單。我覺得這個 AI
                                    網聊助手真的有料。等等，女友醒了，我又要忙了，就先這樣囉。 👍」
                                </p>
                                <a href="#form">
                                    <Button text="開始體驗" />
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
                            <MediumTitle marginBottom="6">想了解更多?</MediumTitle>
                            <Form />
                        </div>
                    </DefaultContainer>
                </Section>
            </div>
        </div>
    );
}

export default App;
