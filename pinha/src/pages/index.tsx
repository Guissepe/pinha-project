import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import { LandP } from './sections/Landpage';
import HowWeWork from "./sections/examples";
import { Cards } from "./sections/cards";
import { GetStaticProps } from 'next';
import Page from './pagePrismic/pagePrismic';



export default function Home() {
  return (
      <Box>
        <LandP/>
        <Cards/>
        <HowWeWork/>
      </Box>
  )
}
