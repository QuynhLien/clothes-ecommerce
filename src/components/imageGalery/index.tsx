'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import "./style.css";

interface Idetail {
    images: { imgUrl:string}[];
    //iPhone,Android , iPad , còn lại window vs MAC khỏi check
}

export default function ImageGalery(props:Idetail): React.ReactElement {
  const [endSlidePosition , setEndSlidePostion] = useState<number>(5);
  const [startSlidePosition , setStartSlidePostion] = useState<number>(1);
  const [responsiveRem , setResponsiverem] = useState<number>(1);
  const [touchLife, setTouchLife] = useState<{start:number,end:number}>({start:0,end:0});
  const [responsiveGaleryNumber , setResponsiveGaleryNumber] = useState<{left:number,right:number}>({left:0,right:0});

  const handleClickMainSlider = (e:React.MouseEvent<HTMLImageElement>,currentIndex:number):void => {
    const slider = document.querySelector('.slider') as HTMLDivElement | null;
    if (slider) {
        const angle = ((currentIndex) * (360 / props.images.length)); // Tính góc quay cho imagine hiện tại
        slider.style.transform = `perspective(1000px) rotateY(${-angle}deg)`;//Quay đều quay đều
    }
    e.stopPropagation() // dừng truyền sự kiện lên div cha vì div cha cũng có 1 sự kiện onClick khác tránh 2 sự kiện cùng kích hoạt
  };

  const handleClickSubSlider = (e:React.MouseEvent<HTMLImageElement>,currentIndex:number):void => {
    handleClickMainSlider(e,currentIndex);
    const subSlider = document.querySelector('.banner-wrapper .scroll-bar .sub-slider') as HTMLDivElement | null;
    if (subSlider) {
      const sliderWidth = subSlider.offsetWidth;
      ++currentIndex;
      if(currentIndex === endSlidePosition && currentIndex < props.images.length){
        setEndSlidePostion(endSlidePosition + 1);
        setStartSlidePostion(startSlidePosition + 1);
        subSlider.style.transform = `translateX(calc((-${sliderWidth}px - ${responsiveRem}rem) * ${currentIndex - responsiveGaleryNumber.right}))`;//Quay đều quay đều
      }
      else if(currentIndex === startSlidePosition && currentIndex > 1){
        setStartSlidePostion(startSlidePosition - 1);
        setEndSlidePostion(endSlidePosition -1);
        subSlider.style.transform = `translateX(calc((-${sliderWidth}px - ${responsiveRem}rem) * ${currentIndex - responsiveGaleryNumber.left}))`;//Quay đều quay đều
      }
    }
    e.stopPropagation()
  }
   

  const handleDevices = ():void =>{
    const screenWidth = document.documentElement.clientWidth;
    console.log('screenWidth',screenWidth);
    if(screenWidth <= 768){
      console.log('mobile')
      setResponsiveGaleryNumber({left:2,right:2});
      setEndSlidePostion(3);
      setResponsiverem(1);
      return ;
    }
    if(screenWidth <= 1258){
      console.log('IPAD')
      setResponsiveGaleryNumber({left:2,right:3});
      setEndSlidePostion(4);
      return ;
    }
    console.log('PC')
    setResponsiveGaleryNumber({left:2,right:4});
    setEndSlidePostion(5);
    setResponsiverem(2);
  }

  useEffect(() => {
    handleDevices();
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

  useEffect(() => {
    window.addEventListener('resize', ()=> window.location.reload());
    return () => window.removeEventListener('resize', ()=> window.location.reload());
  },[])

    return (
      <div className='banner-wrapper'>
        <div className="banner" >
          <div className={`slider`}>
            {
              props.images.map((image,index) => (
                  <div className="item" key={index} >
                  <Image key={`main${index}`} className="mainImage" src={image.imgUrl} width={500} height={500} draggable="false" alt={`image${index}`} onClick={(e)=>handleClickMainSlider(e,index)}/>
                  <Image key={`shadow${index}`} className="reflected" src={image.imgUrl} draggable="false" width={500} height={500} alt=""/>
                  </div>
              ))
            }
          </div>
        </div>
        <div className='scroll-bar'>
          <div className='sub-slider ml-2'>
            {
              props.images.map((image,index) => (
              <div className="item " key={index} >
                  <Image key={`main${index}`} src={image.imgUrl} width={500} height={500} draggable="false" alt="" onClick={(e)=>handleClickSubSlider(e,index)}/>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    )
}