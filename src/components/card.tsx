type CardProps = {
  cardName: string;
  cardIcon: React.ReactElement;
  children: React.ReactElement;
};

export default function Card({ cardName, cardIcon, children }: CardProps) {
  return (
    <section className='flex flex-col gap-2 text-black/70'>
      <div className='flex items-center gap-2 font-bold text-lg'>
        <div>{cardIcon}</div>
        <h1>{cardName}</h1>
      </div>
      <div className='min-h-64 max-w-64 p-4 bg-white rounded-md border-[1px] border-black/5 shadow-2xs hover:shadow-xs transition-all duration-300'>
        {children}
      </div>
    </section>
  );
}
