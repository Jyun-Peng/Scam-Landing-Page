import DefaultContainer from './DefaultContainer';

export default function Header({ children }) {
    return (
        <header className="w-full h-14 fixed top-0 left-0 z-10">
            <DefaultContainer>{children}</DefaultContainer>
        </header>
    );
}
