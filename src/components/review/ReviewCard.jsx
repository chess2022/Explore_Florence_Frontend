import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewCard({activityReview, createReview, updateReview, deleteReview}) {
    return (
      <div>
        <div className="review--formContainer">
          <ReviewForm 
                      createReview ={createReview}
                      />
        </div>
        <ReviewList activityReview={activityReview}
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
      </div>
    );
}