import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const pageData = [
  {
    title: "Valuation For VISA",
    content: "A visa valuation report is essential for applicants in various visa categories to demonstrate financial stability or ties to their home country. Tourist visa applicants use it to prove connections to their homeland, while student visa applicants include it as part of their financial documentation. Business and investor visa applicants rely on it to validate their assets, and family reunion visa applicants use it to show they can support their family financially. The report is prepared through a thorough process: a certified valuer inspects the property, analyses market trends to determine its fair value, and prepares a detailed report that includes a property description, market value assessment, ownership proof, and certification."
  },
  {
    title: "Valuation for Tax",
    content: "An IBBI-registered valuer provides essential services for various tax-related purposes. These include valuations for capital gains tax, where the fair market value of a property is assessed to calculate tax on profits from its sale, Valuations for gift tax ensure accurate assessment of gifted assets to determine tax applicability, while income tax valuations help comply with tax laws like Section 50C. Additionally, services include inheritance tax valuations in applicable jurisdictions and transfer pricing valuations for businesses transferring assets within entities. Though wealth tax is abolished in India, similar valuations are provided for estate planning or in countries where such taxes are applicable. These valuations ensure compliance with tax regulations, precise asset assessment, and smooth financial processes."
  },
  {
    title: "Valuation For Registration",
    content: "For registration purposes in Kerala, building valuation is required to determine the accurate market value of properties. As a Chartered Engineer and Registered Engineer-A, professional valuation services are offered to ensure compliance with local regulations. These expert valuations facilitate smooth and transparent registration processes for various property transactions, including sale, purchase, and legal formalities. Accurate property assessments are essential for ensuring fair transactions and meeting all regulatory requirements."
  }
];

const Enquiry = () => {
    const params = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        setData(pageData[params.pagenumber]);
    }, [params.pagenumber]);

    return (
        <div className="font-sans">
            <Header />
            <Navbar />
            <section className="text-center py-6 flex items-center justify-center flex-col">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white mt-8 h-auto md:h-[400px] w-full">
                    <div className="flex flex-col md:flex-row items-center md:pl-14 h-full">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold drop-shadow-2xl uppercase">
                                {data?.title}
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold drop-shadow-2xl pt-6 pl-4">
                                Precision in Valuation, Excellence in Advisory
                            </p>
                        </div>
                    </div>
                </div>
                <section className="py-8 text-center w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-red-500 via-blue-600 to-pink-500 pt-2 pb-2 rounded-3xl text-white">
                            {data?.title} Purpose
                        </h2>
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl md:text-2xl py-6 font-medium text-justify">{data?.content}</p>
                    </div>
                </section>
                <a href="https://wa.me/918891129013">
                <button
    className="bg-yellow-400 text-lg sm:text-xl hover:bg-yellow-500 py-4 px-12 rounded-3xl font-bold mb-4 transition-all duration-300 transform hover:scale-105 hover:text-2xl"
>
    ENQUIRE NOW
</button>

                </a>
            </section>
            <Footer />
        </div>
    );
};

export default Enquiry;
