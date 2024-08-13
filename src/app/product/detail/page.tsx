'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import ImageGalery from "@/components/imageGalery"; 

import "./style.css";

export default function Detail(): React.ReactElement {

  const images = [
    { imgUrl: '/dragon_img/dragon_1.jpg' },
    { imgUrl: '/dragon_img/dragon_2.jpg' },
    { imgUrl: '/dragon_img/dragon_3.jpg' },
    { imgUrl: '/dragon_img/dragon_4.jpg' },
    { imgUrl: '/dragon_img/dragon_5.jpg' },
    { imgUrl: '/dragon_img/dragon_6.jpg' },
    { imgUrl: '/dragon_img/dragon_7.jpg' },
    { imgUrl: '/dragon_img/dragon_8.jpg' },
    { imgUrl: '/dragon_img/dragon_9.jpg' },
    { imgUrl: '/dragon_img/dragon_10.jpg' },
    // Thêm các ảnh khác vào đây
  ];

  const breadcrumbs = [
      <Typography key="3" color="text.primary">
        Breadcrumb 1
      </Typography>,
      <Typography key="3" color="text.primary">
        Breadcrumb 2
      </Typography>,
      <Typography key="3" color="text.primary">
        Breadcrumb 3
      </Typography>,
    ];
      
    useEffect(() => {
      const slider = document.querySelector('.slider') as HTMLDivElement | null;
      const items = document.querySelectorAll('.slider .item') as NodeListOf<HTMLDivElement> | null;
      if (items){
        items.forEach((item, index) => {
          item.style.setProperty('--position', `${index + 1}`);
        });
      }
      if (slider) {
        slider.style.setProperty('--quantity', `10`);
      }
    }, []);

    return (
        <div className='mr-auto ml-auto p-5 latop:w-10/12 ipad:w-10/12 mobile:w-full' >
            <Stack className='page-path' spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <div className='flex mobile:flex-col ipad:flex-row laptop:flew-row'>
              {/* IMAGE GALERY */}
              <ImageGalery images={images}/>

              <div className="w-2/4 laptop:pl- ipad:pl-8 mobile:w-full ">
                <h1 className=''>Áo Polo Cá Sấu Thêu Chữ Ký Form Regular PO087 Màu Đen</h1>
                <h2>(62 đánh giá / 77 lượt mua)</h2>
                asd
              </div>   
            </div>
        </div>
    )
}