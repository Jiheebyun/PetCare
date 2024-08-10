"use client"
import React from 'react';

export default  function cmtDetail(props:any) {
  
  const storadData = localStorage.getItem('recentCmt')
  if(storadData){
    const storadCmt = JSON.parse(storadData);
    // console.log('storadCmt'+storadCmt.id);
    return(
      <>
        <div>
          id : {storadCmt.id}
        </div>
        <div>
          file : {storadCmt.file}
        </div>
        {/* <div>
        user : {storadCmt.user}
        </div>
        <div>
        text : {storadCmt.text}
        </div>
        <div>
        date : {storadCmt.date}
        </div>
        <div>
        like : {storadCmt.like}
        </div>
        <div>
        cmt : {storadCmt.cmt}
        </div>
        {storadCmt.file && (
          <div>
            file : {storadCmt.file}
          </div>
        )} */}
      </>
    )
  }
  else{
    <div>데이터없음
      </div>
  }
};