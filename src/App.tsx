import './App.css';
import 'react-before-after-slider-component/dist/build.css';
import {BeforeAfter} from "./components/BeforeAfter";
import {BeforeAfterSidebar} from "./components/BeforeAfterSidebar";
import {Tab, Tabs} from '@mui/material';
import {useState} from "react";

const images = {
    before: "https://eventodev-cdn-c3dfhva7grfmffcx.z01.azurefd.net/images/originals/Medium/4f16bdb2-e256-4e4c-bc8f-f7adaa16e7dc.webp",
    after: "https://eventodev-cdn-c3dfhva7grfmffcx.z01.azurefd.net/images/edited/Medium/4f16bdb2-e256-4e4c-bc8f-f7adaa16e7dc.webp"
}
export type Images = typeof images

function App() {
    const [nav, setNav] = useState("0")
    return (
        <div className="App">
            <Tabs
                value={nav}
                onChange={(e, value) => { // @ts-ignore
                    setNav(value);
                }}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="0" label="Before After Slider" />
                <Tab value="1" label="Before After" />
            </Tabs>
            {nav === "0" && <BeforeAfterSidebar {...images} />}
            {nav === "1" && <BeforeAfter {...images}/>}
        </div>
    );
}

export default App;
