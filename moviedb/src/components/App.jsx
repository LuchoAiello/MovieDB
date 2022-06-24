import MovieBox from "./MovieBox";
import HeaderContent from "./HeaderContent";
import FooderContent from "./FooderContent";
import '../assets/css/app.css'

function App() {
    return (
    <>
    <div className='contentBox'>
    <HeaderContent />
    <MovieBox />
    <FooderContent/>
    </div>
    </>
    )
}

export default App;