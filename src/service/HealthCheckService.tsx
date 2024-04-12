import axios from "axios";


const checkServerStatus = async () => {
    try {
        await axios.get('http://localhost:8080/health');
        return true;
    } catch (error) {
        console.error("Server is down or unreachable.");
        return false;
    }
}

const serverStatusCheckInterval = setInterval(checkServerStatus, 10000);

export default checkServerStatus