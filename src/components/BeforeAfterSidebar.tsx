import {Box, Slider} from "@mui/material";
import {useState} from "react";
import {Images} from "../App";

export function BeforeAfterSidebar(props: Images) {
    const [edited, setEdited] = useState(100)
    return <Box p={1}>
        <Box position="relative" display="inline-block">
            <img
                src={props.before}
                style={{borderRadius: "15px"}}
            />
            <img
                src={props.after}
                style={{
                    position: "absolute", top: 0, left: 0,
                    opacity: edited / 100,
                    borderRadius: "15px",
                    width: "100%"
                }}
            />
        </Box>

        {/* @ts-ignore*/}
        <Slider aria-label="Volume" value={edited} onChange={(e) => setEdited(e.target.value)}/>
    </Box>
}
