import { useState } from 'react';

export default function Carousel({ srcList }) {
    const [currImage, setCurrImage] = useState(0);
    const handleClick = function (image) {
        if (image === currImage) return;
        setCurrImage(image);
    };
    return (
        <div>
            <img src={srcList[currImage]} alt="image" className="w-full aspect-[3/2] object-cover object-center mb-2" />
            <div className="flex gap-2">
                <div className={'flex-auto cursor-pointer'} onClick={() => handleClick(0)}>
                    <img src={srcList[0]} alt="image" className={'w-full aspect-[2/1] object-cover object-center'} />
                    <div
                        className={'absolute w-full h-full left-0 top-0' + (currImage === 0 ? ' shadow-thumbnail' : '')}
                    ></div>
                </div>
                <div className="flex-auto cursor-pointer" onClick={() => handleClick(1)}>
                    <img src={srcList[1]} alt="image" className="w-full aspect-[2/1] object-cover object-center" />
                    <div
                        className={'absolute w-full h-full left-0 top-0' + (currImage === 1 ? ' shadow-thumbnail' : '')}
                    ></div>
                </div>
                <div className="flex-auto cursor-pointer" onClick={() => handleClick(2)}>
                    <img src={srcList[2]} alt="image" className="w-full aspect-[2/1] object-cover object-center" />
                    <div
                        className={'absolute w-full h-full left-0 top-0' + (currImage === 2 ? ' shadow-thumbnail' : '')}
                    ></div>
                </div>
            </div>
        </div>
    );
}
