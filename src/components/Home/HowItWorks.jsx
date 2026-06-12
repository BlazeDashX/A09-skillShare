const HowItWorks = () => {
  return (
    <div>
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black text-base-content">
            The Exchange Sequence
          </h2>
          <p className="text-base-content/60 font-medium text-sm md:text-base">
            Three mechanical stages to unlock professional collaborative engineering growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-4 shadow-sm relative overflow-hidden">
            <span className="absolute -right-4 -top-6 text-8xl font-black text-primary/10 opacity-90 select-none">
              1
            </span>
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xl shadow-inner">
              🔍
            </div>
            <h3 className="text-xl font-bold text-base-content">
              Isolate Target Knowledge
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed font-medium">
              Filter through structural parameters to find the programmatic competency tag you require to scale your current engineering system dependencies.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-4 shadow-sm relative overflow-hidden">
            {/* Changed from text-primary/10 to text-secondary/10 */}
            <span className="absolute -right-4 -top-6 text-8xl font-black text-secondary/10 opacity-90 select-none">
              2
            </span>
            <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-black text-xl shadow-inner">
              🤝
            </div>
            <h3 className="text-xl font-bold text-base-content">
              Lock The Swap Contract
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed font-medium">
              Submit an interactive handshake request to the specialist. Offer access to an equivalent technical domain value from your own portfolio space.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-4 shadow-sm relative overflow-hidden">
            {/* Changed from text-primary/10 to text-success/10 */}
            <span className="absolute -right-4 -top-6 text-8xl font-black text-success/10 opacity-90 select-none">
              3
            </span>
            <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center font-black text-xl shadow-inner">
              🚀
            </div>
            <h3 className="text-xl font-bold text-base-content">
              Execute Synchronous Code
            </h3>
            <p className="text-sm text-base-content/70 leading-relaxed font-medium">
              Enter the interactive sandbox session room together to audit files, clear operational blockers, and build practical expertise records.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;