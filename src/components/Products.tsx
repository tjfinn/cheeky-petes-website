'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  titleSvg: string;
  image: string;
  description: string;
  bgColor: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Strawberries and Cream',
    titleSvg: '/lockups/STRAWBERRY AND CREAM.svg',
    image: '/images/Frame 33043.png',
    description: 'CREAMY, FRUITY, AND VERY GOOD AT KEEPING MORNINGS CIVILISED.',
    bgColor: 'bg-[#FF6F98]',
  },
  {
    id: 2,
    name: 'Coconut Chocolate',
    titleSvg: '/lockups/COCONUT CHOC.svg',
    image: '/images/Frame 33044.png',
    description: 'CHOCOLATEY COMFORT MINUS THE CRASH.',
    bgColor: 'bg-[#A99CD1]',
  },
  {
    id: 3,
    name: 'Peanut Butter',
    titleSvg: '/lockups/PEANUT BUTTER.svg',
    image: '/images/Frame 33045.png',
    description: 'NUTTY, FILLING, AND A FAVOURITE WITH BIG APPETITES.',
    bgColor: 'bg-[#F5A623]',
  },
  {
    id: 4,
    name: 'Banana Pancake',
    titleSvg: '/lockups/BANNANA PANCAKE.svg',
    image: '/images/Frame 33046.png',
    description: 'BREAKFAST VIBES, WEEKDAY-READY.',
    bgColor: 'bg-[#8BC34A]',
  },
];

export default function Products() {
  return (
    <section id="products" className="pt-16 md:pt-24 bg-cream scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16 px-4">
        <Image
          src="/lockups/strawberry-title.svg"
          alt="Find Their Favourites"
          width={400}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="font-haggler font-medium text-[#FF6F98] text-lg md:text-xl uppercase tracking-wide">
          FOUR FLAVOURS. ONE SMOOTH START.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-3 md:px-4 lg:px-6">
        {products.map((product) => (
          <div key={product.id} className={`${product.bgColor} p-4 flex flex-col group cursor-pointer transition-all duration-300 ease-out hover:scale-[1.005] hover:shadow-sm`}>
            {/* Title SVG - centered */}
            <div className="relative h-18 md:h-20 lg:h-24 mb-3">
              <Image
                src={product.titleSvg}
                alt={product.name}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Product Image - with margin */}
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Description */}
            <p className="font-haggler font-bold text-brown text-sm uppercase leading-snug mb-3">
              {product.description}
            </p>

            {/* Button */}
            <Link href={`/products/${product.id}`} className="inline-block mt-auto">
              <Image
                src="/lockups/BUTTON.svg"
                alt="Discover More"
                width={110}
                height={30}
                className="h-auto transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Grass and clouds decoration with text behind */}
      <div className="relative w-full mt-12">
        {/* Breakfast text - behind the grass */}
        <div className="absolute left-4 md:left-8 lg:left-12 top-[calc(25%-15px)] md:top-[calc(33%-15px)] z-0">
          <Image
            src="/lockups/Frame 33032.svg"
            alt="Breakfast, but make it calm"
            width={622}
            height={374}
            className="w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
        {/* Grass image - on top */}
        <Image
          src="/images/trans_Frame 33043.png"
          alt="Grass and clouds"
          width={1920}
          height={600}
          className="w-full h-auto relative z-10"
        />
      </div>
    </section>
  );
}
