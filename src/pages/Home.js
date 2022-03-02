import { 
    AboutMaterials, 
    Promo, 
    Header, 
    GetPrice, 
    Populars,
    Features,
    Footer
}
from "../components"

export const Home = () => {
    return(
        <>
            <Header/>
            <Promo/>
            <AboutMaterials/>
            <GetPrice/>
            <Populars/>
            <Features/>
            <Footer/>
        </>
    )
}