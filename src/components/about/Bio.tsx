export default function Bio() {
  return (
    <div className="xl:gap-18 flex flex-col gap-12">
      <div className="w-full">
        <h2 className="heading-1">Education & Achievements</h2>
      </div>
      <div className="w-full lg:w-10/12">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Indian Institute of Technology Roorkee</h3>
          <p className="body-1 mb-2">B.Tech in Mechanical Engineering (2020 - 2024)</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2">Delhi Public School, Bokaro Steel City</h3>
          <p className="body-1">CBSE, Intermediate: 96%, Matriculate: 92.4% (2020)</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Key Achievements</h3>
          <ul className="body-1 list-disc list-inside space-y-2">
            <li>Fast-tracked to Data Scientist II at Zepto in just 9 months (typical timeline: 18 months)</li>
            <li>Zepto Spotlight Award for the month of July 2024 for making a significant impact</li>
            <li>AIR 3159 in JEE Advanced (2020) among 250K candidates</li>
            <li>AIR 6702 in JEE Main (2020) among 1.2M candidates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
