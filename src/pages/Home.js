import React from 'react';
import Body from '../components/Body';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Side from '../components/Side';


function Home(){
    return(
        <div>
            <div className="container-fluid p-0">
                <Header />
                <Nav />
            </div>

            <main className="container-fluid m-0">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="row g-5">
                <Filter />
                
                <Body />

                <Side />
                




            </div>

            </main>

            <footer className="blog-footer">
            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <a href="#">Back to top</a>
            </p>
            </footer>
        </div>
    )
}

export default Home;