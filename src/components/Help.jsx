import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Help = () => {

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <div
                className="h-screen px-[200px] py-[50px] flex flex-col justify-center items-center space-y-12  "
            >
                <div className="text-[#F05455] font-black italic text-3xl">Hi there!</div>
                <p className="text-xl">Looks like you're offline. Please check your connection</p>
            </div>
        )
    }
    return (
        <div>
            <div className="px-[200px] py-[50px] space-y-5 space-x-1">
                <div className="text-lg space-y-2">
                    <div><Link className="text-blue-500" to="/">Home</Link>/Help</div>
                        <h1 className="text-3xl font-bold rounded-lg text-center text-[#F05455] px-2">Help Center</h1>
                    <div>
                        <p className="text-center font-bold text-xl py-[10px] px-2">Welcome to our Help Center! We're here to assist you in making your food delivery experience smooth and enjoyable. If you have any questions or concerns, you'll likely find the answers here. If not, feel free to reach out to our support team for personalized assistance.</p>
                    </div>
                    <div className="px-[100px] pt-[50px] space-y-10">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F05455]">Getting Started</h2>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">1. How to Place an Order:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Navigate to the home page and browse through the available restaurants.</li>
                                    <li>Select the restaurant of your choice and explore their menu.</li>
                                    <li>Add items to your cart and proceed to checkout.</li>
                                    <li>Provide delivery details and payment information to complete your order.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">2. Managing Your Account:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Create an account to save delivery addresses and payment methods.</li>
                                    <li>Log in to your account to view order history and track current orders.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F05455]">Common Questions</h2>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">1. Payment Issues:</h3>
                                <ul className="list-disc ml-10">
                                    <li>If you encounter any payment-related issues, ensure your payment information is correct.</li>
                                    <li>Contact your payment provider for assistance.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">2. Order Tracking:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Use the 'Track Order' feature to monitor the status of your delivery in real-time.</li>
                                    <li>Reach out to the restaurant or delivery driver for more specific updates.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">3. Refunds and Cancellations:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Review our cancellation policy for information on canceling orders.</li>
                                    <li>Contact customer support for assistance with refunds.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F05455]">Troubleshooting</h2>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">1. App Crashes:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Ensure you have the latest version of the app installed.</li>
                                    <li>Check your device's compatibility with the app requirements.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">2. Missing Items or Issues with Your Order:</h3>
                                <ul className="list-disc ml-10">
                                    <li>Contact the restaurant directly for issues with food quality or missing items.</li>
                                    <li>Report technical issues to our customer support team.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F05455]">Contact Us</h2>

                            <p className="text-xl font-semibold">
                                If you can't find the answers you're looking for or need personalized assistance, don't hesitate to reach out
                                to our support team. You can contact us via:
                            </p>

                            <ul className="list-disc ml-10">
                                <li>Email: support@yourfoodapp.com</li>
                                <li>Phone: +1 (123) 456-7890</li>
                                <li>Live Chat: Available on the app during business hours.</li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#F05455]">Feedback</h2>

                            <p className="text-xl font-semibold">
                                We value your feedback! If you have suggestions for improving our app or want to share your positive
                                experiences, please let us know. Your input helps us enhance our services.
                            </p>
                        </section>
                    </div>

                    <p className="text-[#F05455] text-2xl font-semibold pt-[50px]">Thanks for using our Food Delivery app! We hope you enjoy the convenience of having delicious meals delivered to your doorstep.</p>
                </div>
            </div>
        </div>
    );
};



export default Help