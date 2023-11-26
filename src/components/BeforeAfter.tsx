import ReactBeforeSliderComponent from "react-before-after-slider-component";
import {Images} from "../App";
import {Box} from "@mui/material";

export function BeforeAfter(props: Images) {
    return <Box height="70vh" sx={{
        "img": {
            height: "90vh"
        }
    }}>
        <ReactBeforeSliderComponent
            firstImage={{imageUrl: props.before}}
            secondImage={{imageUrl: props.after}}
        />
    </Box>
}
