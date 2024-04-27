import React from 'react';
import './slider.css'; // Make sure to import the CSS file
import women from "../images/womens-health.png"
import pelvic from "../images/Pelvic-floor-rehabilitation.png"
import FemaleIcon from '@mui/icons-material/Female';
import Postural from "../images/Post-surgical-rehabilitation.png"
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import post from "../images/Postural-correction.png"
import headache from "../images/Headache-management.png"
import tmj from "../images/TMJ-management.png"
import sports from "../images/Sports-rehabilitation.png"
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
const slides = [
  {
    title: "Women's Health Rehab " ,
    subtitle:  '',
    description: <FemaleIcon className='fs-1'/>,
    image: women
  },
  {
    title: "Pelvic Floor Rehab",
    subtitle: "",
    description: <FemaleIcon className='fs-1'/>,
    image:pelvic
  },
  {
    title: "Post Surgical Rehab",
    subtitle: "",
    description: <WheelchairPickupIcon className='fs-1'/>,
    image: Postural
  },
  {
    title: "Postural Correction",
    subtitle: "",
    description: <MedicalServicesIcon className='fs-1'/>,
    image: post
  },
  {
    title: "Headache Management",
    subtitle: "",
    description: <MedicalServicesIcon className='fs-1'/>,
    image: headache
  },
  {
    title: "TMJ Management",
    subtitle: "",
    description: <MedicalServicesIcon className='fs-1'/>,
    image: tmj
  },
  {
    title: "Sports Rehab",
    subtitle: "",
    description: <SportsKabaddiIcon className='fs-1'/>  ,
    image: sports
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,width:300,height:400
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle fs-3 text-center">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <h6 className="slideDescription text-center ">{slide.description}</h6>
        </div>
      </div>
    </div>
  );
}

function SliderNew() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slider">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      <div className="slides">
        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
      </div>

      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}

export default SliderNew;
