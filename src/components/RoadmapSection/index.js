import React from 'react'


import { HeroContainer, HeroBg,VideoBg,
        HeroContent, HeroH1, 
        HeroRow, HeroImgWrapper, 
        HeroImg, 
        Column1, 
        Column2, 
        Column2Wrapper, 
        ButtonWrap,
        ImgLogo,
        ImgBg,
        HeroP
        } from '../RoadmapSection/RoadmapElements'
import bg from '../../Image/4thpanel.png';

import Image from '../../Image/rock.png'

import r1 from '../../Image/r1.png'
import r2 from '../../Image/r2.png'
import r3 from '../../Image/r3.png'
import r4 from '../../Image/r4.png'
import r5 from '../../Image/r5.png'
import r6 from '../../Image/r6.png'
import r7 from '../../Image/r7.png'
import r8 from '../../Image/r8.png'




const RoadmapSection = () => {

  

    return (
        <HeroContainer id="roadmap">
            <HeroBg>
                <ImgBg src={bg}></ImgBg>
              
            </HeroBg>

            <HeroContent>
                <HeroRow>
                        <Column1>
                            <HeroImgWrapper>
                               
                                <HeroImg src={Image}></HeroImg>
                             

                            </HeroImgWrapper>
                        </Column1>

                        <Column2>
                            <Column2Wrapper>
                               
                                <HeroP>
                                No Roadmap, No promises. Just Art and Vibes.
                                </HeroP>
                                
                                
                            </Column2Wrapper>
                        </Column2>              
                </HeroRow>
            </HeroContent>
        </HeroContainer>
    )
}

export default RoadmapSection
