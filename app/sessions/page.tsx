export default function SessionsPage() {
  return (
    <main className="bg-[#181818] text-[#e6e6e6]">

      {/* HERO */}
      <section className="min-h-[70vh] flex items-end px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Sessions
          </p>

          <h1 className="mt-6 text-3xl md:text-5xl font-light leading-tight">
            Recording built around time in the room, not fixed outcomes.
          </h1>

          <p className="mt-6 text-sm text-zinc-400 leading-relaxed">
            Most work happens in extended blocks—full days or weekends—where tracking,
            listening, and decision-making happen together rather than in isolated stages.
          </p>

        </div>
      </section>

      {/* TIME / STRUCTURE */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

        <div className="max-w-3xl space-y-10">

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
              Time
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Sessions typically run as full-day blocks (6–12 hours) or weekend
              tracking periods. Weekday evenings are used for overdubs, edits,
              and follow-up decisions.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
              Structure
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Projects often span multiple weekends depending on scale. Tracking
              is followed by revision time, arrangement refinement, and extended
              mixing phases when needed.
            </p>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

        <div className="max-w-3xl space-y-10">

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
              Tracking
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Most artists arrive with material in progress. Sessions are used to
              discover how the work behaves in real time. Takes are explored,
              repeated when useful, and sometimes combined or reshaped if it serves
              the record.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
              Decision-making
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Decisions are made collaboratively, especially during foundational
              tracking. When there is disagreement, the focus stays on listening
              back, adjusting, and moving toward clarity rather than forcing outcomes.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-3">
              Editing / Production
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Editing, arrangement changes, and early mix decisions can happen
              during tracking when useful. This includes timing adjustments,
              layering, and structural refinement where it supports the intent
              of the material.
            </p>
          </div>

        </div>
      </section>

      {/* ROLE */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

        <div className="max-w-3xl space-y-8">

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Approach
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            The engineering role is focused on capturing performance, shaping sound,
            and supporting decisions as they emerge in the room. Input is responsive
            rather than prescriptive, and adapts to the needs of each project.
          </p>

          <p className="text-sm text-zinc-500 leading-relaxed">
            Instruments and setups are used as the starting point. Adjustments,
            samples, or structural changes are introduced only when they serve the
            direction of the work.
          </p>

        </div>
      </section>

      {/* FIT */}
      <section className="px-8 md:px-16 lg:px-24 py-28 border-t border-[#2f2f2f]">

        <div className="max-w-3xl space-y-6">

          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Fit
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            This environment works best with artists who are actively engaged in
            shaping their material, open to iteration, and willing to spend time
            refining performances and decisions.
          </p>

          <p className="text-sm text-zinc-500 leading-relaxed">
            It is not designed for fast, transactional recording or pre-packaged
            production workflows.
          </p>

        </div>
      </section>

      {/* CLOSING */}
      <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-[#2f2f2f]">

        <div className="max-w-2xl">

          <p className="text-sm text-zinc-400 leading-relaxed">
            Each project defines its own working relationship. The aim is a record
            that reflects what actually happened in the room, shaped through shared
            attention and sustained collaboration.
          </p>

        </div>
      </section>

    </main>
  );
}