import DefaultContainer from './DefaultContainer';

export default function Header({ children, beLeft }) {
    const handleLogoClicked = function () {
        window.scrollTo(0, 0);
    };
    return (
        <header className={`w-full h-14 fixed top-0 left-0 z-10 ${beLeft ? 'bg-white' : ''}`}>
            <DefaultContainer>
                <div className={`flex ${beLeft ? 'justify-start' : 'justify-center'}`}>
                    <h1
                        className={`text-logo font-bold leading-[3.5rem] ${beLeft ? 'text-darkGray' : 'text-white'}`}
                        onClick={handleLogoClicked}
                    >
                        TECH<span className="text-red">LOVE</span>
                    </h1>
                </div>
            </DefaultContainer>
        </header>
    );
}
