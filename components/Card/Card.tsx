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
    <div className="card bg-slate-200 shadow-xl">
      <div className="relative overflow-hidden">
            <Image
              className="card-image w-full object-cover"
              src={image == null ? placeholder : image}
              alt="Thumbnail"
              width={624}
              height={386}
              priority
            />
      </div>
      <div className="card-body gap-0">
        <h2 className="card-title text-2xl font-bold line-clamp-1">
        {href && (
            <Link href={href}>
            {title}
            </Link>
          )}
        </h2>
        <p className="mt-2 line-clamp-3">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
