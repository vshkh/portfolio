import { useState } from "react";
import axios from "axios";
import { Image, Button, Container } from "react-bootstrap";

function LoadAPI() {
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true); // Set loading state to true when the button is clicked

        axios
            .get("http://localhost:4000/testing")
            .then((res) => {
                setMessage(res.data.mssg);
                setImageUrl(res.data.imageUrl); // Set the image URL from the response
                setLoading(false); // Set loading state to false once the request is complete
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); // Stop loading in case of error
            });
    };

    return (
        <Container>
            <Button className="mx-auto d-block" onClick={handleButtonClick} variant="indigo-darkest">
                Get Random Image
            </Button>
            
            {/* Display loading state */}
            {loading && <p>Loading...</p>}

            {/* Display message */}
            <h1 className="text-center">Image for: {message}</h1>

            {/* Display the image only if imageUrl exists */}
            {imageUrl && !loading && (
                <Image
                    src={imageUrl}
                    alt={message}
                    fluid
                    rounded
                    width='500'
                    className="mx-auto d-block"
                />
            )}
        </Container>
    );
}

export default LoadAPI;