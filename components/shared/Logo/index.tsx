import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a >
        <Image src="/assets/logo.png" alt="Logo FireGame" width={220} height={40} />
      </a>
    </Link>
  )
}

export default Logo;