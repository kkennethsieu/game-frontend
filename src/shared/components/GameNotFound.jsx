export default function GameNotFound({
  title = "Game not found",
  message = "We couldn't find the game you're looking for.",
  suggestions = ["Browse new releases", "Search library", "Top rated"],
  onBack,
}) {
  return (
    <section
      className="bg-gradient-to-br from-orange-50/60 to-white shadow-lg mx-auto p-6 sm:p-10 rounded-2xl ring-1 ring-orange-100 max-w-4xl"
      aria-labelledby="gnf-title"
      role="region"
    >
      <div className="items-center gap-6 grid grid-cols-1 md:grid-cols-2">
        {/* Illustration / Visual */}
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center items-center bg-white/80 shadow-md rounded-xl ring-1 ring-orange-50 w-56 h-56">
            {/* Controller SVG with orange accents */}
            <svg
              viewBox="0 0 120 120"
              className="w-40 h-40"
              aria-hidden
              focusable="false"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffedd5" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="6"
                    stdDeviation="10"
                    floodColor="#fb923c"
                    floodOpacity="0.12"
                  />
                </filter>
              </defs>

              <g filter="url(#shadow)">
                <rect
                  x="12"
                  y="32"
                  rx="12"
                  ry="12"
                  width="96"
                  height="56"
                  fill="url(#g1)"
                />
                {/* Buttons */}
                <circle cx="36" cy="58" r="6" fill="#fff" opacity="0.96" />
                <circle cx="48" cy="46" r="4" fill="#fff" opacity="0.96" />
                <circle cx="48" cy="70" r="4" fill="#fff" opacity="0.96" />
                <circle cx="72" cy="58" r="6" fill="#fff" opacity="0.96" />
                {/* D-pad */}
                <path
                  d="M30 46h12v4H30zM36 40v12h4V40z"
                  fill="#374151"
                  opacity="0.9"
                />
                {/* tiny shine */}
                <ellipse
                  cx="36"
                  cy="40"
                  rx="16"
                  ry="6"
                  fill="#fff"
                  opacity="0.06"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <h2
            id="gnf-title"
            className="font-extrabold text-slate-900 text-2xl sm:text-3xl"
          >
            {title}
          </h2>

          <p className="text-slate-600 leading-relaxed">{message}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                className="inline-flex items-center gap-2 bg-orange-50/70 hover:bg-orange-100 px-3 py-1.5 rounded-full ring-1 ring-orange-100 font-medium text-orange-700 text-sm transition"
                onClick={() => {
                  /* default: try a basic search in current tab — users can override */
                  const q = encodeURIComponent(s);
                  window.location.href = `/search?q=${q}`;
                }}
              >
                {/* small dot */}
                <span
                  className="inline-block bg-orange-600 rounded-full w-2 h-2"
                  aria-hidden
                />
                <span>{s}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-orange-600 shadow-sm hover:shadow-md px-4 py-2 rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 font-semibold text-white active:scale-95 transition hover:translate-y-0.5 transform"
            >
              {/* Back icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to library
            </button>
          </div>

          <div className="mt-3 text-slate-400 text-xs">
            Tip: try searching by game name for better matches.
          </div>
        </div>
      </div>
    </section>
  );
}
