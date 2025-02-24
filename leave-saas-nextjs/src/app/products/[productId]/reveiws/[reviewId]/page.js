import { notFound } from "next/navigation";

export default function ReviewDetails( {params} ) {
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return <h1>Review {params.reviewId} for Product {params.productId}</h1>;
}