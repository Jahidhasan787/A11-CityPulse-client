import React, { use } from "react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../Component/ReviewCard";

const reviewPromise = fetch("http://localhost:3000/reviews").then((res) =>
  res.json()
);

const Reviews = () => {
  const reviews = use(reviewPromise);

  return (
    <div className="my-16 ">
      <h2 className="text-4xl mb-2 text-center font-bold ">
        Reviews & Rating
      </h2>
      <p className="text-gray-600 text-center">
        Real feedback from users who reported issues and saw real solutions
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  my-8"
      >
        {reviews.map((review) => 
          <SwiperSlide key={review._id}>
            <ReviewCard review ={review}></ReviewCard>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Reviews;
