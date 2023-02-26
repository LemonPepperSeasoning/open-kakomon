import userIcon from '../../assets/icons/User_01.svg'

const ReviewListsItem = (props) => {

    return (
        <>
            <div className="p-3 rounded-md hover:bg-slate-300">

                <div className='flex'>
                    <img src={userIcon} />
                    <div>
                        {props.review.username}
                    </div>
                </div>

                <span>
                    {props.review.comment}
                </span>

                {/* 
                <div >
                    <button className='mx-2'>Reply</button>
                    <button className='mx-2'>Edit</button>
                    <button className='mx-2'>Delete</button>
                </div> */}
            </div>
        </>
    )
}

export default ReviewListsItem;
