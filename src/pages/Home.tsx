import { useState, useEffect } from 'react';
import { Center, Box, Text, Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faArrowRotateBack, faHeart } from '@fortawesome/free-solid-svg-icons';
import * as env from 'env-var';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = (): JSX.Element => {

    const [ joke, setJoke ] = useState<string>("");
    const [ saved, setSaved ] = useState<string>("");

    useEffect(() => {
        (async () => {
            await refreshJoke();
            if (!localStorage.getItem("savedJokes"))
                localStorage.setItem("savedJokes", "");
            else
                setSaved(localStorage.getItem("savedJokes") || "");
        })();
    }, []);

    const refreshJoke = async () => {
        const newJoke = await getJoke();
        setJoke(newJoke);
    }

    const getJoke = async (): Promise<string> => {
        let newJoke: string;
        const res = await axios.request({
            method: 'GET',
            url: 'https://jokeapi-v2.p.rapidapi.com/joke/Any',
            params: {
                idRange: '0-150',
                blacklistFlags: 'nsfw,racist'
            },
            headers: {
                'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
                'X-RapidAPI-Key': env.get('REACT_APP_API_KEY').required().asString()
            }
        });
        if (res.data.type === "single")
            newJoke = res.data.joke;
        else
            newJoke = res.data.setup + " " + res.data.delivery;
        return newJoke;
    }

    const saveJoke = () => {
        localStorage.setItem("savedJokes", saved + joke + "|");
        setSaved((saved + joke + "|").toString());
        console.log(saved);
        toast.success('Joke saved!', {
            position: "top-right",
        })
    }

    return (
        <>
            <Center
                backgroundImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+"
                display="flex"
                flexDirection="column"
                h='100vh'
            >
                <Text fontWeight="bold" fontSize="5xl">We have a joke for you !</Text>
                <Box
                    w="50%"
                    bg="blue.500"
                    borderRadius="25px"
                    color="white"
                    fontSize="3xl"
                    padding="2%"
                    margin="3%"
                >
                    <Center display="flex" flexDirection="column">
                        <Text marginBottom="2%">{joke}</Text>
                        <HStack spacing="5%" display="flex">
                            <Button disabled={saved.includes(joke)} onClick={() => saveJoke()} bg="red.500" _hover={{bg:"red.600"}}>
                                <HStack spacing="5%">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <Text>Save</Text>
                                </HStack>
                            </Button>
                            <Button
                                onClick={async () => { await refreshJoke(); }}
                                bg="whiteAlpha.500"
                                _hover={{bg:"whiteAlpha.600"}}
                            >
                                <HStack spacing="5%">
                                    <FontAwesomeIcon icon={faArrowRotateBack} />
                                    <Text>Refresh joke</Text>
                                </HStack>
                            </Button>
                        </HStack>
                    </Center>
                </Box>
                <Link to="/favourites">
                    <Button position="fixed" bottom="1%" right="1%" >
                        <HStack spacing="5%">
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            <Text>Saved jokes</Text>
                        </HStack>
                    </Button>
                </Link>
            </Center>
            <ToastContainer />
        </>
    );
};

export default Home;