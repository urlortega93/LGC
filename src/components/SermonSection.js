import React from 'react';
import { getSermons } from '../mock/sermons';
import SermonArchive from './SermonArchive';

const SermonSection = ({ isAdmin }) => {
  const latestSermon = getSermons()[0];
  
  return (
    <section className="bg-white">
      <SermonArchive isAdmin={isAdmin} />
    </section>
  );
};

export default SermonSection;

// DONE