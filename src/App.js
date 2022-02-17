function Section({ children }) {
    return <div className="max-w-4xl px-4 py-48 mx-auto">{children}</div>;
}

function Header({ children }) {
    return <header className="w-full h-14 px-80 fixed top-0 left-0 z-10">{children}</header>;
}

function App() {
    return (
        <div className="App">
            <Header>This is a Header</Header>
            <div className="wrapper bg-white pt-14">
                <Section>
                    <div>This is a Hero</div>
                </Section>
                <Section>
                    <div className="flex">
                        <div className="flex-auto">標語1</div>
                        <div className="flex-auto">標語2</div>
                        <div className="flex-auto">標語3</div>
                    </div>
                </Section>
                <Section>
                    <div className="flex">
                        <div className="flex-auto">Carousel</div>
                        <div className="flex-auto">標題&按鈕</div>
                    </div>
                </Section>
                <Section>
                    <div className="flex">
                        <div className="flex-auto">標題&按鈕</div>
                        <div className="flex-auto">Carousel</div>
                    </div>
                </Section>
                <Section>
                    <div>表單</div>
                </Section>
            </div>
        </div>
    );
}

export default App;
