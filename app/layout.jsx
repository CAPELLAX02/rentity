import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Rentity | Find your next destination.',
  description: 'Rental website where there is a house for anyone.',
  keywords:
    'Rental properties, Cheap rentals, Affordable accommodation, Real estate, Property for rent, Budget housing, House rentals, Apartment rentals, Low-cost housing, Cheap real estate, Affordable housing, Rental homes, Cheap accommodation, Property leasing, Rent a house, Rental listings, Budget apartments, Affordable real estate, Cheap houses, House for rent, Low rent apartments, Economical housing, Cheap rental homes, Rental property management, Cheap flats, Affordable rental homes, Property for lease, Low-cost accommodation, Rent cheap houses, Discounted rentals, Cost-effective housing, Cheap housing options, Property rental deals, Affordable property listings, Best rental deals, Budget-friendly rentals, Rental houses near me, Cheap living spaces, Property for rent by owner, Low-budget rentals, House rental deals, Affordable living, Cheap long-term rentals, Real estate rentals, Cost-effective real estate, Affordable property deals, Convenient rentals, Budget-friendly real estate, Inexpensive rentals, Cheap vacation rentals, Rental property deals, Affordable rental market, Real estate for rent, Budget-friendly accommodation, Rental property offers, Discount housing, Cheap rental apartments, Affordable houses to rent, Cheap homes for rent, Economical real estate, Best value rentals, Affordable houses near me, Cost-saving rentals, Low-price rentals, Budget-friendly houses, Cheap rental listings, Real estate bargains, Affordable property options, Economical rentals, Best deals on rentals, Affordable leasing options, Rental homes deals, Cheap room rentals, Affordable living spaces, Property rental bargains, Cheap lease agreements, Affordable rental units, Low-cost property rentals, Budget-friendly leasing, Rental property specials, Affordable rent options, Low-price accommodation, Cheap rental properties near me, Affordable house leasing, Property rental discounts, Economical houses for rent, Budget-friendly homes for rent, Low-cost rental market, Cheap property management, Affordable housing deals, Budget real estate options, Property rental savings, Cheap home leasing, Affordable rental offers, Cost-effective rentals near me',
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}
