function CardSkeleton() {
  return (
    <div className="card bg-slate-200 shadow-xl">
      <div className="card-body animate-pulse gap-0">
        <div className="mt-2 h-8 rounded-lg bg-slate-100" />
        <div className="mt-2 h-5 rounded-lg bg-slate-100" />
        <div className="mt-1 h-5 w-5/6 rounded-lg bg-slate-100" />
        <div className="mt-1 h-5 w-1/2 rounded-lg bg-slate-100" />
        <div className="mt-4 h-12 rounded-lg bg-slate-100" />
      </div>
    </div>
  );
}

export default CardSkeleton;
