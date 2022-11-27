import React from "react";
import frame from "../../../../assets/Images/Dashboard/Frame.png";

export default function MyAdds() {
  return (
    <div className="form1 seventyfivevh">
      <strong className="flex justify-center items-start text-4xl">
        آگهی های من{" "}
      </strong>
      <div className="flex flex-row justify-between flex-wrap w-3/4 gap-2 m-auto">
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          <div className="bg-white mx-8 flex justify-center flex-col rounded-lg">
            <strong className="mx-auto">مسکونی دوبلکس 248 متر در پیروزی</strong>
            <div className="flex bg-white">
              <div className="w-2/3 rounded-lg">
                <img src={frame} alt="" className="rounded-lg" />
              </div>
              <div className="w-1/3 m-6 rounded-lg">
                <p className="mb-4">قیمت رهن : 620,000,000 تومان </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">قیمت اجاره : 4,500,000 تومان </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">متراژ : 248 متر</p>
              </div>
            </div>
            <hr
              style={{
                color: "black",
                marginBottom: "16px",
              }}
            />
            <div className="flex justify-end gap-4 mb-4">
              <button className="w-24 h-10 text-dark_red border-12 border-dark_red border-solid rounded-lg">
                حذف آگهی
              </button>
              <button className="w-24 h-10 text-primary-500 border-12 border-primary-500 border-solid rounded-lg">
                ویرایش آگهی
              </button>
              <button className="w-24 h-10 text-primary-500 border-12 border-primary-500 border-solid rounded-lg">
                مشاهده آگهی
              </button>
            </div>
          </div>
        </div>
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          <div className="bg-white mx-8 flex justify-center flex-col rounded-lg">
            <strong className="mx-auto">مسکونی دوبلکس 248 متر در پیروزی</strong>
            <div className="flex bg-white">
              <div className="w-2/3 rounded-lg">
                <img src={frame} alt="" className="rounded-lg" />
              </div>
              <div className="w-1/3 m-6 rounded-lg">
                <p className="mb-4">قیمت رهن : 620,000,000 تومان </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">قیمت اجاره : 4,500,000 تومان </p>
                <hr
                  style={{
                    color: "#D6D3D1",
                    marginBottom: "16px",
                  }}
                />
                <p className="mb-4">متراژ : 248 متر</p>
              </div>
            </div>
            <hr
              style={{
                color: "black",
                marginBottom: "16px",
              }}
            />
            <div className="flex justify-end gap-4 mb-4">
              <button className="w-24 h-10 text-dark_red border-12 border-dark_red border-solid rounded-lg">
                حذف آگهی
              </button>
              <button className="w-24 h-10 text-primary-500 border-12 border-primary-500 border-solid rounded-lg">
                ویرایش آگهی
              </button>
              <button className="w-24 h-10 text-primary-500 border-12 border-primary-500 border-solid rounded-lg">
                مشاهده آگهی
              </button>
            </div>
          </div>
        </div>
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          test
        </div>
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          test
        </div>
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          test
        </div>
        <div className="relative twoPart mt-6 border-12 border-solid border-primary-700 bg-white">
          test
        </div>
      </div>
    </div>
  );
}
