import Image from 'next/image';
import HomeHeader from './components/HomeHeader';
import HomeSearch from './components/HomeSearch';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-36 justify-center'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='logo'
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
    </>
  );
}
