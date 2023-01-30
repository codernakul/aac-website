import React from 'react'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
    return (
        <div class="flex flex-col">
            <BlogCard blogtitle='A Blog' author='Nakul' date='30-01-2023' blogcontent='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia' />
            <BlogCard blogtitle='A Blog' author='Nakul' date='30-01-2023' blogcontent='Content goes here' />
            <BlogCard blogtitle='A Blog' author='Nakul' date='30-01-2023' blogcontent='Content goes here' />
        </div>
    )
}

export default Blogs