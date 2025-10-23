import Link from "next/link";

export default function MoreInfo() {
  return (
    <section className="flex flex-col gap-12">
      <div className="w-full">
        <h2 className="heading-1 mb-8">Professional Experience</h2>
        
        <div className="mb-10">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold">Zepto</h3>
              <p className="text-lg font-semibold mt-1">Data Scientist II</p>
            </div>
            <p className="text-gray-600">June 2024 – Present</p>
          </div>
          <ul className="body-1 list-disc list-inside space-y-2 ml-4">
            <li>Designed and deployed a Reinforcement Learning–based Multi-Armed Bandit framework for dynamic city × SKU pricing, automating exploration–exploitation and delivering a 1.7% OPD lift and 1.2 Rs GPPO gain.</li>
            <li>Developed a Bayesian Hierarchical Model to estimate SuperSaver price elasticity from historical data, and validated through experiments on recommended prices, leading to a 0.5 Rs GPPO increase.</li>
            <li>Fine-tuned a GLiNER-based NER model for real-time query segmentation, achieving 89% accuracy and extending from a cached 35 Lakh base to real-time segmentation for 2.5Cr+ queries.</li>
            <li>Built a tree-based User × Category Premiumness Model to classify users with limited purchase history into premiumness cohorts, increasing coverage of high-value first-time buyers for recommendation ranking.</li>
            <li>Derived Store × Category Premiumness signals from user-level cohorts, enabling data-driven SKU onboarding decisions and reducing overstocking of premium SKUs at store level.</li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold">Zepto</h3>
              <p className="text-lg font-semibold mt-1">Data Scientist I</p>
            </div>
            <p className="text-gray-600">Jan 2024 – June 2024</p>
          </div>
          <ul className="body-1 list-disc list-inside space-y-2 ml-4">
            <li>Built a Churn Prediction Model using Spark XGB Classifier to proactively target users with coupons before churn, driving a daily increase of 40,000 orders with no GP loss.</li>
            <li>Enhanced the Buy-Again Widget by incorporating user ATC, clicks, and views into an XGB LTR model, improving CTR by 10% for FTB and ELC cohorts.</li>
            <li>Applied Causal ML with Double Machine Learning to construct a user-receivable sensitivity model for targeted interventions.</li>
          </ul>
          <p className="body-1 mt-4 font-semibold">Tech Stack: PySpark, SQL, Python, Kafka, Databricks, AWS, Streamlit, Shap, Large-scale system design</p>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold">Timely.AI</h3>
              <p className="text-lg font-semibold mt-1">Data Science Intern</p>
            </div>
            <p className="text-gray-600">Jan 2024 – Mar 2024</p>
          </div>
          <ul className="body-1 list-disc list-inside space-y-2 ml-4">
            <li>Built an Image Aesthetics Classifier using semantic segmentation, automating manual image filtering.</li>
            <li>Deployed the Image Classifier Model and automated model retraining through GitHub Actions.</li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-2xl font-bold">FilterPixel Inc.</h3>
              <p className="text-lg font-semibold mt-1">Machine Learning Intern</p>
            </div>
            <p className="text-gray-600">Aug 2023 – Oct 2023</p>
          </div>
          <ul className="body-1 list-disc list-inside space-y-2 ml-4">
            <li>Built FilterPixel Edits, a Lightroom plugin that learns from XMP data to automatically edit RAW images.</li>
            <li>Developed an Image Culling Tool using LBP, DD-Net, and CAG-Net, integrating automated pipelines for image acquisition, processing, and validation.</li>
          </ul>
          <p className="body-1 mt-4 font-semibold">Tech Stack: Python, Neural Networks, Google Cloud Platform, Data Structures and Algorithms</p>
        </div>

        <div className="mb-6">
          <h2 className="heading-1 mb-6">Projects</h2>
          <div>
            <h3 className="text-xl font-bold mb-2">Deep Learning based Lunar Surface Imaging</h3>
            <p className="body-1">Regenerated lunar images captured by the OHR Camera on Chandrayaan 2 using Neural Networks, specifically Autoencoders and Variational Autoencoders.</p>
          </div>
        </div>

        <p className="body-1 mt-8">
          Want to collaborate or discuss opportunities? →{" "}
          <Link className="underline" href="mailto:abhizep24@gmail.com">
            Send me an email
          </Link>
        </p>
      </div>
    </section>
  );
}
