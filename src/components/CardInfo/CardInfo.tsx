import React from 'react'
import '../../App.css'

import {
  CardInfoSection,
  CardInfoTexts,
  CardInfoContentTitles,
  CardInfoTitle,
  CardInfoSubtitle,
  CardInfoList,
} from './style';

interface InfoCars {
   title: string,
   subtitle: string,
   img: string,
   imgDesk: string,
   topics: string[],
}


export const CardInfo = ({ title, subtitle, img, imgDesk, topics }: InfoCars) => {
   return (
      <CardInfoSection bgImg={img} bgImgDesk={imgDesk}>
         <CardInfoTexts>
            <CardInfoContentTitles>
               <CardInfoTitle>{title}</CardInfoTitle>
               <CardInfoSubtitle>{subtitle}</CardInfoSubtitle>
            </CardInfoContentTitles>
            <CardInfoList>
              {topics.map(t => (
                <li>{t}</li>
              ))}
            </CardInfoList>
         </CardInfoTexts>
      </CardInfoSection>
   )
}
