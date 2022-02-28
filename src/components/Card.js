import { Paragraph } from './Text';
export default function Card({ src, text }) {
    return (
        <div className="flex flex-col items-center">
            <img src={src} alt="icon" className="w-full aspect-square mb-4" />
            <span className="text-center text-lg_mobile md:text-lg font-bold mb-3">{text.title}</span>
            <Paragraph center>{text.paragraph}</Paragraph>
        </div>
    );
}
