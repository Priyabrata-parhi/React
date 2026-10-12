import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img className='coverImage' src={props.elem.coverImage} />

            <div className='text-cent'>
                <img className='profile' src={props.elem.profile} alt="" />
                <h2 className='fullName'>{props.elem.fullName}</h2>
                <h4 className='title'>{props.elem.title}</h4>
            </div>

            <p className='paragraph'>{props.elem.paragraph} </p>

            <div className='total-count'>
                <div className='count'>
                    <h2>{props.elem.postcount}</h2>
                    <p>Postcount</p>
                </div>
                <div className='count'>
                    <h2>{props.elem.likecount}</h2>
                    <p>Likecount</p>
                </div>
                <div className='count'>
                    <h2>{props.elem.viewscount}</h2>
                    <p>viewscount</p>
                </div>
            </div>

        </div>
    )
}

export default Card