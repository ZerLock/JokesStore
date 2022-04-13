import { useState, useEffect } from 'react';
import { Center, Box, Text, Button, VStack } from '@chakra-ui/react';
import axios from 'axios';

const Home = (): JSX.Element => {

    const [ joke, setJoke ] = useState('');

    useEffect(() => {
        (async () => {
            const res = await axios.request({
                method: 'GET',
                url: 'https://jokeapi-v2.p.rapidapi.com/joke/Any',
                params: {
                    idRange: '0-150',
                    blacklistFlags: 'nsfw,racist'
                },
                headers: {
                    'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
                    'X-RapidAPI-Key': '09e602f1bemsha1f0480e2d251bap1bd366jsn76abceacd44c'
                }
            });
            if (res.data.type === "single")
                setJoke(res.data.joke);
            else
                setJoke(res.data.setup + " " + res.data.delivery);
        })();
    }, []);

    return (
        <>
            <Center backgroundImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+" display="flex" flexDirection="column" h='100vh'>
                <Text fontSize="4xl">We have a joke for you !</Text>
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
                        <Button bg="red.500" _hover={{bg:"red.600"}}>Save</Button>
                    </Center>
                </Box>
            </Center>
        </>
    );
};

export default Home;