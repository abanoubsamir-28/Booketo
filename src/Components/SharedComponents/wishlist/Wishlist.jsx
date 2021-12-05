import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { MdOutlineFavorite } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../../../Store/wishList/WishListAction'
import './wishlist.css'
const Wishlist = () => {
    const list = useSelector(state => (state.wishList))
    const dispatch = useDispatch()

    const handleRemoveFromWishlist = (book) => {
        dispatch(removeFromWishList(book))
    }

    return (
        <div>
            {list ?
                <p>
                    <button className=" wishlistBtn shadow-lg rounded-pill position-fixed p-2 bottom-0 end-0 mb-3 me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <MdOutlineFavorite className="fs-2" />
                    </button>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title fw-bold m-auto" id="offcanvasExampleLabel">WishList</h5>
                            <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {list?.wishList.map((book, index) => (
                                <tr className="fw-bold">
                                    <td className="fs-5">{index + 1}</td>
                                    <td>
                                        <img className="mx-2 mb-3" src={book.volumeInfo?.imageLinks !== undefined ? book.volumeInfo?.imageLinks?.thumbnail : "https://via.placeholder.com/150"} alt={book.title} />
                                    </td>
                                    <td>
                                        {book.volumeInfo?.title.length > 25 ? book.volumeInfo?.title.substring(0, 25) + "..." : book.volumeInfo?.title}
                                    </td>
                                    <td>
                                        <AiOutlineClose
                                            onClick={() => { handleRemoveFromWishlist(book) }}
                                            className=" btn-danger ms-2 fs-4 rounded " />
                                    </td>

                                </tr>
                            ))}
                        </div>
                    </div>
                </p>
                : ''}
        </div>
    )
}
export default Wishlist

