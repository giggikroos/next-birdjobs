import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src={'/images/logo/logo.svg'}
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};
export default Logo;
