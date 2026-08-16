import { Suspense } from "react";

type Params = {
    id: string;
};



async function Blog({params}: { params: Params }) {
    const { id } = await params;
    return (
        <div>
            <h1>Blog Detail Page</h1>
            <p>ID: {id} </p>
        </div>
    );
}  function BlogDetail({ params }: { params: Params }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Blog params={params} />
        </Suspense>
    );
}

export default BlogDetail;