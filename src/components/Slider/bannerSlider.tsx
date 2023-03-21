import { useContinent } from '@/contexts/ContinentContext';
import { Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/swiper.css';

export function BannerSlider() {
  const { continents } = useContinent();

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.id}>
          <Image
            src={continent.image}
            alt="imagens dos continentes"
            filter="auto"
            brightness="40%"
          />

          <Text
            as={Link}
            href={`/continents/${continent.uid}`}
            position="absolute"
            fontSize={["2xl", "3xl", "5xl"]}
            fontWeight="bold"
            color="gray.100"
            _hover={{ color: "yellow.300" }}
          >
            {continent.name}
          </Text>
          <Text
            as={Link}
            href={`/continents/${continent.uid}`}
            position="absolute"
            bottom={["48", "48", "44"]}
            fontSize={["sm", "md", "2xl"]}
            fontWeight="bold"
            color="gray.100"
            _hover={{ color: "yellow.300" }}
          >
            {continent.subtitle}
          </Text>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}