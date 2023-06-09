import "./Banner.css";
import { Button } from "@components";

function Banner() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://freshcart.codescandy.com/assets/images/slider/slider-image-1.jpg)",
      }}
      className="h-60 rounded-md bg-cover bg-right bg-no-repeat my-5 px-20 flex leading-[35px] items-center"
    >
      <div>
        <h1 className="font-semibold text-3xl text-slate-800">
          Xush kelibsiz Freshcartga!
        </h1>
        <p>FreshCart dasturchi va dizayner uchun sodda va toza dizayndir.</p>
        <Button>Maxsulot qo`shish</Button>
      </div>
    </div>
  );
}

export default Banner;
