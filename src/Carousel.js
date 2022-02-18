export default function Carousel({ srcList }) {
    return (
        <div>
            <img src={srcList[0]} alt="image" className="w-full aspect-[2/1] object-cover object-center mb-2" />
            <div className="flex gap-2">
                <div className="flex-auto">
                    <img src={srcList[0]} alt="image" className="w-full aspect-[2/1] object-cover object-center" />
                </div>
                <div className="flex-auto">
                    <img src={srcList[1]} alt="image" className="w-full aspect-[2/1] object-cover object-center" />
                </div>
                <div className="flex-auto">
                    <img src={srcList[2]} alt="image" className="w-full aspect-[2/1] object-cover object-center" />
                </div>
            </div>
        </div>
    );
}
