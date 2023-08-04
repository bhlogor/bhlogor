import Link from 'next/link';

type CardProps = {
  title: string;
  desc: string;
  href?: string;
};

function Card({ title, desc, href }: CardProps) {
  return (
    <div className="card bg-base-300 shadow-xl">
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
