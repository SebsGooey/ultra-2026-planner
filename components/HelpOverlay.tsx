"use client";

interface HelpOverlayProps {
  onClose: () => void;
}

export default function HelpOverlay({ onClose }: HelpOverlayProps) {
  return (
    <div className="max-w-lg mx-auto px-5 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          How to Use
        </h2>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-lg"
          aria-label="Close help"
        >
          &times;
        </button>
      </div>

      {/* Install on iPhone */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm flex-shrink-0">1</span>
          <h3 className="text-sm font-semibold text-white">Install on Your iPhone</h3>
        </div>
        <div className="ml-9 space-y-2 text-sm text-gray-400 leading-relaxed">
          <p>This app works offline once installed &mdash; perfect for the festival where there&apos;s no signal.</p>
          <ol className="list-none space-y-2.5 mt-3">
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">a.</span>
              <span>Open this page in <strong className="text-white">Safari</strong> (not Chrome &mdash; Add to Home Screen only works in Safari on iOS).</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">b.</span>
              <span>Tap the <strong className="text-white">Share button</strong> (the square with an arrow pointing up) at the bottom of Safari.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">c.</span>
              <span>Scroll down and tap <strong className="text-white">&ldquo;Add to Home Screen&rdquo;</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">d.</span>
              <span>Tap <strong className="text-white">&ldquo;Add&rdquo;</strong>. The app now appears on your home screen and works without internet.</span>
            </li>
          </ol>
          <div className="mt-3 p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
            <p className="text-yellow-400/90 text-xs">
              <strong>Tip:</strong> Browse all 3 days and the map before going offline so everything gets cached.
            </p>
          </div>
        </div>
      </section>

      {/* Favoriting Artists */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm flex-shrink-0">2</span>
          <h3 className="text-sm font-semibold text-white">Build Your Schedule</h3>
        </div>
        <div className="ml-9 space-y-2 text-sm text-gray-400 leading-relaxed">
          <p>In the <strong className="text-white">Lineup</strong> tab, browse artists by day and stage. Tap the <span className="text-pink-400">&#9825;</span> heart on any artist to favorite them.</p>
          <p>Switch to the <strong className="text-white">Schedule</strong> tab to see only your picks in order. If two artists overlap, you&apos;ll see an orange <span className="text-orange-400">&#9888; Conflict</span> warning.</p>
        </div>
      </section>

      {/* Sharing with Friends */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm flex-shrink-0">3</span>
          <h3 className="text-sm font-semibold text-white">Share with Friends</h3>
        </div>
        <div className="ml-9 space-y-2 text-sm text-gray-400 leading-relaxed">
          <p className="font-medium text-white text-xs uppercase tracking-wide mb-1">Exporting your schedule:</p>
          <ol className="list-none space-y-2">
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">a.</span>
              <span>Go to the <strong className="text-white">Friends</strong> tab.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">b.</span>
              <span>Tap <strong className="text-white">&ldquo;Export Mine&rdquo;</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">c.</span>
              <span>Tap <strong className="text-white">&ldquo;Copy to Clipboard&rdquo;</strong> and paste the code into your group chat.</span>
            </li>
          </ol>

          <p className="font-medium text-white text-xs uppercase tracking-wide mt-4 mb-1">Importing a friend&apos;s schedule:</p>
          <ol className="list-none space-y-2">
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">a.</span>
              <span>In the <strong className="text-white">Friends</strong> tab, tap <strong className="text-white">&ldquo;+ Import&rdquo;</strong>.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">b.</span>
              <span>Enter their name and paste the code they sent you.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400 font-mono text-xs mt-0.5 flex-shrink-0">c.</span>
              <span>Tap <strong className="text-white">&ldquo;Import Schedule&rdquo;</strong>. You can now browse their picks and see where you overlap.</span>
            </li>
          </ol>

          <div className="mt-3 p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-lg">
            <p className="text-cyan-400/90 text-xs">
              <strong>Do this before the festival!</strong> You need signal to send codes. Once imported, friend schedules are saved offline.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center text-sm flex-shrink-0">4</span>
          <h3 className="text-sm font-semibold text-white">Quick Reference</h3>
        </div>
        <div className="ml-9 space-y-1.5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-pink-400">&#9829;</span>
            <span>Filled heart = in your favorites</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">&#9825;</span>
            <span>Empty heart = not favorited (tap to add)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">&#x1F91D;</span>
            <span>You &amp; a friend are both seeing this set</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400">&#9888;</span>
            <span>Time conflict between two of your picks</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full inline-block" />
            <span className="text-red-400 ml-0.5">LIVE</span>
            <span>&mdash; this set is happening right now</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center pt-4 pb-8 border-t border-white/5">
        <p className="text-xs text-gray-600">Ultra Music Festival Miami 2026</p>
        <p className="text-xs text-gray-600">March 27&ndash;29 &middot; Bayfront Park</p>
      </div>
    </div>
  );
}
