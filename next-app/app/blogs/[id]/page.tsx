type Params = {
    id: string;
};

async function BlogDetail({params}: { params: Params }) {
    const { id } = await params;
    return (
        <div>
            <h1>Blog Detail Page</h1>
            <p>ID: {id}</p>
        </div>
    );
}   
export default BlogDetail;