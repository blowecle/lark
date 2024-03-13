import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Artists from "./Artists";
import ArtistCard from "./ArtistCard";
import Form from "./Form";
import Conduct from "./Conduct";
import Information from "./Information";
import FAQ from "./FAQ";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<ArtistCard />} />
            <Route path="/register" element={<Form />} />
            <Route path="/conduct" element={<Conduct />} />
            <Route path="/information" element={<Information />} />
            <Route path="/FAQ" element={<FAQ />} />
        </Routes>
    )
}

export default Router;