import "./App.css";
import { SideBar } from "./components/sidebar/sideBar";
import { Header } from "./components/header/header";
import { Content } from "./components/content/content";
import { Footer } from "./components/footer/footer";
import css_img from "../src/asset/img/css.png";
import html_img from "../src/asset/img/html.png";
import url_img from "../src/asset/img/url.png";

import {} from "./App.css";
function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="container-body">
        <Header />
        <div className="intro">
          <h2 className="title-intro"> Lorem ipsum dolor sit amet</h2>
          <p className="content-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
          </p>
        </div>
        <div className="container-content">
          <Content image={css_img} />
          <Content image={html_img} />
          <Content image={url_img} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
