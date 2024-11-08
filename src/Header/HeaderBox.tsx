import { Box, Container } from "@mui/material";
import TopInf from "./TopInfo/TopInf";
import MapComponent from "../Map/MapComponent";

const styles = {
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        border: '5px solid white',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
        marginBottom: '30px',
        borderRadius: '20px'
    },
    mapbox: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingTop: '10px',
    }
}

const HeaderBox: React.FC = () => {
    return (
        <Container sx={styles.container}>
            <Box sx={styles.mapbox}>
                <MapComponent />
            </Box>
            <TopInf />
        </Container>
    );
}

export default HeaderBox;
