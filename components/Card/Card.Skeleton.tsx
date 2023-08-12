import Image from 'next/image';
import placeholder from '/public/thumbnail-placeholder.svg'

function CardSkeleton() {
  return (
    <>
      <div className="flex-1">
            <Image
              className="w-full object-cover"
              src={placeholder}
              alt="Thumbnail"
              width={0}
              height={0}
              priority
            />
      </div>
      <div className="p-4">
        <div className="mt-1 h-5 w-5/6 rounded-lg bg-slate-100" />
        <div className="mt-4 h-12 rounded-lg bg-slate-100" />
      </div>
    </>
  );
}

export default CardSkeleton;
