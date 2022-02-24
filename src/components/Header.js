import DefaultContainer from './DefaultContainer';

export default function Header({ beLeft }) {
    const handleLogoClicked = function () {
        window.scrollTo(0, 0);
    };

    return (
        <header
            className={`w-full h-14 fixed top-0 left-0 z-10 transition-colors duration-300 ${beLeft ? 'bg-white' : ''}`}
        >
            <DefaultContainer>
                <div className={`h-[3.5rem] `}>
                    <div
                        className={`inline-block transition-header duration-300 delay-[400ms] ${
                            beLeft ? 'left-0' : 'left-2/4 translate-x-[-50%]'
                        } `}
                    >
                        <h1
                            className={`text-logo font-bold leading-[3.5rem] cursor-pointer transition-colors duration-300 ${
                                beLeft ? 'text-darkGray' : 'text-white'
                            }`}
                            onClick={handleLogoClicked}
                        >
                            TECH<span className="text-red">LOVE</span>
                        </h1>
                    </div>
                </div>
            </DefaultContainer>
        </header>
    );
}
