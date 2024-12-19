import Posts from "../components/Posts";
import Form from "../components/Form";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";
import Pagination from "../components/Pagination";

const HomePage = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex flex-col md:grid md:grid-cols-8 gap-3 md:gap-1 lg:grid-cols-7 w-[95%] md:w-[100%] mx-auto  lg:p-5 lg:px-10 ">
        {/* Form */}
        <div className="col-span-3 lg:col-span-2 shadow-white">
          <Searchbar />
          <Form />
          <Pagination />
        </div>

        {/* Posts */}
        <div className="col-span-5 grid justify-center rounded-lg md:col-start-1 md:row-start-1 m-3 mb-10 md:m-0 md:mb-10">
          <Posts />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
