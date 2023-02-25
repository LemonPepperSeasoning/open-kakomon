import userIcon from '../../assets/icons/User_01.svg'

const ReviewListsItem = (props) => {

    return (
        <>
            <div className="p-3 rounded-md hover:bg-slate-300">
                <div>
                    {props.review.comment}
                </div>
                <div className='flex'>
                    <img src={userIcon} />
                    <div>
                        {props.review.username}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewListsItem;
