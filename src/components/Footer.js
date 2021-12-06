import React from 'react'

export default function Footer() {
    return (
        <footer className="text-muted py-3 bg-white mt-3">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-circle-fill fs-1" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></a>
                </p>
                <p className="mb-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem enim veniam dolore molestias,                   
                </p>
                <p>Created by <a href='https://www.hagmir.com' target='_blank'>Hassan Agmir</a></p>

            </div>
        </footer>
    )
}
