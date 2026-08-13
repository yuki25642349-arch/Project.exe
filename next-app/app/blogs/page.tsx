import axios from "axios";
import { MicrocmsResponse } from "@/domain/Article";
import Image from "next/image";
const Blogs = async () => {
    const getBlogs = async () => {
        const response = await axios.get<MicrocmsResponse>(
            "https://projectexe.microcms.io/api/v1/blogs", {
            headers: {
                "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
            }
        }
        );
        return response.data.contents.map((item) => ({
            id: item.id,
            title: item.title,
            url: `/blogs/${item.id}`,
            image: item.eyecatch.url
        }));
    }
    const blogs = await getBlogs();
    return (
        <div>
            <h1>Blogs Page</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Image src={blog.image} width={100} height={100} alt="" />
                        <a href={blog.url}>
                            {blog.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Blogs;
