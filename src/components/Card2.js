import React from "react";
// import { AnimatedTooltipPreview } from "./AnimatedTooltip";

const Cards2 = ({ title, description, languages, thumbnail, links }) => {
    return (
        <div className="card position-relative overflow-hidden border-0 rounded-3" style={{ maxWidth: '100%', cursor: 'pointer' }}>
            <div 
                className="card-img-top bg-cover bg-center" 
                style={{ backgroundImage: `url(${thumbnail})`, height: '300px', borderRadius: '1.75rem' }}
            ></div>
            <div className="card-body bg-dark bg-opacity-50 p-4 d-flex flex-column justify-end h-100 text-white position-absolute bottom-0 start-0 end-0">
                <h5 className="card-title text-white mb-2">{title}</h5>
                <div className="w-16 h-2 bg-warning rounded mb-2 mx-auto"></div>
                <p className="card-text mb-2" style={{ opacity: 0, transition: 'opacity 0.5s ease', maxHeight: '96px', overflow: 'hidden' }}>
                    {description}
                </p>
                <div className="position-absolute bottom-0 start-0 end-0 d-none">
                    {/* <AnimatedTooltipPreview languages={languages} links={links} /> */}
                </div>
            </div>
            <div className="card-overlay position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center" style={{ transition: 'opacity 0.5s ease' }}>
                <div className="text-center">
                    <h5 className="text-white">{title}</h5>
                    <p className="text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cards2;
