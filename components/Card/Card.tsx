import Image from 'next/image';
import placeholder from '/public/thumbnail-placeholder.svg'
import Link from 'next/link';

type CardProps = {
  image: string;
  title: string;
  desc: string;
  href?: string;
};

function Card({ image, title, desc, href }: CardProps) {
  return (
    <>
      <div className="flex-1">
            <Image
              className="w-full h-auto"
              src={image == null ? placeholder : image}
              alt="Thumbnail"
              priority
            />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold line-clamp-1">
        {href && (
            <Link href={href}>
            {title}
            </Link>
          )}
        </h2>
        <p className="mt-2 line-clamp-3">{desc}</p>
      </div>
    </>
  );
}

export default Card;
