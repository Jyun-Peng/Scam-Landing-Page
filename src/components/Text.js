function LargeTitle({ children, center }) {
    return (
        <h1 className={`text-xxl_mobile md:text-xxl text-white font-bold${center ? ' text-center' : ''}`}>
            {children}
        </h1>
    );
}

function MediumTitle({ children, center }) {
    return <h2 className={`text-xl_mobile md:text-xl font-bold${center ? ' text-center' : ''}`}>{children}</h2>;
}

function SubTitle({ children, center }) {
    return <h3 className={`text-lg_mobile md:text-lg text-darkGray ${center ? ' text-center' : ''}`}>{children}</h3>;
}

function Paragraph({ children, center }) {
    return <p className={`text-para text-darkGray${center ? ' text-center' : ''}`}>{children}</p>;
}

export { LargeTitle, MediumTitle, SubTitle, Paragraph };
