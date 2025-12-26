import {useContext} from 'react'
import { ThemeContext } from '../context/Theme'

export default function themeColor(){
    const {mode}  =  useContext(ThemeContext)
    const  bgColor = mode==="light"?"#f8f9fa":"#000011";
    const bg1= mode==="light"?"img/bg/4.jpg":"img/bg/banner.jpg"
    const brandLogo =  mode==="light"?"logo/black.png":"logo/white.png";
    const color1 = mode==="light"?"#212529":"#FFF";
    const color2 = mode==="light"?"#0d6efd":"#66FCF1";
    const color3 = mode==="light"?"#495057":"#66FCF1";
    const color4 = mode==="light"?"#0d6efd":"#66FCF1";
    const transparentBG = mode==="light"?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 17, .9)";
    const shadowColor = mode==="light"?"rgba(0, 0, 0, 0.1)":"rgba(102, 252, 241, .3)";
    const shadowColor2 = mode==="light"?"rgba(0, 0, 0, 0.15)":"rgba(102, 252, 241, .3)";
    const brandTitle = mode==="light"?"https://github.com/vishwajeethaldar/vishwajeethaldar/blob/main/logos/name2.png?raw=true":"https://github.com/vishwajeethaldar/vishwajeethaldar/blob/main/logos/name2.png?raw=true"; //https://github.com/vishwajeethaldar/vishwajeethaldar/blob/main/logos/name4.png?raw=true
    const hoverColor1 = mode==="light"?"#0056b3":"#5e9";
    const navaBGColor = mode==="dark"?"rgba(0,0,11,.96)":"rgba(248,249,250,.96)";
    const footerBgColor = mode==="light"?"#e9ecef":"rgba(0, 0, 17, .9)";
    const gitStateColor = mode==="light"?"#212529":"#000011";
    const gitStateBgColor = mode==="light"?"#ffffff":"#000011";
    
    return {
        footerBgColor,
        navaBGColor,
        bgColor,
        color1,
        brandLogo,
        hoverColor1,
        brandTitle,
        color2,
        color3,
        shadowColor,
        transparentBG,
        bg1,
        color4,
        shadowColor2,
        gitStateColor,
        gitStateBgColor
    }
}

