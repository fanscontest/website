export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20" data-aos="fade-up">
          {/* Section header */}
          <div className="pb-12">
            <h2 className="h2">FAQs</h2>
          </div>

          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Is it really free to play?</h4>
                <p className="text-slate-500">
                  Yes — always. Fans never pay to join a channel or enter a contest. Brands and sponsors fund the rewards. If anyone asks you to pay to participate, please report them; it's not us.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can my brand run a contest?</h4>
                <p className="text-slate-500">
                  Yes. Use the web app to create branded quiz contests, spin up your own channel, and watch real-time participation in the dashboard. Charitable contests are especially welcome.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">How are winners decided?</h4>
                <p className="text-slate-500">
                  By score and speed. Every participant starts at the contest's scheduled start time. The highest scores in the fastest time take the rewards — accuracy under pressure.
                </p>
              </div>
            </div>

            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Can I play for a charity?</h4>
                <p className="text-slate-500">
                  Yes. When you enrol, choose to participate on behalf of a Nonprofit Organization (NPO) instead of yourself. If you win, the reward goes to them.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">When do I get my reward?</h4>
                <p className="text-slate-500">
                  Rewards are dispatched within 24 hours of the contest closing. You'll be notified in the app. Available rewards depend on your region.
                </p>
              </div>

              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Is this gambling?</h4>
                <p className="text-slate-500">
                  No. Fans Contest is skill-based and gambling is strictly prohibited. Accounts caught using the platform for gambling are banned and may face legal action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
