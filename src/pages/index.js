import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../UI/general/containers/Header';
import About from '../UI/home/components/About';
import Contact from '../UI/home/components/Contact';
import DistanceTracker from '../UI/home/components/DistanceTracker';
import Landing from '../UI/home/components/Landing';
import Pathfinding from '../UI/home/components/Pathfinding';
import Websites from '../UI/home/components/Websites';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="description"
          content="Jerome De Wulf is an Antwerp based full stack developer with a focus on Front-end development. Experienced in React, React-Native, Angular 2+ and serverless."
        ></meta>
        <title>Freelance developer</title>
      </Helmet>
      <Header></Header>
      <Landing></Landing>
      <Pathfinding></Pathfinding>
      <DistanceTracker></DistanceTracker>
      <Websites></Websites>
      <About></About>
      <Contact></Contact>
    </>
  );
};

export default IndexPage;
