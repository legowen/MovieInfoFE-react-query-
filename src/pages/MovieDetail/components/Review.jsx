import React from 'react'
import { useState } from 'react';
// Style
import "./Review.style.css";

const Review = ({ review }) => {
  const [reviewExpand, setReviewExpand] = useState(false);

  return (
    <li lg={12}>
    <p>Author : {review.author}</p>
    <div className="review_content">
      <p className={reviewExpand ? "expand" : "fold"}>{review.content}</p>
      {
        review.content.length > 680 ? (
          <p onClick={() => setReviewExpand(!reviewExpand)}>{
            reviewExpand ? "접기" : "더보기"
          }</p>
        ) : (
          <></>
        )
      }
    </div> 
  </li>
  )
}

export default Review