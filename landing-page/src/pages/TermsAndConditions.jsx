import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />

      <div className="w-full relative max-w-7xl mx-auto padding-x pt-48 pb-10">
        <h2 className="text-[24px] font-semibold leading-none">
          Terms & Conditions
        </h2>

        <div className="w-full border my-5" />

        <div className="w-full">
          <p className="">Last Updated: May 2026</p>

          <h3 className="font-semibold text-xl mt-4 mb-2">1. Introduction</h3>

          <p className="">
            These Terms & Conditions govern your use of the LookaLike mobile
            application and related services (“Service”) operated by Tony
            Kobach, on behalf of LookaLike LLC (“we”, “our”, “us”). By accessing
            or using LookaLike, you agree to be bound by these Terms.
          </p>

          <p className="mt-2">
            LookaLike is a social discovery platform that enables users to
            create profiles, discover nearby users, and access lookalike
            matching features powered by image analysis technologies.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">2. Eligibility</h3>

          <p className="">
            You must be at least 18 years old to use the Service. By creating an
            account, you confirm that:
          </p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "The information you provide is accurate and authentic",
              "You are legally permitted to use the Service",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <p className="mt-2">
            We reserve the right to suspend or remove accounts that contain
            false or misleading information.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            3. Account & Onboarding
          </h3>

          <p className="">To use LookaLike, users are required to:</p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "Create an account using email or third-party login providers",
              "Upload personal images and profile details",
              "Complete onboarding steps including preferences and interests",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <p className="mt-2">
            You are responsible for maintaining the confidentiality of your
            account.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            4. Facial Recognition & Lookalike Features
          </h3>

          <p className="">
            LookaLike uses image analysis and facial comparison technologies to:
          </p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "Verify user authenticity",
              "Suggest visually similar profiles",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <p className="mt-2">
            By using the Service, you explicitly consent to the processing of
            your uploaded images for these purposes.
          </p>

          <p className="mt-2">
            We do not guarantee the accuracy or reliability of similarity
            results.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            5. User Content & Conduct
          </h3>

          <p className="">
            You are solely responsible for the content you upload, including
            photos, text, and messages. You agree not to:
          </p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "Upload false, misleading, or impersonated content",
              "Share offensive, abusive, or unlawful material",
              "Harass, exploit, or harm other users",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <p className="mt-2">
            We reserve the right to remove content and suspend accounts that
            violate these rules.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            6. Matching & User Interactions
          </h3>

          <p className="">
            LookaLike enables users to connect and communicate within the app.
          </p>

          <p className="mt-2">
            We do not conduct background checks or guarantee the identity,
            intent, or behavior of any user.
          </p>

          <p className="mt-2">
            Any interaction, communication, or meeting with other users is
            entirely at your own risk.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            7. Location-Based Services
          </h3>

          <p className="">
            LookaLike uses geolocation to provide nearby discovery features.
          </p>

          <p className="mt-2">
            Location data may not always be accurate or real-time. We do not
            guarantee precise distance or availability of users.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            8. Messaging & Communication
          </h3>

          <p className="">
            Messaging is only available between mutually connected users.
          </p>

          <p className="mt-2">
            We may implement moderation, reporting, and blocking features to
            maintain platform safety.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            9. Subscription & In-App Purchases
          </h3>

          <p className="">LookaLike operates on a subscription-based model:</p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "New users may receive a limited free trial period",
              "After the trial, a monthly subscription is required to access premium features",
              "Subscriptions automatically renew unless canceled before the renewal date",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <p className="mt-2">Payments are processed through:</p>

          <ul className="mt-2 list-disc pl-4">
            {["Apple App Store (iOS)", "Google Play Store (Android)"].map(
              (t, i) => {
                return <li key={i}>{t}</li>;
              },
            )}
          </ul>

          <p className="mt-2">
            You must manage or cancel your subscription through your respective
            app store account.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">10. Refund Policy</h3>

          <p className="">
            All purchases made through Apple App Store or Google Play are
            subject to their respective billing policies.
          </p>

          <p className="mt-2">
            We do not directly issue refunds. You must request refunds through
            your app store provider.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">11. Privacy</h3>

          <p className="">
            Your use of LookaLike is also governed by our Privacy Policy.
          </p>

          <p className="mt-2">
            You retain control over your data, including the ability to update
            or delete your account.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            12. Suspension & Termination
          </h3>

          <p className="">
            We reserve the right to suspend or terminate your account if:
          </p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "You violate these Terms",
              "You misuse the platform",
              "Your activity poses a risk to other users or the platform",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            13. Limitation of Liability
          </h3>

          <p className="">
            LookaLike is provided on an “as is” and “as available” basis.
          </p>

          <p className="mt-2">We are not responsible for:</p>

          <ul className="mt-2 list-disc pl-4">
            {[
              "User behavior or interactions",
              "Accuracy of matches or recommendations",
              "Any direct or indirect damages resulting from use of the Service",
            ].map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
          </ul>

          <h3 className="font-semibold text-xl mt-4 mb-2">
            14. Changes to Terms
          </h3>

          <p className="">
            We may update these Terms from time to time. Continued use of the
            Service after updates constitutes acceptance of the revised Terms.
          </p>

          <h3 className="font-semibold text-xl mt-4 mb-2">15. Contact Us</h3>

          <p className="">
            If you have any questions regarding these Terms, please contact us:
          </p>

          <p className="">
            <span className="font-medium">Email: </span>{" "}
            <Link
              to={`mailto:support@lookalikematch.com`}
              className="hover:text-blue-600 hover:underline transition-all duration-100"
            >
              support@lookalikematch.com
            </Link>
          </p>

          <p className="">
            <span className="font-medium">Website: </span>{" "}
            <Link
              to={`https://lookalikematch.com/contact`}
              target="_blank"
              className="hover:text-blue-600 hover:underline transition-all duration-100"
            >
              https://lookalikematch.com/contact
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
