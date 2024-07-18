import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <Header title="Our Recipes" bgClass="bg-image">
            <Button 
                content="SEARCH RECIPES"
                color="primary"
                as={Link}
                to="/recipes"
                size="bg"
            />
        </Header>
        );
}

export default Home;