type TestimonialCardProps = {
  name: string;
  text: string;
  rating: number;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <article className="dark-card relative overflow-hidden rounded-3xl p-5">
      <span className="absolute right-5 top-2 text-5xl font-serif text-white/10">"</span>
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #7621B0 0%, #B600A8 100%)' }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>
        <div>
          <h3 className="text-sm font-medium text-white">{name}</h3>
          <div className="mt-0.5 text-xs tracking-[0.15em] text-[#BBCCD7]" aria-label={`${rating} estrelas`}>
            {'★'.repeat(rating)}
          </div>
        </div>
      </div>
      <p className="text-sm font-light leading-relaxed text-[#A8ADB3]">{text}</p>
    </article>
  );
}
