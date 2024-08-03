'use client'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import "./style.css";

export default function Detail(): React.ReactElement {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (currentIndex:number):void => {
    const slider = document.querySelector('.slider') as HTMLDivElement | null;
    if (slider) {
      const angle = (currentIndex * (360 / 10)); // Tính góc cho item hiện tại
      slider.style.transform = `perspective(1000px) rotateY(${-angle}deg)`;//Quay đều quay đều
    }
    setIsAnimating(!isAnimating);
  };
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
      const images = [
        // { img: '/mock_img/img1.jpg', alt: 'Image 1' },
        // { img: '/mock_img/img2.jpg', alt: 'Image 2' },
        // { img: '/mock_img/img3.jpg', alt: 'Image 3' },
        // { img: '/mock_img/img4.png', alt: 'Image 4' },
        // { img: '/mock_img/img5.png', alt: 'Image 5' },
        // { img: '/mock_img/img1.jpg', alt: 'Image 6' },
        // { img: '/mock_img/img2.jpg', alt: 'Image 7' },
        // { img: '/mock_img/img3.jpg', alt: 'Image 8' },
        // { img: '/mock_img/img4.png', alt: 'Image 9' },
        // { img: '/mock_img/img5.png', alt: 'Image 10' },
        { img: '/dragon_img/dragon_1.jpg', alt: 'Image 1' },
        { img: '/dragon_img/dragon_2.jpg', alt: 'Image 2' },
        { img: '/dragon_img/dragon_3.jpg', alt: 'Image 3' },
        { img: '/dragon_img/dragon_4.jpg', alt: 'Image 4' },
        { img: '/dragon_img/dragon_5.jpg', alt: 'Image 5' },
        { img: '/dragon_img/dragon_6.jpg', alt: 'Image 6' },
        { img: '/dragon_img/dragon_7.jpg', alt: 'Image 7' },
        { img: '/dragon_img/dragon_8.jpg', alt: 'Image 8' },
        { img: '/dragon_img/dragon_9.jpg', alt: 'Image 9' },
        { img: '/dragon_img/dragon_10.jpg', alt: 'Image 10' },
        // Thêm các ảnh khác vào đây
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
        <div className='w-5/6 bg-red-900 mr-auto ml-auto p-5 pl-5'>
            <Stack className='page-path' spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
            <div className="banner">
              <div className={`slider`}>
                {
                  images.map((image,index) => (
                    <div className="item" key={index} >
                      <Image key={`main${index}`} src={image.img} width={500} height={500} alt="" onClick={()=>handleClick(index)}/>
                      <Image key={`shadow${index}`} className="reflected" src={image.img} width={500} height={500} alt=""/>
                      </div>
                  ))
                }
              </div>
            </div>
        </div>
    )
}