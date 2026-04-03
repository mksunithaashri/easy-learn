import './globals.css';

export const metadata = {
  title: 'Explain Like I\'m 5',
  description: 'Learn anything in simple terms!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
