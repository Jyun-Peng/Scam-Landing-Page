export default function Card({ src, text }) {
    return (
        <div className="flex flex-col">
            <img src={src} alt="icon" className="w-full aspect-square mb-8" />
            <h2 className="text-center text-[1.8rem] mobile:text-lg font-bold">{text}</h2>
        </div>
    );
}
