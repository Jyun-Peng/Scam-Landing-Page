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

import { LargeTitle, MediumTitle, Paragraph } from './components/Text';

function Section({ children }) {
    return <div className="bg-white py-20">{children}</div>;
}

function App() {
    const heroRef = useRef(null);
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
    const cardTexts = [
        {
            title: '自動化',
            paragraph: ['要聊什麼話題才好？', <br />, '不用擔心，AI網聊助手幫你解決。'],
        },
        {
            title: '高效率',
            paragraph: ['學姊洗澡洗一年？', <br />, 'AI網聊助手讓她瞬間跟你報備。'],
        },
        {
            title: '全方面',
            paragraph: ['沒有共同興趣？', <br />, 'AI網聊助手讓你比她懂的更多。'],
        },
    ];

    const scrollToBottom = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };

    useEffect(() => {
        const handleScroll = function () {
            if (window.scrollY > window.innerHeight) setHeaderSwitch(true);
            else setHeaderSwitch(false);
            const pos = 3 * ((window.innerHeight - window.scrollY) / window.innerHeight - 0.66666) + 0.6;
            if (pos >= 1) heroRef.current.style.opacity = '1';
            else if (pos < 0.3) heroRef.current.style.opacity = '0.25';
            else heroRef.current.style.opacity = `${pos}`;
            // console.log(pos);
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
                    <div ref={heroRef} className="w-full flex flex-col items-center gap-10 px-4">
                        <LargeTitle center>不想再被她已讀了?</LargeTitle>
                        <Button text="開始體驗" onClick={scrollToBottom} />
                    </div>
                </div>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col items-center pt-20 gap-12">
                            <MediumTitle>使用AI網聊助手</MediumTitle>
                            <div className="flex md:px-6">
                                <div className="flex-1/3 px-2 mobile:px-6 desktop:px-10">
                                    <Card src={imageIntro1} text={cardTexts[0]} />
                                </div>
                                <div className="flex-1/3 px-2 mobile:px-6 desktop:px-10">
                                    <Card src={imageIntro2} text={cardTexts[1]} />
                                </div>
                                <div className="flex-1/3 px-2 mobile:px-6 desktop:px-10">
                                    <Card src={imageIntro3} text={cardTexts[2]} />
                                </div>
                            </div>
                            <Button text="開始體驗" onClick={scrollToBottom} />
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-wrap mobile:flex-nowrap gap-6 mobile:gap-0">
                            <div className="flex-full mobile:flex-half order-2 mobile:order-1">
                                <Carousel srcList={[imageCarousel1, imageCarousel2, imageCarousel3]} />
                            </div>

                            <div className="flex-full mobile:flex-half order-1 mobile:order-2 flex flex-col justify-center items-center px-4 gap-6">
                                <MediumTitle>愛情靠專業</MediumTitle>
                                <Paragraph>
                                    由專業AI工程師、語言學家、心理學家共同開發的 AI
                                    網聊助手，運用網路技術彌補你社交上的不足，讓你在情場上不再弱勢。
                                </Paragraph>
                                <Button text="開始體驗" onClick={scrollToBottom} />
                            </div>
                            <div className="text-center flex-full block mobile:hidden order-3">
                                <Button text="開始體驗" onClick={scrollToBottom} />
                            </div>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col mobile:flex-row gap-6 mobile:gap-0">
                            <div className="flex-full mobile:flex-half flex flex-col justify-center items-center px-4 gap-6">
                                <MediumTitle>用過都說讚</MediumTitle>
                                <Paragraph>
                                    ：「抱歉最近被女友拉著到處跑，只有趁她在睡著了才能填寫反饋表單。我覺得這個 AI
                                    網聊助手真的有料。等等，女友醒了，我又要忙了，就先這樣囉。 👍」
                                </Paragraph>
                                <Button text="開始體驗" onClick={scrollToBottom} />
                            </div>
                            <div className="flex-full mobile:flex-half">
                                <Carousel srcList={[imageCarousel4, imageCarousel5, imageCarousel6]} />
                            </div>
                            <div className="text-center flex-full block mobile:hidden order-3">
                                <Button text="開始體驗" onClick={scrollToBottom} />
                            </div>
                        </div>
                    </DefaultContainer>
                </Section>
                <Section>
                    <DefaultContainer>
                        <div className="flex flex-col items-center gap-6" id="form">
                            <MediumTitle>想了解更多?</MediumTitle>
                            <Form />
                        </div>
                    </DefaultContainer>
                </Section>
            </div>
        </div>
    );
}

export default App;
