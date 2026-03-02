import { useState } from 'react'
import '../styles/Preview.css'
import '../styles/Selector.css'
import popSound from '../assets/sound/popSound.mp3';

import {
    //game elements
    ArrowBack,
    ArrowNext,
    Blank,
    //tops
    BaseTop,
    BlackCropTank,
    BlueTee,
    GinghamRedBlouse,
    GreenTee,
    LeopardCrop,
    LeopardTube,
    PinkTee,
    PurpleTube,
    WhiteBlouse,
    WhiteTee,
    //bottoms
    BaseBottom,
    BlackSkirt,
    GreenSkirt,
    HeartJeans,
    whiteSkirt,
    //shoes
    BlackMaryJanes,
    BlackPlatformBoots,
    BrownBoots,
    PinkConverse,
    RedConverse,
    RedMaryJanes,
    WhiteKittenHeels,
    //outwear
    BlackBolero,
    WhiteBolero
} from '../assets'

function Selector() {

  return (
    <>
        <div className="selector-container">
            <TopSelector />
            <OutwearSelector />
            <BottomSelector />
            <ShoesSelector />
        </div>
    </>
    
  )
}

//function to play sound when player clicks on next/back buttons
const playSound = () => {
    const audio = new Audio(popSound);
    audio.play();
};

//function to allow player to choose from tops & display on preview
function TopSelector() {
    const tops = [BaseTop, BlackCropTank, WhiteTee, PinkTee, BlueTee, GreenTee, LeopardCrop, LeopardTube, PurpleTube, WhiteBlouse, GinghamRedBlouse]
    const [count, setCount] = useState(0);
    
    return (
    <>
        <div className="selector-div">

            {/* back button */}
            <img className="arrow" src={ArrowBack} onClick={() => {setCount((count - 1 + tops.length) % tops.length); playSound();}}/>

            {/* top displays on selector */}
            <img className="selected-tops" src={tops[count]} />

            {/* next button */}
            <img className="arrow" src={ArrowNext} onClick={() => {setCount((count + 1) % tops.length); playSound();}}/>

            {/* top displays on preview */}
            <img className="preview tops" src={tops[count]} />
        </div>
    </>
    )
}

//function to allow player to choose from bottoms & display on preview
function BottomSelector() {
    const bottoms = [BaseBottom, HeartJeans, BlackSkirt, GreenSkirt, whiteSkirt]
    const [count, setCount] = useState(0);
    
    return (
    <>
        <div className="selector-div">

            {/* back button */}
            <img className="arrow" src={ArrowBack} onClick={() => {setCount((count - 1 + bottoms.length) % bottoms.length); playSound();}}/>

            {/* bottom displays on selector */}
            <img className="selected-bottoms" src={bottoms[count]} />

            {/* next button */}
            <img className="arrow" src={ArrowNext} onClick={() => {setCount((count + 1) % bottoms.length); playSound();}}/>

            {/* bottom displays on preview */}
            <img className="preview bottoms" src={bottoms[count]} />
        </div>
    </>
    )
}

//function to allow player to choose from shoes & display on preview
function ShoesSelector() {
    const shoes = [BlackMaryJanes, BlackPlatformBoots, BrownBoots, PinkConverse, RedConverse, RedMaryJanes, WhiteKittenHeels]
    const [count, setCount] = useState(0);
    
    return (
    <>
        <div className="selector-div">

            {/* back button */}
            <img className="arrow" src={ArrowBack} onClick={() => {setCount((count - 1 + shoes.length) % shoes.length); playSound();}}/>

            {/* shoe displays on selector */}
            <img className="selected-shoes" src={shoes[count]} />

            {/* next button */}
            <img className="arrow" src={ArrowNext} onClick={() => {setCount((count + 1) % shoes.length); playSound();}}/>

            {/* shoe displays on preview */}
            <img className="preview shoes" src={shoes[count]} />
        </div>
    </>
    )
}

//function to allow player to choose from overwear & display on preview
function OutwearSelector() {
    const overwear = [Blank, BlackBolero, WhiteBolero]
    const [count, setCount] = useState(0);
    
    return (
    <>
        <div className="selector-div">

            {/* back button */}
            <img className="arrow" src={ArrowBack} onClick={() => {setCount((count - 1 + overwear.length) % overwear.length); playSound();}}/>

            {/* overwear displays on selector */}
            <img className="selected-overwear" src={overwear[count]} />

            {/* next button */}
            <img className="arrow" src={ArrowNext} onClick={() => {setCount((count + 1) % overwear.length); playSound();}}/>

            {/* overwear displays on preview */}
            <img className="preview overwear" src={overwear[count]} />
        </div>
    </>
    )
}

export default Selector