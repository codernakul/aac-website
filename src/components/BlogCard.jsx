import React from 'react'

const BlogCard = (props) => {
    return (
        <div class="flex justify-center px-3">
            <div class="transition ease-in-out hover:scale-105 delay-250 w-3/4 m-3 rounded-md p-8 bg-blue-50 shadow hover:shadow-xl">
                <a href="#">
                    <h5 class="text-2xl mb-1 font-bold tracking-tight text-[#241e1e]">{props.blogtitle}</h5>
                </a>
                <p class="mb-2 text-sm text-blue-600">{props.author}, {props.date}</p>
                <p class="mb-3 font-normal text-sm text-[#241e1e]">{props.blogcontent}</p>
                <a href="#" class="flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-[#241e1e] hover:text-blue-600">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    );
}

export default BlogCard