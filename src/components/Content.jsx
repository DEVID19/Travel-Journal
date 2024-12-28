/* eslint-disable react/prop-types */
import "/src/index.css";
const Content = (props) => {
  return (
    <article className="flex mb-9  mt-4 ml-4">
      <div className="w-[125px] h-[168px] overflow-hidden rounded-[5px] shrink-0 mr-[19px]">
        <img
          className="h-full w-full object-cover"
          // eslint-disable-next-line react/prop-types
          src={props.data.img.src}
          alt={props.data.img.alt}
        />
      </div>
      <div className="">
        <img
          className="w-[7px] mr-1  relative top-[18px]"
          src="src/assets/marker.png"
          alt="map marker icon"
        />
        <span className="uppercase text-[0.7rem] mr-[12px]  ml-3 ">
          {props.data.country}
        </span>
        <a
          href={props.data.googleMapsLink}
          className="text-[#2b283a] text-[0.7rem]  visited:text-[#918e9b]"
        >
          View on Google Maps
        </a>
        <h2 className="mt-[7px] mb-[17px]">{props.data.title}</h2>
        <p className="font-bold">{props.data.dates}</p>
        <p className="leading-6 text-[0.8rem] overflow-hidden  element">
          {props.data.text}
        </p>
      </div>
    </article>
  );
};

export default Content;
