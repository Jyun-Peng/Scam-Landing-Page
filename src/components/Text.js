function LargeTitle({ children }) {
    return <h1 className={`text-xxl_mobile md:text-xxl text-white font-bold text-center`}>{children}</h1>;
}

function MediumTitle({ children }) {
    return <h2 className={`text-xl_mobile md:text-xl font-bold`}>{children}</h2>;
}

function Paragraph({ children }) {
    return <p className="text-para text-darkGray">{children}</p>;
}

export { LargeTitle, MediumTitle, Paragraph };
