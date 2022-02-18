import Carousel from './Carousel';

function Section({ children }) {
    return <div className="px-4 py-48">{children}</div>;
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

function Button({ text }) {
    return <button className="inline-block">{text}</button>;
}

function Card({ src, text }) {
    return (
        <div className="flex flex-col">
            <img src={src} alt="icon" className="w-full aspect-square mb-5" />
            <h3 className="text-center">{text}</h3>
        </div>
    );
}

function Form() {
    return (
        <form>
            <label className="block flex items-center">
                <p className="w-24 flex-none">姓名：</p>
                <input type="text" className="w-full"></input>
            </label>

            <label className="block flex items-center">
                <p className="w-24 flex-none">電話：</p>
                <input type="text" className="w-full"></input>
            </label>
            <label className="block flex items-center">
                <p className="w-24 flex-none">電子信箱：</p>
                <input type="text" className="w-full"></input>
            </label>
            <div className="text-center">
                <Button text="提交" />
            </div>
        </form>
    );
}

function App() {
    return (
        <div className="App">
            <Header>This is a Header</Header>
            <div className="wrapper bg-white pt-14">
                <DefaultContainer>
                    <Section>
                        <h1>現在開始 翻轉人生</h1>
                        <Button text={'了解更多'} />
                    </Section>
                    <Section>
                        <div className="flex">
                            <div className="flex-auto px-10">
                                <Card src="" text="自動化" />
                            </div>
                            <div className="flex-auto px-10">
                                <Card src="" text="高效率" />
                            </div>
                            <div className="flex-auto px-10">
                                <Card src="" text="全方面" />
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="flex">
                            <div className="flex-half">
                                <Carousel srcList={[]} />
                            </div>

                            <div className="flex-half flex flex-col justify-center items-center">
                                <h2>大標題</h2>
                                <p>副標題</p>
                                <div className="text-center">
                                    <Button text="了解更多" />
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="flex">
                            <div className="flex-half flex flex-col justify-center items-center">
                                <h2>大標題</h2>
                                <p>副標題</p>
                                <Button text="了解更多" />
                            </div>
                            <div className="flex-half">
                                <Carousel srcList={[]} />
                            </div>
                        </div>
                    </Section>
                    <Section>
                        <div className="flex flex-col items-center">
                            <h2>想了解更多?</h2>
                            <Form />
                        </div>
                    </Section>
                </DefaultContainer>
            </div>
        </div>
    );
}

export default App;
