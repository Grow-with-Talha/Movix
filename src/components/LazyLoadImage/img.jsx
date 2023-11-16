import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, fit }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            style={{objectPosition: "center"}}
            src={src}
        />
    );
};

export default Img