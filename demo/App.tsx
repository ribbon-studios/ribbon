import { useReadOnlyCachedState } from '@ribbon-studios/react-utils';
import { Ribbon } from '../src';
import { useState } from 'react';

type Banner = {
  label: string;
  backgroundColor: string;
  color?: string;
};

const banners: Banner[] = [
  {
    label: 'local',
    backgroundColor: '#66BB6A',
  },
  {
    label: 'review',
    backgroundColor: '#7B1FA2',
    color: 'white',
  },
  {
    label: 'alpha',
    backgroundColor: '#2196F3',
  },
];

export function App() {
  const [index, setIndex] = useState(0);
  const banner = useReadOnlyCachedState(() => {
    return banners[index];
  }, [index]);

  return (
    <div>
      <Ribbon
        backgroundColor={banner.backgroundColor}
        color={banner.color}
        onClick={() => setIndex((index + 1) % banners.length)}
      >
        {banner.label}
      </Ribbon>
    </div>
  );
}
