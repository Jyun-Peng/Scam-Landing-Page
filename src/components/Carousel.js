import { useState } from 'react';

export default function Carousel({ srcList }) {
    const [currImage, setCurrImage] = useState(0);
    const handleClick = function (image) {
        if (image === currImage) return;
        setCurrImage(image);
    };

    const ThumbnailImgClass = 'w-full aspect-[2/1] object-cover object-center';
    const ThumbnailContainerClass = 'flex-auto cursor-pointer';
    const ThumbnailMaskClass = 'absolute w-full h-full left-0 top-0';
    return (
        <div>
            <img src={srcList[currImage]} alt="image" className="w-full aspect-[3/2] object-cover object-center mb-2" />
            <div className="flex gap-2">
                <div className={ThumbnailContainerClass} onClick={() => handleClick(0)}>
                    <img src={srcList[0]} alt="image" className={ThumbnailImgClass} />
                    <div className={ThumbnailMaskClass + (currImage === 0 ? ' shadow-thumbnail' : '')}></div>
                </div>
                <div className={ThumbnailContainerClass} onClick={() => handleClick(1)}>
                    <img src={srcList[1]} alt="image" className={ThumbnailImgClass} />
                    <div className={ThumbnailMaskClass + (currImage === 1 ? ' shadow-thumbnail' : '')}></div>
                </div>
                <div className={ThumbnailContainerClass} onClick={() => handleClick(2)}>
                    <img src={srcList[2]} alt="image" className={ThumbnailImgClass} />
                    <div className={ThumbnailMaskClass + (currImage === 2 ? ' shadow-thumbnail' : '')}></div>
                </div>
            </div>
        </div>
    );
}
