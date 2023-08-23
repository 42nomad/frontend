/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

const token = css`
  background-color: #20633F;
  color: #FFFAF2;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  width: 6rem;
  height: 1.8rem;
  line-height: 1.8rem;
  border-radius: 1rem;
`

const leftDiv = css`
    width: 60%;
    text-align: left;
    margin: 0.3rem 0;
`

const uploadFile = (e:React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const label = target.parentElement as HTMLLabelElement;
    const file = target.files && target.files[0];

    if (file)
        label.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
}

function LostForm() {
	return (
        <div className='bg-nomad-sand min-h-full flex flex-col justify-center items-center'>
            <label htmlFor='file' 
                className='block w-[60%] pb-[60%] bg-[url("../assets/images/AddLostDoc.svg")] bg-cover bg-center cursor-pointer border border-black mb-6'>
                <input type='file' id='file' accept='image/*' className='hidden' onChange={(e)=>uploadFile(e)}/>
            </label>
            <input type='text' maxLength={10} placeholder='자리 입력' className='bg-transparent font-nexonBold text-3xl focus:outline-none w-[70%] text-center mb-1'/>
            <p className='mb-3'>2023-08-20</p>
            <div css={leftDiv}>
                <div css={token} className='mr-3'>작성자</div>
                <span className='text-xl'>sojoo</span>
            </div>
            <div css={leftDiv}>
                <div css={token} className='mb-3'>보관 위치</div>
                <textarea placeholder='분실물 보관 장소를 적어주세요.' className='block w-full text-xl focus:outline-none bg-transparent h-24 mb-3 resize-none'/>
            </div>
            <button type='button' css={token}>목록</button> {/* 일반 글 상세 페이지 */}
            {/* <div>
                <button type='button' css={token} className='mx-1'>수정</button>
                <button type='button' css={token} className='mx-1'>삭제</button>
            </div> */} {/* 내 글 상세 페이지 */}
            {/* <div>
                <button type='button' css={token} className='mx-1'>등록</button>
                <button type='button' css={token} className='mx-1'>취소</button>
            </div> */} {/* 글 등록 시 */}
        </div>
    )
}

export default LostForm;
