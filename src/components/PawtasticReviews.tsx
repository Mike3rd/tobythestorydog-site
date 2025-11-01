export default function PawtasticReviews() {
  return (
<section className="max-w-3xl mx-auto py-16 px-4">
  <h2 className="text-3xl font-fredoka text-orange-600 mb-8 text-center">
    Pawtastic Reviews
  </h2>

  <div className="space-y-8">
    {/* Review 1 */}
    <div className="flex items-start space-x-4">
      <img
        src="/reviewers/buddy.jpg"
        alt="Buddy the Beagle"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div className="text-gray-700">
        <p className="italic">
          “Best book I ever chewed on — I mean, read!”
        </p>
        <p className="mt-1 font-semibold">
          – Buddy the Beagle <span className="text-sm font-normal">(Professional Sniffer)</span>
        </p>
      </div>
    </div>

    {/* Review 2 */}
    <div className="flex items-start space-x-4">
      <img
        src="/reviewers/luna.jpg"
        alt="Luna the Labrador"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div className="text-gray-700">
        <p className="italic">
          “It made my human cry and give me extra treats. I call that literature.”
        </p>
        <p className="mt-1 font-semibold">
          – Luna the Labrador <span className="text-sm font-normal">(Table Surfer Extraordinaire)</span>
        </p>
      </div>
    </div>

    {/* Review 3 */}
    <div className="flex items-start space-x-4">
      <img
        src="/reviewers/max.jpg"
        alt="Max the Golden Retriever"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div className="text-gray-700">
        <p className="italic">
          “Finally, a story where the dog gets the spotlight! I wagged through every page. Would chase squirrels with Toby. 10/10!”
        </p>
        <p className="mt-1 font-semibold">
          – Max the Golden Retriever <span className="text-sm font-normal">(Fetch Fanatic)</span>
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
