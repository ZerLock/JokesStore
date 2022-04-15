import { useEffect, useState } from 'react';
import { Text, Center, Button, HStack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const Favourites = (): JSX.Element => {
    const swipe = useSwiper();
    const [ saved, setSaved ] = useState<Array<string>>([]);

    useEffect(() => {
        (async () => {
            setSaved(localStorage.getItem("savedJokes")?.slice(0, -1).split("|") || []);
        })();
    }, []);

    return (
        <>
            <Center
                backgroundImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+"
                h="100vh"
            >
                <Link to="/">
                    <Button
                        position="fixed"
                        top="1%"
                        left="1%"
                    >
                        <HStack spacing="5%">
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <Text>Back to Home</Text>
                        </HStack>
                    </Button>
                </Link>
                {(saved.length > 0) ?
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        centeredSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        {saved.map( (joke: string) => (
                            <SwiperSlide>
                                <Center
                                    padding="5%"
                                    color="white"
                                    fontSize="3xl"
                                    marginTop="2%"
                                >
                                    <Text
                                        w="75%"
                                        padding="5%"
                                        bg="blue.500"
                                        borderRadius="25px"
                                    >
                                        {joke}
                                    </Text>
                                </Center>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                :
                    <Text
                        fontWeight="bold"
                        fontSize="5xl"
                    >
                        <HStack spacing="5%">
                            <FontAwesomeIcon size="2x" icon={faSadCry} />
                            <Text>You don't have any saved jokes !</Text>
                        </HStack>
                    </Text>
                }
            </Center>
        </>
    );
};

export default Favourites;