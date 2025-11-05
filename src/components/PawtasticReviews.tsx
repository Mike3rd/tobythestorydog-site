import Image from "next/image";

export default function PawtasticReviews() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-fredoka text-orange mb-8 text-center">
        PAW-sitive Reviews
      </h2>

      <div className="space-y-8">
        {/* Review 1 */}
        <div className="flex items-start space-x-4">
          <Image
            src="/reviewers/beagle.webp"
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
              – Buddy the Beagle{" "}
              <span className="text-sm font-normal">
                (Professional Sniffer)
              </span>
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="flex items-start space-x-4">
          <Image
            src="/reviewers/dachsund.webp"
            alt="Milo the Dachshund"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            width={50}
            height={50}
          />
          <div className="text-gray-700">
            <p className="italic">
              “It made my human cry and give me extra treats. I call that
              literature.”
            </p>
            <p className="mt-1 font-semibold">
              – Milo the Dachshund,{" "}
              <span className="text-sm font-normal">(Literary Critic)</span>
            </p>
          </div>
        </div>

        {/* Review 3 */}
        <div className="flex items-start space-x-4">
          <Image
            src="/reviewers/cleo.webp"
            alt="Cleo the Cat"
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            width={50}
            height={50}
          />
          <div className="text-gray-700">
            <p className="italic">
              “Purrhaps the only dog story I actually approve of. I didn’t even
              knock it off the table. High praise.”
            </p>
            <p className="mt-1 font-semibold">
              – Cleo the Cat,{" "}
              <span className="text-sm font-normal">(Queen of the Couch)</span>
            </p>
          </div>
        </div>

        {/* Review 4 */}
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
              “A Chihuahua hero? Finally—a hero my size! I yipped, I wagged, I
              fell off the couch. Viva las Chihuahuas!”
            </p>
            <p className="mt-1 font-semibold">
              – Chico the Chihuahua{" "}
              <span className="text-sm font-normal">
                (Founder: Ban Vacuums Forever)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
