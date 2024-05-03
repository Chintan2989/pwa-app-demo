const Payment = () => {
    const handleUPIRedirect = () => {
        const paymentAmount = 1; // Example payment amount, you can replace it with your own logic
        const upiId = '9725499375@upi'; // Example UPI ID, replace it with your own logic

        // Construct the UPI URI with payment amount and UPI ID
        const upiURI = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=MerchantName&mc=1234&tid=CUST001&tr=12345678&tn=Payment&am=${encodeURIComponent(paymentAmount)}&cu=INR`;

        // Check if the device is Android or iOS
        if (navigator.userAgent.match(/android/i)) {
            // For Android, directly redirect to the UPI app
            window.location.href = upiURI;
        } else if (navigator.userAgent.match(/(iphone|ipad|ipod)/i)) {
            // For iOS, try to open the UPI app and redirect to the App Store if not installed
            window.location.href = upiURI;
            setTimeout(() => {
                // Check if the UPI app was opened successfully
                if (document.visibilityState !== 'visible') {
                    // UPI app wasn't opened, redirect to App Store
                    window.location.href = 'https://apps.apple.com/in/app/google-pay/id575923525';
                }
            }, 500); // Adjust timeout as needed
        } else {
            // For other devices, provide a fallback link
            window.location.href = 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user';
        }
    }
  return (
    <div>
        <button onClick={handleUPIRedirect}>Open UPI App</button>
    </div>
  )
}

export default Payment