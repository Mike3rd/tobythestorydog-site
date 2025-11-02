import Image from "next/image";

export default function PawtasticReviews() {
  return (
<section className="max-w-3xl mx-auto py-16 px-4">
  <h2 className="text-3xl font-fredoka text-orange-600 mb-8 text-center">
    PAWS-itive Reviews
  </h2>

  <div className="space-y-8">
    {/* Review 1 */}
    <div className="flex items-start space-x-4">
      <Image
        src="/reviewers/chihuahua.webp"
        alt="Buddy the Beagle"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        width={50}
        height={50}
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
      <Image
        src="/reviewers/chihuahua.webp"
        alt="Luna the Labrador"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
       width={50}
        height={50}
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
      <Image
        src="/reviewers/chihuahua.webp"
        alt="Chico the Chihuahua"
        className="w-16 h-16 rounded-full object-cover flex-shrink-0 drop-shadow"
        width={50}
        height={50}
      />
      <div className="text-gray-700">
        <p className="italic">
          “A Chihuahua hero? Finally—a hero my size! I yipped, I wagged, I fell off the couch. Viva las Chihuahuas!”
        </p>
        <p className="mt-1 font-semibold">
          – Chico the Chihuahua <span className="text-sm font-normal">(Founder: Ban Vacuums Forever)</span>
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
