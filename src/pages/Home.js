import Body from '../components/Body';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Side from '../components/Side';





function Home() {
    return (
        <div>
            <div className="container-fluid p-0">
                <Header />
            </div>
            <main className="container-fluid p-0 m-0">
                <div className="row g-5 w-100 p-0 m-0">
                    <Filter />
                    <Body />
                    <Side />
                </div>

            </main>

            <Footer />
        </div>
    )
}

export default Home;