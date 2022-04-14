import { useEffect, useState } from 'react';
import { Text, Center, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Favourites = (): JSX.Element => {

    const [ jokes, setJokes ] = useState([]);

    useEffect(() => {
        (async () => {
            const storage: any = localStorage.getItem("savedJokes");
            setJokes(JSON.parse(JSON.stringify(storage)));
            console.log(JSON.parse(JSON.stringify(storage)));
        })();
    }, []);

    return (
        <>
            <Center backgroundImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+" h="100vh">
                <Link to="/">
                    <Button position="fixed" top="1%" left="1%">
                        <HStack spacing="5%">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <Text>Back to Home</Text>
                        </HStack>
                    </Button>
                </Link>
                <Text>{(jokes[0] !== null) ? "Joke#1" : "You don't have any saved jokes !"}</Text>
            </Center>
        </>
    );
};

export default Favourites;