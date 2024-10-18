import { useContext } from "react"
import { Context } from "./CommentContext"

export default function UserInput() {
   const {
      currentUser,
      newComment,
      handleCommentInputChange,
      postNewComment,
   } = useContext(Context)


   function handleSubmit(e) {
      e.preventDefault();

      postNewComment();
   }

   return (
      currentUser &&
      <form onSubmit={handleSubmit} className="input-section">
         <img src={currentUser.image} alt="User Image" />
         <label htmlFor="add-comment" className="sr-only">اضف تلعيق</label>
         <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            name="commentInput"
            id="add-comment"
            onChange={(e) => handleCommentInputChange(e.target.value)}
         />
         <button className="send-btn custom-btn">اضف</button>
      </form>
   )
}