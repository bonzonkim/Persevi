import '../styles/globals.css';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";


/*
  _app은 로직, 전역 스타일 등 컴포넌트에 공통 데이터를 다룬다.
  /styles/globals.css 가 글로벌 css파일
 */
const App = ({ Component, pageProps }: any) => {
  return(
      <div>
          <Navbar/>
          <Component {...pageProps}/>
          <Footer />
      </div>
  )
};

export default App;
